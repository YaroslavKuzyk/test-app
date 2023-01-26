<template>
  <div>
    <section class="prevue">
      <div class="prevue-txt">
        <h1>
          O...marketing
        </h1>
        <p class="prevue-logo2">
          DIGITAL MARKETING AGENCY
        </p>
      </div>
      <div class="prevue-mouse">
        <img src="../assets/image/mouse.png">
      </div>
    </section>
    <section class="about">
      <Title md>
        About us
      </Title>
      <div class="about-text">
        <p>
          Практика показывает, что большие продажи далеко не всегда зависят от того, сколько вы потратите на продвижение сайта и рекламную кампанию. Значительно сильнее конечный результат зависит от правильной организации кампании. Мы достигаем максимальной эффективности и помогаем сберечь бюджеты наших клиентов, используя стратегический интернет-маркетинг.
        </p>
        <p>
          Определяем цели продвижения — что наш клиент хочет получить, когда работа будет сделана. Проводим маркетинговые исследования рынка, целевой аудитории, конкурентной среды. При разработке стратегии учитываем все имеющиеся данные.
        </p>
      </div>
    </section>
    
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import Progress from '../components/ProgressBar.vue';
export default {
  name: "IndexPage",
  components: {
    Title,
    Progress,
  },
  data: {
    progressObject:{
      BRANDING: 90,
      DESIGN: 80,
      DEVELOPMENT: 85
    }
  }
  
};

</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  font-family: 'SF Pro Display';
  font-style: normal;
}
.prevue{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/image/Header-bg.png");
  font-family: 'Montserrat';
  font-style: normal;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: space-evenly;
}
.prevue-txt{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 250px;
}
.prevue-logo2{
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: flex-end;
  padding-top: 20px;
  text-align: center;
  letter-spacing: 2.74286px;
  color: #FCBB08;
 }
h1{
  font-weight: 500;
  font-size: 72px;
  line-height: 88px;
  display: flex;
  align-items: flex-end;
  text-align: center;
  color: #FFFFFF;
}
.prevue-mouse{
  padding-top: 100px;
}
.about{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #F6F8FA;
  padding: 150px 0;
}
.about-text{
  max-width: 770px;
   p:last-child{
    padding-top: 20px;
   }
}
</style>