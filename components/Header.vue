<template>
    <div class="header_wrap">
        <div>
            <img src="../assets/image/LOGO.png">
        </div>
        <div class="header_items">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">OUR TEAM</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style lang="scss">
.header_wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
}
.header_items{
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
        &:first-child {
            border-bottom: 1px solid #FCBB08;
        }
        &:hover{
            border-bottom: 1px solid #FCBB08;
        }
    }
}
</style>