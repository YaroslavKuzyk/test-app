<template>
  <div>
    <header>
      <Header>
      </Header>
    </header>
    <section class="prevue">
      <div class="prevue_txt">
        <h1>
          O...marketing
        </h1>
        <p class="prevue_logo2">
          DIGITAL MARKETING AGENCY
        </p>
      </div>
      <div class="prevue_mouse">
        <img src="../assets/image/mouse.png">
      </div>
    </section>
    <section class="about">
      <Title md>
        About us
      </Title>
      <div class="about_text">
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
import Title from '../components/Title.vue';
import Header from '../components/Header.vue';
export default {
  name: 'IndexPage',
  components: {
    Title,
    Header
  },
  // methods: {
  //   async pushPicture() {
  //     if (this.picture) {
  //       try {
  //         const formData = new FormData();
  //         formData.append("picture", this.picture);
  //         formData.append("category", "asd");
  //         await fetch("http://localhost:8080/api/gallery", {
  //           method: "POST",
  //           body: formData,
  //         })
  //           .then((response) => response.json())
  //           .then((result) => {
  //             console.log("Success:", result);
  //           });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   },
  //   saveImg(event) {
  //     let input = event.target;

  //     if (input.files && input.files[0]) {
  //       let reader = new FileReader();

  //       reader.onload = (e) => {
  //         this.picturePreview = e.target.result;
  //       };

  //       reader.readAsDataURL(input.files[0]);

  //       this.picture = input.files[0];
  //     }
  //   },
  //   async fetchGallery() {
  //     let response = await fetch("http://localhost:8080/api/gallery").then(
  //       (res) => (response = res.json())
  //     );
  //     console.log(response);
  //   },
  // },
  // mounted() {
  //   this.fetchGallery();
  // },
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
.prevue_txt{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 250px;
}
.prevue_logo2{
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
.prevue_mouse{
  padding-top: 100px;
}
.about{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #F6F8FA;
  padding: 150px 0;
}
.about_text{
  max-width: 770px;
   p:last-child{
    padding-top: 20px;
   }
}
</style>