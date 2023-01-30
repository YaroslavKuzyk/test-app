<template>
  <main>
      <Header/>
    <nuxt />
    <footer></footer>
  </main>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
};
</script>
<style lang="scss"></style>
