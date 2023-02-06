<template>
  <div>
    <section class="preview">
      <div class="preview-logo">
        <h1>
          O...marketing
        </h1>
        <p class="preview-subscribe">
          DIGITAL MARKETING AGENCY
        </p>
      </div>
      <div class="preview-mouse">
        <img src="../assets/image/mouse.png">
      </div>
    </section>
    <section class="about">
      <Title md>
        About us
      </Title>
      <div class="about-item">
        <p>
          Практика показывает, что большие продажи далеко не всегда зависят от того, сколько вы потратите на продвижение сайта и рекламную кампанию. Значительно сильнее конечный результат зависит от правильной организации кампании. Мы достигаем максимальной эффективности и помогаем сберечь бюджеты наших клиентов, используя стратегический интернет-маркетинг.
        </p>
        <p>
          Определяем цели продвижения — что наш клиент хочет получить, когда работа будет сделана. Проводим маркетинговые исследования рынка, целевой аудитории, конкурентной среды. При разработке стратегии учитываем все имеющиеся данные.
        </p>
      </div>
    </section>
    <section class="expertise">
      <Title lg>
        Our Expertise
      </Title>
      <div class="expertise-wrap">
        <ProgressBar/>
        <div class="about-item">
          <p>
            В стратегию интернет-маркетинга входит создание имиджевой и рекламной концепции, разработка контент-стратегии, распределение использования различных каналов коммуникации.
          </p>
          <p>
            Реализуем принятую стратегию, отслеживая промежуточные результаты, и корректируя будущие действия с учетом изменений. Главной целью в этом процессе для нас является конечный результат, а не следование планам.
          </p>
        </div>
      </div>
    </section>
    <ServiceCard/>
    <section>
      <div class="marketing">
        <img src="../assets/image/img.jpg">
        <div class="marketing-text">
          <Title lg>
            Let’s make magic.
          </Title>
          <div>
            <p>
            Маркетинговое агентство MGN: полный комплекс маркетинговых, рекламных и дизайнерских услуг в Харькове и Украине: маркетинговые исследования рынков, товаров, потребителей, планирование комплекса маркетинга, реклама, проведение рекламных кампаний, брендинг, рекламный дизайн, pr.
          </p>
          <p>
            Нами накоплен немалый опыт работы в реальном бизнесе, в самых различных отраслях – от недвижимости до аптечного и медицинского бизнеса. Мы не просто беремся решать задачи наших клиентов, мы сами вышли из бизнес-среды и понимаем суть бизнес-процессов.
          </p>
          <p>
            Мы говорим с бизнесом на одном языке!
          </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <Gallery/>
    </section>
  </div>
</template>

<script>
import Title from "../components/Title.vue";
import ProgressBar from '../components/ProgressBar.vue';
import Gallery from "../components/Gallery.vue";
import ServiceCard from "../components/ServiceCard.vue";
export default {
  name: "IndexPage",
  components: {
    Title,
    ProgressBar,
    Gallery,
    ServiceCard,
  },
};

</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  font-family: 'SF Pro Display';
  font-style: normal;
}
.preview{
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
.preview-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 250px;
}
.preview-subscribe{
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
.preview-mouse{
  padding-top: 100px;
}
.about{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #F6F8FA;
  padding: 150px 0;
}
.about-item{
  max-width: 770px;
   p:last-child{
    padding-top: 18px;
   }
}
.expertise{
  padding: 140px 0 0 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.expertise-wrap{
  padding-top: 100px;
  display: flex;
  justify-content: space-between;
}
.marketing{
  display: flex;
  align-items: center;
  background: #F6F8FA;
  margin-top: 180px;
  img{
    width: 705px;
    height: 840px;
  }
  &-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    div{
      padding-top: 80px;
    }
    p{
      max-width: 470px;
    }
    p:nth-child(2n){
      padding: 25px 0;
    }
  }
}
</style>