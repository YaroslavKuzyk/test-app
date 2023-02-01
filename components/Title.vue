<template>
    <h2 :class="{'md':md, 'lg':lg}">
        <slot></slot>
    </h2>
</template>

<script>
export default {
  name: 'Title',

  props: {
    md: {
        type: Boolean,
        default: false,
    },
    lg: {
        type: Boolean,
        default: false,
    }
  }
}
</script>
<style lang="scss" scoped>
h2{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    line-height: 75px;
    letter-spacing: -1.65px;
    color: #242121;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        width: 60px;
        height: 4px;
        left: 0px;
        top: 89px;
        background: #FCBB08;
    }
}
h2.md{
    font-size: 48px;
}
h2.lg{
    font-size: 60px;
}
</style>