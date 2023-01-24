<template>
  <div v-if="getAuth" class="panel">
    <div class="tabs-name">
      <ul>
        <li v-for="item in tabsName" :key="item.value">{{ item.name }}</li>
      </ul>
    </div>
    <div class="scroller">
      <GalleryPanel />
    </div>
  </div>
</template>

<script>
import GalleryPanel from "@/components/Admin/GalleryPanel";
import { mapGetters } from "vuex";
export default {
  layout: "AdminLayout",
  name: "panel",
  components: { GalleryPanel },
  data() {
    return {
      tabsName: [{ name: "Галерея", value: "gallery" }],
    };
  },
  computed: {
    ...mapGetters({ getAuth: "config/getAuth" }),
  },
  mounted() {
    this.$store.dispatch("config/authenticated");
    if (!this.getAuth) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  padding: 15px 0 15px 25px;
}
.tabs-name {
  width: 30%;
}

.scroller {
  height: calc(100vh - 30px);
  width: 70%;
  overflow: auto;
  padding-right: 25px;
}
</style>
