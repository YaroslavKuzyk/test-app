<template>
  <div>
    <Title lg> egsdgdgdg </Title>
    <form>
      <img :src="picturePreview" alt="" />
      <input @change="saveImg" type="file" />
      <button @click.prevent="pushPicture">Push</button>
    </form>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
export default {
  name: "IndexPage",
  components: {
    Title,
  },
  data() {
    return {
      picture: "",
      picturePreview: "",
    };
  },
  methods: {
    async pushPicture() {
      if (this.picture) {
        try {
          const formData = new FormData();
          formData.append("picture", this.picture);
          formData.append("category", "asd");
          await fetch("http://localhost:8080/api/gallery", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((result) => {
              console.log("Success:", result);
            });
        } catch (error) {
          console.log(error);
        }
      }
    },
    saveImg(event) {
      let input = event.target;

      if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.picturePreview = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);

        this.picture = input.files[0];
      }
    },
    async fetchGallery() {
      let response = await fetch("http://localhost:8080/api/gallery").then(
        (res) => (response = res.json())
      );
      console.log(response);
    },
  },
  mounted() {
    this.fetchGallery();
  },
};
</script>
<style lang="scss"></style>
