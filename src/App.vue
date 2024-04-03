<script>
import {  RouterView } from 'vue-router'
import itemMusicFoot from "@/components/item/itemMusicFoot.vue"
export default{
  components:{
    itemMusicFoot
  }
}
</script>

<template>
  <RouterView></RouterView>
  <itemMusicFoot></itemMusicFoot>

</template>

<style  lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .4rem;
  height: .4rem;

}
a{
  color: #000;
}
</style>
