<template>
<div class="hero">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <header>
    <nav>
      <ul class="nav">
        <li><i class="fa fa-bars" id="bars" @click="openNav()"></i></li>
        <li><a>
            <router-link to="/">home</router-link>
          </a></li>
        <li><a>
            <router-link to="/Portfolio">portfolio</router-link>
          </a></li>
        <li><a>
            <router-link to="/Skills">skills</router-link>
          </a></li>
        <li><a>
            <router-link to="/About">about</router-link>
          </a></li>
      </ul>
      <router-link to="/Contact"><button class="med_button">Contact</button></router-link>
    </nav>
  </header>

  <aside>
    <div id="mySidenav" class="sidenav">
      <a href="#" class="closeBtn" @click="closeNav()">&times;
      </a>
      <li><i class="fa fa-home"  id="icon_nav"/>
        <router-link to="/">home</router-link>
      </li>
      <li><i class="fa fa-sticky-note" id="icon_nav" />
        <router-link to="/Portfolio">portfolio</router-link>
      </li>
      <li><i class="fa fa-star" id="icon_nav" />
        <router-link to="/Skills">skills</router-link>
      </li>
      <li><i class="fa fa-address-card" id="icon_nav" />
        <router-link to="/About">about</router-link>
      </li>
    </div>
  </aside>
</div>
</template>
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
<script>
import $ from 'jquery'

export default {
  name: "header",
  data() {
    return {}

  },
  methods: {
    closeNav() {
      $("#mySidenav").css({
        'width': '0',
        'margin-left': '0%'
      })
    },
    openNav() {
      $("#mySidenav").css('width', '300px')
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap');

body {
  margin: 0 auto;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}

li,
p,
a,
.med_button {
  font-family: "Roboto", sans-sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #FFFFFF;
  text-decoration: none;
}




header {
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #222222;
  z-index: 1;
}

header>nav {
  position: relative;
  width: 1440px;
  margin: 0 auto;
}

header>nav .nav {
  margin: 0;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  z-index: -1;
}


header>nav .nav li {
  float: left;
  list-style-type: none;
  display: block;
  height: 20px;
  line-height: 20px;
  padding: 19px 25px;
}


header>nav .nav li a {
  padding: 0;
  transition: all 0.3s ease 0s;
}

header>nav .nav li a:hover {
  color: #FF5252;
}

.nav li i {
  cursor: pointer;
}

.med_button {
  width: 111px;
  height: 36px;
  background-color: transparent;
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  text-align: center;
  /* position: absolute;
  right:15px; */
  float: right;
  margin: 12px 25px;
}

.med_button:hover {
  border: 1px solid #FF5252;
  background-color: #FF5252;
}


@media screen and (max-width:1000px) {
  header > nav .nav li:not(:first-child){
    display: none;
  }
  .med_button{
    position: absolute;
    left:40px;
  }
  #mySidenav {
    width: 100%;
  }

  #mySidenav li {
    display: flex;
    align-content: center;
    justify-content: center;
  }

}



@media screen and (max-width:1000px) {

  .nav li {
    right: 0;
    display: block;

  }

  aside>.sidenav {
    width: 100%;
  }
}

.nav .router-link-exact-active {
  color: #FF5252;
}

#icon_nav:hover {
  color: #FF5252;
  transform: rotateZ(-180deg);
  transition: all .5s ease-in-out;
}

/* side */

aside>.sidenav {

  height: 100%;
  width: 20%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #222222;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border: 1px;
  border-right: 1px solid gray;
}


.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 17px;
  color: #FFFFFF;
  display: block;
  transition: 0.3s;
  padding: 18px 0px;
}

.sidenav .closeBtn:hover {
  color: #FF5252;

}




.sidenav a.router-link-exact-active {
  color: #FF5252;
}




.sidenav li {
  list-style: none;
  display: flex;
  align-items: center;
}

.sidenav li i {
  font-size: 15px;
  padding: 0px 25px 0px;
}


.sidenav a:hover {
  color: white;
}


.sidenav .closeBtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>
