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
              <div class="upload-file">
                <label for="slide">
                  <img v-if="sliderPreview" :src="sliderPreview" alt="" />
                  <img
                    v-else
                    src="@/assets/image/upload-image.png"
                    alt="upload"
                  />
                </label>
                <input @change="saveImg" type="file" id="slide" />
              </div>
            </div>
            <button class="plus-button" @click="addSlider"></button>
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
              <tr v-for="item in slider" :key="item._id">
                <td class="text-left">{{ item.title }}</td>
                <td class="text-center">{{ item.subtitle }}</td>
                <td class="text-center">{{ dateParse(item.date) }}</td>
                <td class="text-center">
                  <img :src="`http://localhost:8080/${item.picture}`" />
                </td>
                <td>
                  <button
                    class="delete-button"
                    @click="deleteSlider(item._id)"
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
export default {
  name: "SliderPanel",
  components: { Loader },
  data() {
    return {
      slider: [],
      loader: false,
      sliderPreview: "",
      sliderPicture: "",
      title: "",
      text: "",
    };
  },
  methods: {
    dateParse,
    saveImg(event) {
      let input = event.target;

      if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.sliderPreview = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);

        this.sliderPicture = input.files[0];
        console.log(this.sliderPicture);
      }
    },
    async fetchSlider() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/slider");
        this.slider = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async addSlider() {
      try {
        console.log(this.sliderPicture);
        console.log("start");
        this.loader = true;
        const formData = new FormData();
        formData.append("title", this.title);
        formData.append("subtitle", this.text);
        formData.append("date", Date.now());
        formData.append("picture", this.sliderPicture);

        const { data } = await axios({
          method: "post",
          url: "http://localhost:8080/api/slider",
          data: formData,
        });
        console.log("end");
        this.slider = data;
        this.sliderPreview = "";
        this.sliderPicture = "";
        this.text = "";
        this.title = "";
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchSlider();
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
