<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Повідомлення</span>
        <div v-if="loader" class="loader-wrapper">
          <Loader />
        </div>
        <div v-else class="notification-wrapper">
          <div
            class="notification-item"
            :class="{ new: item.new }"
            v-for="item in getSortedNotification"
            :key="item._id"
            @mouseleave="updateItem(item._id, item.new)"
            @click.stop="item.open = !item.open"
          >
            <div class="notificaion-item__heeader">
              <div class="notificaion-item__email">
                {{ item.email }} <span v-if="item.new" class="new"></span>
              </div>
              <div class="notification-item__right">
                <div class="notificaion-item__date">
                  {{ dateParse(item.date) }}
                </div>
                <button
                  class="delete-button"
                  @click.stop="deleteItem(item._id)"
                ></button>
              </div>
            </div>
            <div class="notification-item__content" v-if="item.open">
              <div class="notification-item__name">{{ item.name }}</div>
              <div class="notification-item__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi repellat veritatis debitis unde nostrum perspiciatis
                porro explicabo incidunt molestiae dolorem ipsam, aliquid
                aliquam at quam non corporis sit ducimus consequuntur optio
                mollitia. Illum impedit non iusto, totam eveniet harum tenetur!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import orderBy from "lodash/orderBy";
import Loader from "@/components/Loader";

import { dateParse } from "~/utils/dateParse.js";

export default {
  name: "NotificationPanel",
  comments: { Loader },
  data() {
    return {
      items: [],
      loader: false,
      activeNotification: false,
    };
  },
  computed: {
    getSortedNotification() {
      for (const item in this.items) {
        this.$set(this.items[item], "open", false);
      }
      return orderBy(this.items, "date", "desc");
    },
  },
  methods: {
    dateParse,
    async fetchItems() {
      try {
        this.loader = true;
        const { data } = await axios.get(
          "http://localhost:8080/api/contact-form"
        );
        this.items = data;
        for (const item in data) {
          if (data[item].new) {
            this.activeNotification = true;
          }
        }
        this.$store.commit("config/SET_NOTIFICATION", this.activeNotification);

        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async updateItem(id, isNew) {
      try {
        if (isNew) {
          const { data } = await axios.put(
            `http://localhost:8080/api/contact-form/${id}`,
            {
              new: false,
            }
          );
          this.items = data;
        }
        for (const item in data) {
          if (data[item].new) {
            this.activeNotification = true;
          }
        }
        this.$store.commit("config/SET_NOTIFICATION", this.activeNotification);
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItem(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/contact-form/${id}`
        );
        this.items = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchItems();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/admin/admin.scss";

.notification-item.new {
  background: rgb(241, 241, 241);
}
.notification-item {
  padding: 20px 20px;
  cursor: pointer;

  &:hover {
    background: rgb(230, 230, 230);
  }
}

.notification-item__content {
  padding: 10px 0 0 0;
}

.notificaion-item__heeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.notificaion-item__email {
  display: flex;
  align-items: center;
  .new {
    display: block;
    width: 10px;
    height: 10px;
    background: rgb(42, 227, 237);
    border-radius: 50%;
    margin-left: 15px;
  }
}

.notification-item__right {
  display: flex;
  align-content: center;
}

.notificaion-item__date {
  display: flex;
  align-items: center;
  margin-right: 15px;
}

.notification-item__name {
  margin-bottom: 7px;
}
</style>
