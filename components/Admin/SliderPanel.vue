<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Слайдер</span>
        <div class="section__content">
          <div class="add-slider">
            <div>
              <input
                v-model="title"
                class="admin-input"
                type="text"
                placeholder="Додати назву"
              />
              <input
                v-model="text"
                class="admin-input"
                type="text"
                placeholder="Додати текст"
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
          <table v-else class="slider-table">
            <thead>
              <tr class="slider-thed">
                <td class="text-left">Заголовок</td>
                <td class="text-center">Текст</td>
                <td class="text-center">Дата</td>
                <td class="text-center">Картинка</td>
                <td></td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="item in sortSlider" :key="item._id">
                <td class="text-left">{{ item.title }}</td>
                <td class="text-center">{{ item.subtitle }}</td>
                <td class="text-center">{{ dateParse(item.date) }}</td>
                <td class="text-center">
                  <img :src="`http://localhost:8080/${item.picture}`" />
                </td>
                <td>
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
import orderBy from "lodash/orderBy";
import UploadImg from "../UploadImg.vue";

export default {
  name: "SliderPanel",
  components: { Loader, UploadImg },
  data() {
    return {
      items: [],
      loader: false,
      preview: "",
      picture: "",
      title: "",
      text: "",
    };
  },
  computed: {
    sortSlider() {
      return orderBy(this.items, "date", "desc");
    },
  },
  methods: {
    dateParse,
    async fetchItems() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/carusel");
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
        formData.append("title", this.title);
        formData.append("subtitle", this.text);
        formData.append("date", Date.now());
        formData.append("picture", this.picture);

        const { data } = await axios({
          method: "post",
          url: "http://localhost:8080/api/carusel",
          data: formData,
        });

        this.items = data;
        this.preview = "";
        this.picture = "";
        this.text = "";
        this.title = "";

        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/carusel/${id}`
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
.slider-table {
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
.add-slider {
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
