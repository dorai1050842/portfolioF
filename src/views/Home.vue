<template>
<div class="home">
  <div>
    <div class="section">
      <div>
        <p class="title">CREATIVE Developer</p>
        <h1>Hello, I'm Chaeeun</h1>
        <div>
          <h2>a Front-end Developer</h2>
        </div>
        <div class="play_section">
          <div id="play" class="play_button">
            <router-link to="/About"><img src="../assets/play.svg" alt="play_button" /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');

.home {
  font-family: "Roboto", sans-sans-serif;
  margin: 0 auto;
  z-index: -1;
  background:url('../assets/background.jpg')no-repeat center top;
  height: 914px;

}

.home>div {
  text-align: center;
  width: 1440px;
  height: 760px;
  margin: 0 auto;
}

.section {
  width: 380px;
  height: 400px;
  position: absolute;
  margin: 150px auto;
  left: 50%;
  transform: translate(-50%);
  border: 1px solid white;
}

.section >div{
  margin-top:-40px;
}
.section h1 {
  color: #FFF;
  font-family: 'Roboto'sans-serif;
  font-weight: 500;
}

.section h2 {
  color: #FFF;
  font-family: 'Roboto'sans-serif;
  font-weight: 300;
}

.section .title {
  margin-top: 120px;
  text-transform: uppercase;
  font-family: 'Roboto'sans-serif;
  font-weight: 100;
}

.section .play_section {
  margin:20px 0 0 0 ;
  display: inline-block;
  align-content: center;
}

.play_button {
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #FF5252;
  border-radius: 50%;
  cursor: pointer;
}

.play_button {
  animation: pulse 2s infinite;

}

.play_button img {
  margin-top: 18px;
  width: 13px;

}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0px rgba(228, 55, 95, 0.7);
  }

  100% {
    box-shadow: 0 0 0 15px rgba(228, 55, 95, 0);
  }
}
</style>
