<template>
     <div class="progress-wrap" >
    <div class="progress-line" ></div>
    <div class="progress-persent" v-for="item in progressObject">
       <div class="progress-text" >
        <h3>
          {{item.name}}
        </h3>
        <h3>
          {{item.width}}
        </h3>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProgressBar',
  data() {
    return{
      progressObject:[
      {name:'BRANDING', width: '90%'},
      {name:'DESIGN', width: '80%'},
      {name:'DEVELOPMENT', width: '85%'},
    ]
    }
  }
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
  width: 33%;
}
.progress-text{
  display: flex;
  justify-content: space-between;
}
</style>