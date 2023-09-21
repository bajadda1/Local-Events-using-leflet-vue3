<template>
  <div class="w-screen h-full">
    <div class="container">
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="center">
        <button @click="signOut" class="text-white font-bold text-2xl bg-black rounded-2xl px-10 py-4">log out</button>
      </div>
    </div>
  </div>


</template>

<script>
import {signOut} from "firebase/auth";
import {auth} from "../firebase.js";

export default {
  name: "logout",

  methods: {
    async signOut() {
      signOut(auth)
          .then(() => {
            // user signed-out
            alert("successfully logged out");
            this.$router.push('/login');
            this.$store.state.logedin=false;

          })
    },

  },
}
</script>

<style scoped>

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
}

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container:hover,
.container:active {
  .top:before,
  .top:after,
  .bottom:before,
  .bottom:after {
    margin-left: 200px;
    transform-origin: -200px 50%;
    transition-delay: 0s;
  }
}

.container .center {
  opacity: 1;
  transition-delay: 0.2s;
}

.top:before,
.bottom:before,
.top:after,
.bottom:after {
  content: '';
  display: block;
  position: absolute;
  width: 200vmax;
  height: 200vmax;
  top: 50%;
  left: 50%;
  margin-top: -100vmax;
  transform-origin: 0 50%;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  z-index: 10;
  opacity: 0.60;
  transition-delay: 0.2s;
}

.top:before {
  transform: rotate(45deg);
  background: #e46569;
}

.top:after {
  transform: rotate(135deg);
  background: #ecaf81;
}

.bottom:before {
  transform: rotate(-45deg);
  background: #60b8d4;
}

.bottom:after {
  transform: rotate(-135deg);
  background: #3745b5;
}

.container .center {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 1;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;
}



</style>