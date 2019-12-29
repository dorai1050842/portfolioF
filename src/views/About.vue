<template>
<div class="about">
  <div>
    <img src="../assets/myphoto.png" alt="" id="myphoto">
    <div id="bar">
      <ul>
        <a href="#" @click="show_intro()" >
          <li class="intro on_intro">introduce</li>
        </a>
        <a href="#" @click="show()">
          <li class="ab">about me</li>
        </a>
        <a href="#" @click="show_ex()">
          <li class="ex">experience</li></a>
      </ul>
    </div>
    <div class="introduce" >
      <div class="intro_content">
        <h2>‘락-만 적인 프론트엔드개발자' </h2>
        <p>저는 락-만적인 프론트엔드 개발자 입니다.
          낭만적이면서도 개발의 재미를 알고 즐길 줄 아는 프론트엔드 개발자입니다.<br />
          산업디자인을 전공하고 회사에선 패키지디자인과 제품디자인을 담당하였지만 평소에 <span id="a">UI/UX</span>과 웹어플리케이션에 관심이 많아<br />
          개발자분들과 UI/UX디자이너들의 생각을 알고 배우고싶어서 <span id="a">GDG 워크샵의 촬영스텝</span>으로 참가해 그분들의 강연을 듣기도하였습니다.<br />
          KG아이티뱅크에서 6개월 자바수업을 들으며 내가 만든 코딩이 웹상에 구현되는것을 보면서 뿌듯함과 보람을 느끼게 되었고<br />
          사용자와 직접적으로 맞닿아있는<span id="a">프론트앤드</span>에 더 흥미가 생겼습니다. 나아가서 사용자에게 보다 직관적이고 편리한 UX 서비스를 제공하는<br />
          프론트엔드 개발자가 되고싶고 팀원들과 <span id="a">소통을 잘하는 개발자</span>가 되고싶습니다.</p>
      </div>
      <div class="about_content">
        <div class="info">
          <ul>
            <li>Name</li>
            <li>Age</li>
            <li>Hobby</li>
            <li>Liscense</li>
          </ul>
        </div>
        <div class="info_content">
          <ul>
            <li>서채은</li>
            <li>29세</li>
            <li>고양이와&nbsp;놀기,&nbsp;일본어원문소설읽기</li>
            <li>JLPT N2</li>
          </ul>
        </div>
      </div>
      <div class="experience">
        <div class="year">
          <ul>
            <a href="#" @click="ex2018()"><li>2018-2019</li></a>
            <a href="#" @click="ex2016()"><li>2016-2018</li></a>
            <a href="#" @click="ex2015()"><li>2015</li></a>
            <a href="#" @click="ex2011()"><li>2014/2011</li></a>
          </ul>
        </div>

        <div class="group1">
          <div class="ex_title">
            <ul>
              <li>학원</li>
              <li>직장경력</li>
            </ul>
          </div>
          <div class="ex_info">
            <ul>
              <li>기간</li>
              <li>장소</li>
              <li>과정</li>
              <li>기간</li>
              <li>장소</li>
              <li>직무 및 직급</li>
            </ul>
          </div>
          <div class="ex_content">
            <ul>
              <li>2019.06~2019.12</li>
              <li>종로 KG아이티뱅크</li>
              <li>반응형 자바 웹개발자과정(6개월)</li>
              <li>2018.07~2019.01</li>
              <li>(주)이음전산</li>
              <li>디자인팀 사원</li>
            </ul>
          </div>
        </div>
        <div class="group2">
          <div class="ex_title2">
            <ul>
            </ul>
          </div>
          <div class="ex_info">
            <ul>
              <li>기간</li>
              <li>장소</li>
              <li>직무 및 직급</li>
            </ul>
          </div>
          <div class="ex_content">
            <ul>
              <li>2016.03 ~ 2018.05</li>
              <li>㈜플레오맥스</li>
              <li>상품개발,디자인사업부 사원</li>
            </ul>
          </div>
        </div>
        <div class="group2">
          <div class="ex_title2">
            <ul>
              <li>직장경력</li>
            </ul>
          </div>
          <div class="ex_info">
            <ul>
              <li>기간</li>
              <li>장소</li>
              <li>직무 및 직급</li>
            </ul>
          </div>
          <div class="ex_content">
            <ul>
              <li>2016.03 ~ 2018.05</li>
              <li>㈜플레오맥스</li>
              <li>상품개발,디자인사업부 사원</li>
            </ul>
          </div>
        </div>
        <div class="group3">
          <div class="ex_title3">
           수상,활동내역
          </div>
          <div class="ex_info3">
            2015.12.2 <br />
            2015.12.2~6 <br />
            2015.11.30 <br />
            2015.11.18~22 <br />
            2015.1.22 <br />
            2015.10~12.30
          </div>
          <div class="ex_content3">
            D2B디자인페어 제품디자인 Fake potato 은상<br />
            서울디자인페스티벌 (H/H studio – Fake potato)<br />
            부산산업디자인전람회 환경디자인 ‘입선’<br />
            부산디자인페스티벌(전시)<br />
            부경대 창업지원단, 청년창업한마당 성과발표회 ‘우수상'<br />
            부경대학교 창업동아리 대표자로 활동
          </div>
        </div>
        <div class="group4">
          <div class="ex_title4">
           수상,활동내역
          </div>
          <div class="ex_info4">
            2014.11.13<br />
            2014.03.03~06.13
          </div>
          <div class="ex_content4">
            2014 국제 공공환경디자인 어워드 (경주) 공공디자인 ‘입선’<br />
            필리핀 교환학생
          </div>
        </div>
      </div>
    </div>
    <div class="icon">
      <ul>
        <li><a :href="githubUrl"><img src="../assets/icon.svg" alt=""></a></li>
        <li><a :href="pinterestUrl"><img src="../assets/icon2.svg" alt=""></a></li>
        <li><a :href="InstagramUrl"><img src="../assets/icon3.svg" alt=""></a></li>
      </ul>
    </div>
    <div class="line">
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'


export default {
  name: "about",
  data() {
    return {
      githubUrl:"https://github.com/dorai1050842?tab=repositories",
      pinterestUrl:"https://www.pinterest.co.kr/chaeeun8097/",
      InstagramUrl:"https://www.instagram.com/chaeeun.seo.7/"
    }
  },
  methods: {
    show() {
      $('#bar .ab').toggleClass('on_intro')
      $('#bar .intro').removeClass('on_intro')
      $('#bar .ex').removeClass('on_intro')
      $('.intro_content').css({'display':'none'});
      $('.about_content').css({
        'display':'block'
      }),
      $('.year').css({'display':'none'})
      $('.experience .group1').css({'display':'none'});
      $('.experience .group2').css({'display':'none'});
      $('.experience .group3').css({'display':'none'});
      $('.experience .group4').css({'display':'none'});
    },
    show_intro(){
      $('#bar .intro').toggleClass('on_intro')
      $('#bar .ab').removeClass('on_intro')
      $('#bar .ex').removeClass('on_intro')
      $('.intro_content').css({'display':'block'});
      $('.about_content').css({
        'display':'none'
      }),
      $('.year').css({'display':'none'})
      $('.experience .group1').css({'display':'none'});
      $('.experience .group2').css({'display':'none'});
      $('.experience .group3').css({'display':'none'});
      $('.experience .group4').css({'display':'none'});
    },
    show_ex(){
      $('#bar .ex').toggleClass('on_intro')
      $('.group1').css({'display':'block'})
      $('#bar .ab').removeClass('on_intro')
      $('#bar .intro').removeClass('on_intro')
      $('.year').css({'display':'block'});
      $('.experience .group2').css({'display':'none'});
      $('.about_content').css({
        'display':'none'
      }),
      $('.intro_content').css({
        'display':'none'
      })
    },
    ex2016(){
      $('.experience .group4').css({'display':'none'});
      $('.experience .group2').css({'display':'block'});
      $('.experience .group1').css({'display':'none'});
      $('.experience .group3').css({'display':'none'});
    },
    ex2018(){
      $('.experience .group1').css({'display':'block'});
      $('.experience .group4').css({'display':'none'});
      $('.experience .group2').css({'display':'none'});
      $('.experience .group3').css({'display':'none'});
    },
    ex2015(){
      $('.experience .group3').css({'display':'block'});
      $('.experience .group4').css({'display':'none'});
      $('.experience .group1').css({'display':'none'});
      $('.experience .group2').css({'display':'none'});
    },
    ex2011(){
      $('.experience .group4').css({'display':'block'});
      $('.experience .group3').css({'display':'none'});
      $('.experience .group2').css({'display':'none'});
      $('.experience .group1').css({'display':'none'});
    }
  }
}
</script>




<style>
@import '../assets/about_style.scss'
</style>
