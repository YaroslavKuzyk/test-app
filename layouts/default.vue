<template>
  <main>
    <div>
      <Head>
      </Head>
    </div>
    <nuxt />
    <footer></footer>
  </main>
</template>

<script>
import Head from '../components/Header.vue';
export default {
  name: "DefaultLayout",
  components: {
    Head,
  },
};
</script>
<style lang="scss"></style>
