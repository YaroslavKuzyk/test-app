<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Категорії</span>
        <div class="section__content">
          <div class="category">
            <div class="category-add">
              <input
                class="admin-input"
                v-model="newCategory"
                type="text"
                placeholder="Додати категорію"
              />
              <button class="plus-button" @click="addCategory"></button>
            </div>
            <div v-if="loader" class="loader-wrapper">
              <Loader />
            </div>
            <div v-else>
              <div class="category-list">
                <span
                  class="category-list__item"
                  v-for="item in categories"
                  :key="item._id"
                  >{{ item.categoryName }}
                  <button
                    class="delete-button"
                    @click="deleteCategory(item._id)"
                  ></button
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <span class="section__title">Галерея</span>
        <div class="section__content">
          <table class="gallery-table">
            <thead>
              <tr class="gallery-add">
                <td class="text-left">
                  <div class="select">
                    <div
                      class="select__header"
                      @click="openSelect = !openSelect"
                    >
                      {{ selectCategory }}
                    </div>
                    <div
                      :class="{ active: openSelect }"
                      class="select__content"
                    >
                      <span
                        class="select__item"
                        v-for="item in categories"
                        :key="item._id"
                        @click="
                          (selectCategory = item.categoryName),
                            (openSelect = false)
                        "
                        >{{ item.categoryName }}</span
                      >
                    </div>
                  </div>
                </td>
                <td class="text-center">
                  <div class="upload-gallery">
                    <label for="gallery">
                      <img v-if="galleryPreview" :src="galleryPreview" alt="" />
                      <img
                        v-else
                        src="@/assets/image/upload-image.png"
                        alt="upload"
                      />
                    </label>
                    <input @change="saveImg" type="file" id="gallery" />
                  </div>
                </td>
                <td></td>
                <td class="text-right">
                  <button class="plus-button" @click="addGallery"></button>
                </td>
              </tr>
              <tr class="gallery-thed">
                <td class="text-left">Категорія</td>
                <td class="text-center">Картинка</td>
                <td class="text-center">Дата</td>
              </tr>
            </thead>
            <div v-if="loader" class="loader-wrapper">
              <Loader />
            </div>
            <tbody v-else>
              <tr
                class="gallery__item"
                v-for="item in sortGallery"
                :key="item._id"
              >
                <td class="text-left">{{ item.category }}</td>
                <td class="text-center">
                  <img
                    class="gallery-img"
                    :src="`http://localhost:8080/${item.picture}`"
                  />
                </td>
                <td class="text-center">{{ dateParse(item.date) }}</td>
                <td class="text-right">
                  <button
                    class="delete-button"
                    @click="deleteGallery(item._id)"
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
  name: "GalleryPanel",
  components: { Loader },
  data() {
    return {
      categories: [],
      gallery: [],
      newCategory: "",
      selectCategory: "Виберіть категорію",
      loader: false,
      openSelect: false,
      galleryPreview: "",
      galleryPicture: "",
    };
  },
  computed: {
    sortGallery() {
      return orderBy(this.gallery, "date", "desc");
    },
  },
  methods: {
    dateParse,
    saveImg(event) {
      let input = event.target;

      if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.galleryPreview = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);

        this.galleryPicture = input.files[0];
      }
    },
    async fetchCategories() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/category");
        this.categories = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async addCategory() {
      try {
        if (this.newCategory) {
          this.loader = true;
          const { data } = await axios({
            method: "post",
            url: "http://localhost:8080/api/category",
            data: {
              categoryName: this.newCategory,
            },
            headers: {
              Autorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          this.categories = data;
          this.newCategory = "";
          this.loader = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCategory(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/category/${id}`
        );
        this.categories = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchGallery() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/gallery");
        this.gallery = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
    async addGallery() {
      try {
        if (
          this.selectCategory != "Виберіть категорію" &&
          this.galleryPicture
        ) {
          this.loader = true;
          const formData = new FormData();
          formData.append("picture", this.galleryPicture);
          formData.append("category", this.selectCategory);
          formData.append("date", Date.now());

          const { data } = await axios({
            method: "post",
            url: "http://localhost:8080/api/gallery",
            data: formData,
            headers: {
              Autorization: "Bearer " + localStorage.getItem("token"),
            },
          });

          this.gallery = data;
          this.galleryPicture = "";
          this.galleryPreview = "";
          this.selectCategory = "Виберіть категорію";
          this.loader = false;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async deleteGallery(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/gallery/${id}`
        );
        this.gallery = data;
        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchGallery();
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-bottom: 60px;
}
.loader-wrapper {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab {
  width: 100%;
}

.section__title {
  display: block;
  width: 100%;
  font-size: 24px;
  padding-bottom: 8px;
  margin-bottom: 16px;
  color: rgb(120, 120, 120);
  border-bottom: 2px solid rgb(120, 120, 120);
}

.category-list {
  display: flex;
  flex-direction: column;
  height: 285px;
  width: 100%;
  margin-top: 15px;
  overflow: auto;
}

.category {
  display: flex;
  flex-direction: column;
}

.plus-button {
  background: rgb(42, 227, 237);
  width: 30px;
  height: 30px;
  position: relative;
  border: 0;
  cursor: pointer;
  border-radius: 8px;

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    top: calc(50% - 1px);
    left: calc(50% - 10px);
  }

  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    top: 14px;
    left: calc(50% - 10px);
    transform: rotate(90deg);
  }
}

.delete-button {
  background: rgb(245, 56, 56);
  width: 30px;
  height: 30px;
  position: relative;
  border: 0;
  cursor: pointer;
  border-radius: 8px;

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    top: calc(50% - 1px);
    left: calc(50% - 10px);
    transform: rotate(-45deg);
  }

  &::before {
    position: absolute;
    content: "";
    width: 20px;
    height: 2px;
    background: #fff;
    top: 14px;
    left: calc(50% - 10px);
    transform: rotate(945deg);
  }
}

.admin-input {
  height: 28px;
  width: 100%;
  border: 1px solid rgb(120, 120, 120);
  border-radius: 8px;
  padding: 0 10px;
}

.category-add {
  display: flex;

  .admin-input {
    margin-right: 15px;
  }
}
.category-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  &:hover {
    background: rgb(241, 241, 241);
  }
}

.gallery-table {
  width: 100%;
}

.gallery-img {
  height: 50px;
}

.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.select {
  display: inline-block;
  position: relative;
  min-width: 150px;
}
.select__header {
  background: rgb(42, 227, 237);
  padding: 10px;
  color: #fff;
  cursor: pointer;
}
.select__content {
  position: absolute;
  left: 0;
  width: 100%;
  display: none;
  height: 200px;
  overflow: auto;
  flex-direction: column;
  border-top: 2px solid #fff;
  background: rgb(42, 227, 237);
  color: #fff;
}
.select__content.active {
  display: flex;
}

.select__item {
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background: rgb(101, 210, 216);
  }
}

.upload-gallery {
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  input {
    display: none;
  }
}
.gallery-add td {
  padding: 20px 0;
}

.gallery-thed td {
  padding-bottom: 20px;
}
</style>
