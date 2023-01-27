<template>
    <header class="header-wrap">
        <div>
            <img src="../assets/image/LOGO.png">
        </div>
        <div class="header-item">
            <a :href="item.link" v-for="item in links" :key="item.name">{{item.name}}</a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
        links: [
            {name: "home", link: '#'},
            {name: "ABOUT US", link: '#'},
            {name: "PORTFOLIO", link: '#'},
            {name: "OUR TEAM", link: '#'},
            {name: "BLOG", link: '#'},
            {name: "CONTACT", link: '#'}
        ]
    }
  }
}
</script>
<style lang="scss">
.header-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    background: #fff;
}
.header-item{
    a{
        text-decoration: none;
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
        &:first-child {
            border-bottom: 1px solid #FCBB08;
        }
        &:hover{
            border-bottom: 1px solid #FCBB08;
        }
    }
}
</style>