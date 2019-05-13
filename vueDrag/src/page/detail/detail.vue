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
  // import get from '../../api/get'
  import fetch from '../../api/utils/fetch'
  import $axios from  'axios'
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
          this.gethttp()

      },
      methods:{

        gethttp(){
          // axios.get('https://mall.mingdiao.com.cn/WeChatGoods/public/index.php/collocation/get/goods/type', {
          //   params: {
          //     cat_id:2327
          //   }
          // })
          //   .then(function (response) {
          //     console.log(response);
          //   })
          //   .catch(function (error) {
          //     console.log(error);
          //   });

          // get(this.url.pagePath,this.cat_id,false).then((res)=>{
          //   console.log(res)
          // }).catch((err)=>{
          //   console.log("请求失败")
          // }),

          this.$axios({
            method: 'get',
            url: 'https://mall.mingdiao.com.cn/WeChatGoods/public/index.php/collocation/get/goods/type?cat_id=2327'
          })
            .then(res => {
              console.log(res)
            })
            .catch(err => {
            console.log("god")
          })

        },
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
