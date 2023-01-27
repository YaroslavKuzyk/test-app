<template>
  <div>
     <div class="progress-wrap" v-for="item in progressObject">
    <div class="progress-line" >
      <div class="progress-persent" >
       <div class="progress-text" >
        <h3>
          {{item.name}}
        </h3>
        <h3>
          {{item.size}}
        </h3>
      </div>
    </div>
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
      {name:'BRANDING', size: '90%'},
      {name:'DESIGN', size: '80%'},
      {name:'DEVELOPMENT', size: '85%'},
      ],
      sizeObject:{
      BRANDING: '90px',
      DESIGN: 80,
      DEVELOPMENT: 85
    }
    }
  }
  
}
</script>
  
<style lang="scss" >
.progress-wrap{
  width: 100%;
  position: relative;
  margin-top: 40px;
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
  width: v-bind(sizeObject);
}
.progress-text{
  display: flex;
  justify-content: space-between;
}
</style>