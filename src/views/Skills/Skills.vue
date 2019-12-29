<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="block has-text-centered">
        <h3 class="title">skills</h3>
        <separator></separator>
        <!-- <h5 >Technologies I work in most frequently.</h5> -->
      </div>
      <div class="skills columns is-multiline is-mobile">
        <div class="graph_left">
          <div class="graph">
            <span>80%</span>
          </div>
          <div class="graph_2">
            <span>55%</span>
          </div>
          <div class="graph_3">
            <span>50%</span>
        </div>
      </div>
        <div class="graph_right">
          <div class="graph">
            <span id="css">70%</span>
          </div>
          <div class="graph_2">
            <span>55%</span>
          </div>
          <div class="graph_3">
            <span>90%</span>
        </div>
      </div>

        <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop"
          v-for="(skill, index) in skills"
          :key="index">
          <div class="skill">
            <a class="image"
              target="_blank"
              rel="noopener"
              :href="skill.url"
              :title="skill.name">
              <img :src="skill.image" :alt="skill.name">
            </a>
          </div>
        </div>
      </div>

      <div class="line">
        <div></div>
        <a>What I can do <div>&#60;/&#62;</div></a>
      </div>
    </div>
  </section>
</template>

<script>
import skills from './skills';

export default {
  name: 'skills',
  data() {
    return {
      skills,
    };
  }
};
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');

  .section{
    margin: 0 auto;
    background-color: #333;
    width: 100%;
    height: 100%;
  }
  .container{
    position: relative;
    margin: 0 auto;
    width:1440px;
  }
  .block h3{
    position: absolute;
    font-family: "Roboto", sans-sans-serif;
    font-weight: 400;
    opacity: 0.27;
    font-family: Roboto-Black;
    font-size: 66px;
    // color: #FF5252;
    right:220px;

  }


  .columns {
    // display:block;
    // justify-content: center;
    // background-color: rgba(#d5d5d5, 0.1);
    position: absolute;
    left:220px;
    top: 205px;
    width:1000px;
    height: 350px;
    border-radius: 4px;
    display: flex;
    flex-flow:row wrap;
    background: rgba(216,216,216,0.04);
    box-shadow: 3px 6px 9px 0 rgba(0,0,0,0.07);
    border-radius: 4px;

  }


  .skill img {
    width:70px;
    height: 70px;
    margin: 17px 400px 0 0;
    padding: 0.5em;
    opacity: 0.7;
    transition: all 0.15s ease-in;
    // filter:drop-shadow(0 0 5px #000);
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

    &:hover {
      opacity: 1;
      transform: scale(1.1);
      cursor: pointer
    }
  }


  .line > div{
    position: absolute;
    left:151.15px;
    top:205px;
    border-right : 1px solid #FF5252;
    height: 250px;

  }


  .line a{
    position: absolute;
    left:142.5px;
    top:519px;
    font-family: AppleSDGothicNeo-Light;
    font-size: 16px;
    color: #FF5252;
    display: inline-block;
    white-space: nowrap;
    transform: translate(0, 100%) rotate(-90deg);
    transform-origin: 0 0;
    vertical-align: bottom;
  }
  .line a >div{
    font-size:20px;
    font-weight:600;
  }


  .graph{
    position: absolute;
    margin: 50px 0 0 108px;
    height: 15px;
    width:353px;
    background: rgba(255,82,82,0.20);
    border-radius: 7.5px;
  }

  .graph span{
    display: block;
    height: 15px;
    width:80%;
    background:#FF5252;
    border-radius: 7.5px;
    animation: stack 2s 1;
    color:#333;
    font-size: 13px;
    font-weight:400;
    padding:0 10px;
    text-align: right;
  }
  .graph_2{
    position: absolute;
    margin: 170px 0 0 108px;
    height: 15px;
    width:353px;
    background: rgba(255,82,82,0.20);
    border-radius: 7.5px;
  }
  .graph_2 span{
    display: block;
    height: 15px;
    width:55%;
    background:  #FF5252;
    border-radius: 7.5px;
    animation: stack2 2s 1;
    color:#333;
    font-size: 13px;
    font-weight:400;
    padding:0 10px;
    text-align: right;
  }

  .graph_3{
    position: absolute;
    margin: 289px 0 0 108px;
    height: 15px;
    width:353px;
    background: rgba(255,82,82,0.20);
    border-radius: 7.5px;
  }
  .graph_3 span{
    display: block;
    height: 15px;
    width:50%;
    background:#FF5252;
    border-radius: 7.5px;
    animation: stack3 2s 1;
    color:#333;
    font-size: 13px;
    font-weight:400;
    padding:0 10px;
    text-align: right;
  }
  .graph_right{
    position: absolute;
    left:50%;
    }

  .graph_right #css{
    width: 70%;
    animation: stack_css 2s 1;
  }

  .graph_right .graph_3 span{
    width:90%;
    animation: stack6 2s 1;
  }

  @keyframes stack{
    0%{width:0;}
    100% {width: 80%;}
  }
  @keyframes stack_css{
    0%{width:0;}
    100% {width: 70%;}
  }
  @keyframes stack2{
    0%{width:0;}
    100% {width: 55%;}
  }
  @keyframes stack3{
    0%{width:0;}
    100% {width: 50%;}
  }
  @keyframes stack6{
    0%{width:0;}
    100% {width: 90%;}
  }
</style>
