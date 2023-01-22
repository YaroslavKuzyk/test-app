<template>
  <header>
    <Header>
    </Header>
  </header>
  <section>
    
  </section>
</template>

<script>
import Title from '../components/Title.vue';
import Header from '../components/Header.vue';
import Preview from '../components/Preview.vue';
export default {
  name: 'IndexPage',
  components: {
    Title,
    Header,
    Preview
  },
  methods: {
    async fetchGallery(){
      let response = await fetch('http://localhost:8080/api/gallery').then(
        (res) => (response =  res.json())
        ); 
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