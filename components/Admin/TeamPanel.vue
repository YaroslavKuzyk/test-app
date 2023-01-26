<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Команда</span>
        <div class="section__content">
          <div class="add-team">
            <div>
              <input
                v-model="name"
                class="admin-input"
                type="text"
                placeholder="ПІБ"
              />
              <input
                v-model="job"
                class="admin-input"
                type="text"
                placeholder="Посада"
              />
              <UploadImg
                :preview.sync="preview"
                @picture="(el) => (picture = el)"
              />
            </div>
            <button class="plus-button" @click="addItem"></button>
          </div>
          <div v-if="loader" class="loader-wrapper">
            <Loader />
          </div>
          <table v-else class="team-table">
            <thead>
              <tr class="team-thed">
                <td class="text-left">ПІБ</td>
                <td class="text-center">Посада</td>
                <td class="text-center">Фото</td>
                <td></td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in items" :key="item._id">
                <td class="text-left">{{ item.name }}</td>
                <td class="text-center">{{ item.job }}</td>
                <td class="text-center">
                  <img :src="`http://localhost:8080/${item.picture}`" />
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
  name: "TeamPanel",
  components: { Loader, UploadImg },
  data() {
    return {
      items: [],
      loader: false,
      picture: "",
      preview: "",
      name: "",
      job: "",
    };
  },
  methods: {
    dateParse,
    async fetchItems() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/team");
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
        formData.append("job", this.job);
        formData.append("picture", this.picture);

        const { data } = await axios({
          method: "post",
          url: "http://localhost:8080/api/team",
          data: formData,
        });

        this.items = data;
        this.picture = "";
        this.preview = "";
        this.name = "";
        this.job = "";

        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/team/${id}`
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
.team-table {
  width: 100%;

  tbody img {
    height: 50px;
  }

  td {
    width: 24%;
  }

  thead td {
    padding-bottom: 16px;
  }
}
.add-team {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
  .admin-input {
    margin-right: 25px;
    width: 300px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
