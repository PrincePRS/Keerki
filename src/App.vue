<template>
    <div id="app" dir="auto">
      <router-view />
  </div>
</template>
<script>
export default{
  
}

</script>
<style scoped>
@font-face {
  font-family: "tajawalblack";
  src: url("./assets/fonts/TajawalFont/tajawal-black-webfont.woff2")
      format("woff2"),
    url("./assets/fonts/TajawalFont/tajawal-black-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "stzhongsongregular";
  src: url("./assets/fonts/HWZSFont/_-webfont.woff2") format("woff2"),
    url("./assets/fonts/HWZSFont/_-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
.ch {
  font-family: "stzhongsongregular", Arial, sans-serif !important;
  font-weight: normal;
  font-style: normal;
}
.ar {
  font-family: "tajawalblack", Arial, sans-serif !important;
  font-weight: normal;
  font-style: normal;
}
#app {
  background: #0278ae;
}
</style>