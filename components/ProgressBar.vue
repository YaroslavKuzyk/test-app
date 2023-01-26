<template>
  <div class="progress-wrap">
    <div class="progress-line"></div>
    <div class="progress-persent">
       <div class="progress-text">
        <h3>
          sdfs
        </h3>
        <h3>
          sdf
        </h3>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Progress',
}
</script>
  
<style lang="scss" >
.progress-wrap{
  width: 100%;
  position: relative;
}
.progress-line{
  width: 370px;
  height: 2px;
  background: #F0F0F0;
}
.progress-persent{
  position: absolute;
  height: 2px;
  background: #1D1D1D;
  top: 0;
  width: v-bind(width);
}
.progress-text{
  display: flex;
  justify-content: space-between;
}
</style>