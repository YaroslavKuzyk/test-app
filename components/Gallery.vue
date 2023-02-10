<template>
    <section>
        <div class="portfolio-wrap">
            <Title lg>
                Portfolio
            </Title>
            <div class="portfolio-navigate">  
                <div @click="sortKey = 'all'">All</div>
                <div v-for="item in category" @click="sortKey= item.categoryName">{{item.categoryName}}</div>
            </div>
        </div>
        
        <div class="gallery-wrap">
            <img :src="`http://localhost:8080/${item.picture}`" v-for="item in filterGallery" :key="item._id"/>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Title from "@/components/Title.vue";
export default {
  name: 'Gallery',
  components: {
    Title,
  },
  data(){
    return{
        items:[],
        category: [],
        sortKey: 'all',
    }
  },
  computed:{
    filterGallery(){
        if(this.sortKey == 'all'){
            return this.items;
        }
        let array = [];
        array = this.items.filter(elem => elem.category === this.sortKey);
        return array;
    }
  },
  methods:{
    async fetchGallery(){
        try {
            const {data} = await axios.get('http://localhost:8080/api/gallery');
            this.items = data;
        } catch (error) {
            console.log(error);
        }
    },
    async fetchCategory(){
        try {
            const {data} = await axios.get('http://localhost:8080/api/category');
            this.category = data;
        } catch (error) {
            console.log(error);
        }
    },
  },
  mounted(){
    this.fetchGallery();
    this.fetchCategory();
  }
}
</script>
<style lang="scss">
.gallery-wrap{
    overflow-x: scroll;
    height: 1008px; 
    white-space: nowrap;
    width: 100%;
        display: flex;
        max-height: 1532px;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin: 10px;
            width: 300px;
        }
        img:nth-child(1n),img:nth-child(12n){
            height: 494px;
        }
        img:nth-child(3n),img:nth-child(4n),img:nth-child(5n){
            height: 288px;
        }
         img:nth-child(2n){
            height: 343px;
        }
        img:nth-child(6n){
            height: 367px;
        }
        img:nth-child(7n){
            height: 523px;
        }
        img:nth-child(8n){
            height: 318px;
        }
        img:nth-child(9n){
            height: 572px;
        }
}
.portfolio-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.portfolio-navigate{
    display: flex;
    div{
        color: #373A39;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.6px;
        padding: 15px;
        transition: all .3s;
        border-bottom: 1px solid transparent;
        text-transform: uppercase;
        cursor: pointer;
        &:first-child {
            border-bottom: 1px solid #FCBB08;
        }
        &:hover{
            border-bottom: 1px solid #FCBB08;
        }
    }
}
</style>
