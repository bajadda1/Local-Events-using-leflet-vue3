<template>
  <div>
    <my-header ></my-header>
    <router-view ></router-view>
    <my-footer></my-footer>
  </div>

</template>
<script setup>
import MyHeader from "./components/myHeader.vue";
import MyFooter from "./components/myFooter.vue";
</script>