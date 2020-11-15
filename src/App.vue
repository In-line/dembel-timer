<template>
  <router-view />
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  width: 100%;
  height: 100vh;
  color: #fff;
  background: linear-gradient(-45deg, #000000, #0c0000, #160000);
  background-size: 400% 400%;
  animation: gradientBG 7s ease infinite;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
