<template>
  <div id="layout">
    <WordLineDateRange :start="start" :end="end" />
    <WordLineWeeksBetween :start="start" :end="end" />
    <WordLineProgress :start="start" :end="end" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import WordLineProgress from "@/components/WordLineProgress.vue";
import WordLineDateRange from "@/components/WordLineDateRange.vue";
import WordLineWeeksBetween from "@/components/WordLineWeeksBetween.vue";

@Component({
  components: {
    WordLineWeeksBetween,
    WordLineProgress,
    WordLineDateRange
  }
})
export default class WordLineDembel extends Vue {
  @Prop() readonly start!: Date;

  @Prop() readonly end!: Date;
}
</script>

<style scoped>
#layout {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
</style>
