<template>
  <div v-if="getAuth" class="panel">
    <div class="tabs-name">
      <ul>
        <li @click="$router.push('/')">На сайт</li>
        <li
          v-for="item in tabsName"
          :key="item.value"
          @click="tab = item.value"
        >
          {{ item.name
          }}<img
            src="@/assets/image/notification.svg"
            v-if="item.value === 'notification' && getNotification"
          />
        </li>
      </ul>
    </div>
    <div class="scroller">
      <NotificationPanel v-if="tab == 'notification'" />
      <GalleryPanel v-if="tab == 'gallery'" />
      <SliderPanel v-if="tab == 'slider'" />
    </div>
  </div>
</template>

<script>
import GalleryPanel from "@/components/Admin/GalleryPanel";
import NotificationPanel from "@/components/Admin/NotificationPanel";
import SliderPanel from "@/components/Admin/SliderPanel";

import { mapGetters } from "vuex";
export default {
  layout: "AdminLayout",
  name: "panel",
  components: { GalleryPanel, NotificationPanel, SliderPanel },
  data() {
    return {
      tabsName: [
        { name: "Повідомлення", value: "notification" },
        { name: "Галерея", value: "gallery" },
        { name: "Слайдер", value: "slider" },
      ],
      tab: "notification",
    };
  },
  computed: {
    ...mapGetters({
      getAuth: "config/getAuth",
      getNotification: "config/getNotification",
    }),
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
@import "@/assets/styles/admin/admin.scss";
</style>
