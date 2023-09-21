<template>
  <map-carte></map-carte>
</template>

<script>
import mapCarte from "../components/mapCarte.vue";

export default {
  name:"create",
  components: {
    mapCarte,
  },
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
  },
};
</script>

<style scoped>

button {
  letter-spacing: 1px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0px 2px;
  position: relative;
  overflow: hidden;
  color: Black;
  background-color: white;
  box-shadow: 1px 1px 10px 0px #c4bbbb;
}

button::before {
  content: "";
  background-color: #0fe8f7;
  height: 100%;
  width: 0%;
  position: absolute;
  top: 0;
  left: -30%;
  transition-duration: 1s;
  transform: skew(35deg);
  z-index: -1;
}

button:hover::before {
  width: 100%;
}

button:hover {
  transition-delay: 0.3s;
  color: blue;
  box-shadow: 0px 0px 10px cyan, 0px 0px 20px cyan, 0px 0px 40px cyan,
  0px 0px 80px cyan, 0px 0px 160px cyan;
}

</style>
