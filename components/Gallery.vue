<template>
    <section>
        <div @click="sortKey = 'all'">All</div>
        <div v-for="item in category" @click="sortKey= item.categoryName">{{item.categoryName}}</div>
        <div class="gallery-wrap">
            <img :src="`http://localhost:8080/${item.picture}`" v-for="item in filterGallery" :key="item._id"/>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Gallery',
  name: 'Title',
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
    width: 99%; 
    max-height: 920px; 
    white-space: nowrap;
    display: grid;
    grid-template-columns: 410px 420px 180px;
    grid-gap: 10px;
    img{
        width: 400px;
    }
}
</style>