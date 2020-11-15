<template>
  <div id="root">
    <WordLineDembel :start="new Date('July 30, 2019')" :end="new Date('July 30, 2021')" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WordLineDembel from "@/components/WordLineDembel.vue";

@Component({
  components: {
    WordLineDembel
  }
})
export default class App extends Vue {}
</script>

<style scoped>
#root {
  position: fixed;
  top: 5%;
  bottom: 5%;
  left: 0;
  right: 0;
}
</style>
