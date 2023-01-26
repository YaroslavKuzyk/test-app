<template>
  <div class="upload-file">
    <label for="slide">
      <img v-if="preview" :src="preview" alt="" />
      <img v-else src="@/assets/image/upload-image.png" alt="upload" />
    </label>
    <input @change="saveImg" type="file" id="slide" />
  </div>
</template>

<script>
export default {
  name: "UploadImg",
  props: {
    preview: {
      type: String,
      defaul: "",
    },
  },
  data() {
    return {
      picture: "",
    };
  },
  methods: {
    saveImg(event) {
      let input = event.target;

      if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = (e) => {
          this.$emit("update:preview", e.target.result);
        };

        reader.readAsDataURL(input.files[0]);

        this.picture = input.files[0];

        this.$emit("picture", this.picture);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-file {
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  input {
    display: none;
  }
}
</style>
