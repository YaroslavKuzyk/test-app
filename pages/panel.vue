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
      <PartnersPanel v-if="tab == 'partners'" />
      <TeamPanel v-if="tab == 'team'" />
      <PlanPanel v-if="tab == 'plan'" />
    </div>
  </div>
</template>

<script>
import GalleryPanel from "@/components/Admin/GalleryPanel";
import NotificationPanel from "@/components/Admin/NotificationPanel";
import SliderPanel from "@/components/Admin/SliderPanel";
import PartnersPanel from "@/components/Admin/PartnersPanel";
import TeamPanel from "@/components/Admin/TeamPanel";
import PlanPanel from "@/components/Admin/PlanPanel";

import { mapGetters } from "vuex";
export default {
  layout: "adminLayout",
  name: "panel",
  components: {
    GalleryPanel,
    NotificationPanel,
    SliderPanel,
    PartnersPanel,
    TeamPanel,
    PlanPanel,
  },
  data() {
    return {
      tabsName: [
        { name: "Повідомлення", value: "notification" },
        { name: "Галерея", value: "gallery" },
        { name: "Слайдер", value: "slider" },
        { name: "Партнери", value: "partners" },
        { name: "Команда", value: "team" },
        { name: "Підписки", value: "plan" },
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
