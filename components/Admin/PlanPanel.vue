<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Підписки</span>
        <div class="section__content">
          <div class="add-service">
            <div>
              <input
                v-model="name"
                class="admin-input"
                type="text"
                placeholder="Назва"
              />
              <input
                v-model="price"
                class="admin-input"
                type="text"
                placeholder="Ціна"
              />
              <div>
                <input
                  v-model="service"
                  class="admin-input"
                  type="text"
                  placeholder="Послуга"
                />
                <button class="service-button" @click="addService">
                  Добавити послугу
                </button>
              </div>
            </div>
            <button class="plus-button" @click="addItem"></button>
          </div>
          <div class="plans-preview">
            <div class="service">
              Назва: <span>{{ this.name }}</span>
            </div>
            <div class="service">
              Ціна: <span>{{ this.price }}</span>
            </div>
            <div class="service">
              Послуги:
              <span v-for="(item, index) in serviceArray" :key="index"
                >{{ item }} |
              </span>
            </div>
          </div>
          <div v-if="loader" class="loader-wrapper">
            <Loader />
          </div>
          <table v-else class="plan-table">
            <thead>
              <tr class="plan-thed">
                <td class="text-left">Назва</td>
                <td class="text-center">Ціна</td>
                <td class="text-center">Послуги</td>
                <td></td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in items" :key="item._id">
                <td class="text-left">{{ item.name }}</td>
                <td class="text-center">{{ item.price }}</td>
                <td class="text-center">
                  <div v-for="(plan, index) in item.plans" :key="index">
                    {{ plan }}
                  </div>
                </td>
                <td class="text-right">
                  <button
                    class="delete-button"
                    @click="deleteItem(item._id)"
                  ></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
import { dateParse } from "~/utils/dateParse.js";
import UploadImg from "../UploadImg.vue";
export default {
  name: "PlanPanel",
  components: { Loader, UploadImg },
  data() {
    return {
      items: [],
      loader: false,
      picture: "",
      preview: "",
      name: "",
      price: "",
      service: "",
      serviceArray: [],
    };
  },
  methods: {
    addService() {
      if (this.service) {
        this.serviceArray.push(this.service);
        this.service = "";
      }
    },
    dateParse,
    async fetchItems() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/plan");
        this.items = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async addItem() {
      try {
        this.loader = true;

        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("price", this.price);
        formData.append("plans", this.serviceArray);

        const { data } = await axios({
          method: "post",
          url: "http://localhost:8080/api/plan",
          data: formData,
        });

        this.items = data;
        this.name = "";
        this.price = "";
        this.serviceArray = [];

        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/plan/${id}`
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
.plan-table {
  width: 100%;

  tbody td {
    padding-bottom: 16px;
  }

  thead td {
    padding-bottom: 16px;
  }
}
.service-button {
  border: 0;
  padding: 7px 15px;
  color: #fff;
  background: rgb(42, 227, 237);
}
.add-service {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
  .admin-input {
    margin-right: 25px;
    width: 200px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.plans-preview {
  margin: 24px 0;
  padding: 16px;
  border: 2px solid #000;
}
</style>
