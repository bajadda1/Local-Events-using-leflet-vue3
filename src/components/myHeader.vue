<template>
  <header class="relative p-2 px-4 bg-cyan-500 text-gray-100 w-full">
    <div class="container flex justify-between mx-auto w-full">
      <a rel="noopener noreferrer" aria-label="Back to homepage" class="flex items-center p-2"
         @click="hideMenu">
        <router-link to="/">
          <font-awesome-icon icon="fa-solid fa-earth-africa" size="2xl" style="color:#fff;"/>

          <span
              style="font-family: Blackadder ITC, sans-serif"
              class="text-4xl font-bold"
          >
            .Geolocation

          </span>
        </router-link>

      </a>
      <ul class="items-stretch space-x-3 hidden md:flex">
        <li class="flex">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2 font-semibold"
             @click="hideMenu">
            <router-link to="/" class="focus:text-black"> Home</router-link>
          </a>
        </li>
        <li class="flex">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1  hover:border-b-2 font-semibold"
             @click="hideMenu">
            <router-link to="/search" class="focus:text-black"> Search</router-link>
          </a>
        </li>
        <li class="flex">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2  font-semibold"
             @click="hideMenu">
            <router-link to="/create" class="focus:text-black"> Create</router-link>

          </a>
        </li>
        <li class="flex">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2  font-semibold"
             @click="hideMenu">
            <router-link to="/about" class="focus:text-black">About</router-link>

          </a>
        </li>
        <li class="flex md:hidden" v-if="this.$store.state.logedin===true">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2  font-semibold"
             @click="hideMenu">
            <router-link to="/login" class="focus:text-black">log out</router-link>

          </a>
        </li>
        <li class="flex md:hidden" v-else>
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2  font-semibold"
             @click="hideMenu">
            <router-link to="/logout" class="focus:text-black">log in</router-link>

          </a>
        </li>
        <li class="flex md:hidden">
          <a rel="noopener noreferrer" class="flex items-center px-4 -mb-1 hover:border-b-2  font-semibold"
             @click="hideMenu">
            <router-link to="/signup" class="focus:text-black">Sign up</router-link>

          </a>
        </li>

      </ul>
      <div class="items-center flex-shrink-0 hidden md:flex">
<!--        v-if="this.$store.state.logedin===true"-->
        <router-link to="/logout" v-if="this.$store.state.logedin===true">
          <button class="self-center px-8 py-3 rounded font-semibold focus:text-black">Log out</button>
        </router-link>
<!--        v-else-->
        <router-link to="/login" v-else>
          <button class="self-center px-8 py-3 rounded font-semibold focus:text-black">Log in</button>
        </router-link>
        <router-link to="/signup" >
          <button class="self-center px-8 py-3 font-semibold rounded bg-white text-black focus:text-white focus:bg-black active:text-white active:bg-black">Sign up</button>
        </router-link>

      </div>
      <button class="p-4 absolute top-2 right-2 md:hidden " v-if="hide" @click="showMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
             class="w-6 h-6 text-gray-100"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

      </button>
      <button class="p-4 absolute top-2 right-2 md:hidden" v-else @click="hideMenu">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256"
             class="w-6 h-6 text-gray-100">
          <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none"
             font-weight="bold"  style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)">
              <path
                  d="M12,2c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c5.511,0 10,-4.489 10,-10c0,-5.511 -4.489,-10 -10,-10zM12,4c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8zM8.70703,7.29297l-1.41406,1.41406l3.29297,3.29297l-3.29297,3.29297l1.41406,1.41406l3.29297,-3.29297l3.29297,3.29297l1.41406,-1.41406l-3.29297,-3.29297l3.29297,-3.29297l-1.41406,-1.41406l-3.29297,3.29297z"></path>
            </g>
          </g>
        </svg>

      </button>

    </div>
  </header>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase.js";


export default {
  name: "myHeader",
  data() {
    return {
      hide: true,
    };

  },
  methods: {
    showMenu: function () {

      if (window.innerWidth <= 768) {
        this.hide = false;
        document.querySelector("ul").style.display = "flex";

      }
    },
    hideMenu: function () {
      //window.innerWidth is used to get the width of the browser's viewport in pixels.
      if (window.innerWidth <= 768) {
        this.hide = true;
        document.querySelector("ul").style.display = "none";

      }
    },
  },

};

</script>

<style scoped>
@media (max-width: 768px) {
  ul {
    width: 70%;
    flex-direction: column;
    align-items: center;
    padding-block: 20px;
    padding-top: 40px;
    position: absolute;
    top: 43px;
    right: 48px;
    background-color: rgb(0 0 0 /0.7);
    z-index: 100;
    border-radius: 10px;
    box-shadow: 1px 1px 10px gray;
    opacity: 1;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  ul li:first-child {
    transform: translateX(6px);
  }

  ul li {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    background-color: rgb(6 182 212);
    animation: fade-in 0.5s alternate;
    padding: 10px 0;
    border-radius: 5px;
  }
  ul li a {

    color: white;
    text-align: center;
  }
}
</style>
