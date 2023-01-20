<template>
  <Title lg>
    egsdgdgdg
</Title>
</template>

<script>
import Title from '../components/Title.vue';
export default {
  name: 'IndexPage',
  components: {
    Title
  },
  methods: {
    async fetchGallery(){
      let response = {};
      await fetch('http://localhost:8080/api/gallery').then(res=>response=res.json()); 
      console.log(response);
    }
  },
  mounted(){
    this.fetchGallery();
  }
}
</script>
<style lang="scss">
</style>