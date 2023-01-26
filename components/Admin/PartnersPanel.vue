<template>
  <div class="tab">
    <div class="tab__item">
      <div class="section">
        <span class="section__title">Партнери</span>
        <div class="section__content">
          <div class="add-partners">
            <UploadImg
              :preview.sync="preview"
              @picture="(el) => (picture = el)"
            />
            <button class="plus-button" @click="addItem"></button>
          </div>
          <div v-if="loader" class="loader-wrapper">
            <Loader />
          </div>
          <div v-else>
            <div class="parnters__item" v-for="item in items" :key="item._id">
              <img :src="`http://localhost:8080/${item.picture}`" />
              <button
                class="delete-button"
                @click="deleteItem(item._id)"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "@/components/Loader";
import UploadImg from "../UploadImg.vue";
export default {
  name: "PartnersPanel",
  components: { Loader, UploadImg },
  data() {
    return {
      items: [],
      loader: false,
      preview: "",
      picture: "",
    };
  },
  methods: {
    async fetchItems() {
      try {
        this.loader = true;
        const { data } = await axios.get("http://localhost:8080/api/partners");
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
        formData.append("picture", this.picture);

        const { data } = await axios({
          method: "post",
          url: "http://localhost:8080/api/partners",
          data: formData,
        });

        this.items = data;
        this.preview = "";
        this.picture = "";

        this.loader = false;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteItem(id) {
      try {
        this.loader = true;
        const { data } = await axios.delete(
          `http://localhost:8080/api/partners/${id}`
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

.add-partners {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
}

.parnters__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #000;

  img {
    height: 80px;
  }
}
</style>
