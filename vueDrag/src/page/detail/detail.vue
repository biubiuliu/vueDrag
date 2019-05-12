<template>
    <div class="design-detail">
      <div class="left-menu">

      </div>
      <div class="design-img">img</div>
      <div class="design-content">content</div>
      <div class="design-data">right</div>
    </div>
</template>

<script>
  import get from '../../api/get'
  import axios from 'axios'
    export default {
        name: "detail",
        data(){
          return{
            cat_id:2327,
            url: {
              pagePath: "WeChatGoods/public/index.php/collocation/get/goods/type?cat_id=2327"
            },
          }
        },
      mounted(){
          this.handletype()
      },
      methods:{
        handletype(){
          this.$http.get(this.url.pagePath) //把url地址换成你的接口地址即可
            .then(res => {
              console.log(res);
            })
            .catch(err => {
              console.log('请求失败');
            })
        }
      }
    }
</script>

<style scoped>
  .design-detail{
    display: flex;
  }
  .design-commons{

  }
  .left-menu{
    width: 10%;
  }
  .design-img{
    width: 25%;
    height: 100%;
    position: absolute;
    left: 10%;
    background: #c5b1b9;
  }
  .design-content{
    width: 50%;
    height: 100%;
    position: absolute;
    left: 35%;
    background: #b4b4b4;
  }
  .design-data{
    width: 15%;
  }
</style>
