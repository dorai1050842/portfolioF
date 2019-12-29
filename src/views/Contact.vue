<template>
<div class="contact">
  <!-- <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> -->
  <div>
    <h2>Contact</h2>
    <ul class="list clear">
      <li class="bg1">
          <div>010-8242-8098</div>
      </li>
      <li class="bg2">
        <a :href="InstagramUrl"><div>Instagram</div></a>
      </li>
      <li class="bg3">
        <a :href="pinterestUrl"><div>Pinterest</div></a>
      </li>
      <li class="bg4">
        <a :href="githubUrl"><div>Github</div></a>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "contact",
  data() {
    return {
      githubUrl: "https://github.com/dorai1050842?tab=repositories",
      pinterestUrl: "https://www.pinterest.co.kr/chaeeun8097/",
      InstagramUrl: "https://www.instagram.com/chaeeun.seo.7/",
    }
  }
};
</script>

<style lang="scss">
@import '../assets/clear.scss';
@import '../assets/contact_style.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');
</style>
