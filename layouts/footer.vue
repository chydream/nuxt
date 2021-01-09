<template>
  <div class="footer">
    2020 © copyright | <a href="https://beian.miit.gov.cn/" target="_blank"> 闽ICP备13021832号-1</a>
  </div>
</template>

<script>
export default {
   name: 'nFooter'
}
</script>
<style lang="scss">
.footer{
  height: 60px;
  background: #555;
  text-align: center;
  line-height: 60px;
  color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
}
</style>
