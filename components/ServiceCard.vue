<template>
    <section class="servis">
        <div v-for="item in service" class="servis-card">
            <img :src="require(`@/assets/image/servis_img/${item.image}`)"/>
            <div class="servis-text">
                <h2>{{item.name}}</h2>
                <p>
                    {{item.text}}
                </p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
  name: 'ServiceCard',
  data(){
    return {
        service: [
            {
                name: "graphic design", 
                text: 'Рекламный дизайн, дизайн упаковки, этикетки, листовок, каталогов, разработка презентаций, дизайн выставочных стендов',
                image: 'vector.png'
            },
            {
                name: "web development", 
                text: 'Разрабатываем веб сайты от концепции до реализации. Дизайн, верстка, программирование и запуск сайт в сеть',
                image: 'speaker copy.png'
            },
            {
                name: "marketing", 
                text: 'Разрабатываем маркетинговое и рекламное продвижение Вашего продукта или услуги под ключ и на любой бюджет.',
                image: 'monitor.png'
            },
        ]
    }
  }
}
</script>
<style lang="scss" scoped>
.servis{
    display: flex;
    justify-content: center;
    padding-top: 120px;
    &-card{
        max-width: 370px;
        display: flex;
        margin: 0 30px;
    }
    img{
        width: 45px;
        height: 39px;
        margin-right: 40px;
    }
    &-text{
        h2{
            text-transform: uppercase;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 4.2875px;
            color: #333333;
            padding-bottom: 20px;
        }
        p{
            font-weight: 300;
            font-size: 14px;
            line-height: 24px;
            color: #777777;
        }
    }
}
</style>