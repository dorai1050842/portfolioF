<template>
<div class="portfolio">
  <span class="text1"><i class="xi-garden"></i>MY&nbsp;&nbsp;WORKS</span>
  <div>
    <ul class="port_menu clear">
      <li name="all" class=" on"><a href="#a">All</a></li>
    </ul>
  <div id="img_contents">
    <div class="port_img">
      <ul>
        <li class="res all on">
          <a href="https://snakegame07.netlify.com/" target="_blank">
            <img src="../assets/snake.jpg" alt="스네이크 홈페이지 바로가기">
            <span>SnakeGame<br /><br />-javascript<br /></span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
        <li class="web all on">
          <a href="https://www.youtube.com/watch?v=SPZAxTU4zms&feature=youtu.be" target="_blank">
            <img src="../assets/chatus.jpg" alt="">
            <span>Random Chat<br /><br />-Vue.js<br />-Firebase<br /></span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
        <li class="web all on">
          <a href="https://github.com/dorai1050842/bookstore" target="_blank">
            <img src="../assets/bookstore.jpg" alt="">
            <span>bookstore<br /><br />-Java</span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
        <li class="web all on">
          <a href="https://shindaegu.netlify.com" target="_blank">
            <img src="../assets/sindaegu.jpg" alt="">
            <span>sindaegu<br />메인 따라만들기(퍼블리싱)<br /><br />-html<br>-css</span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
        <li class="mob all on">
          <a href="https://www.pinterest.co.kr/chaeeun8097/" target="_blank">
            <img src="../assets/grid.jpg" alt="">
            <span>pinterest<br />디자인작업물<br /><br />-Package Design<br /> -Product Design<br /> -Web Design<br /></span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
        <li class="mob all on">
          <a href="https://hansol.netlify.com/" target="_blank">
            <img src="../assets/hansol.jpg" alt="">
            <span>hansol<br />메인 따라만들기(퍼블리싱)<br /><br />-html<br>-css<br />-swipper</span>
            <i class="xi-plus-thin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "portfolio",
  components: {}
};
</script>

<style media="screen">
@import '../assets/clear.scss';
@import '../assets/portfolio_style.scss';
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');
</style>
