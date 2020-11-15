<template>
  <span id="wlt-root" :style="{ 'font-size': fontSize }">
    <span id="wlt-frame">{{ dummyText }}</span>
    <span id="wlt-line">{{ text }}</span>
    <span id="wlt-background">{{ dummyText }}</span>
  </span>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class WordLineText extends Vue {
  @Prop() readonly text?: string;

  @Prop() readonly fontSize?: string;

  get dummyText() {
    return "X".repeat(this.text?.length || 0);
  }
}
</script>

<style scoped lang="scss">
@import "../assets/fonts/BONX-fonts";

span {
  white-space: pre;
}

#wlt-root {
  display: grid;
}

#wlt-line,
#wlt-frame,
#wlt-background {
  font-size: calc((70vw - 4.5rem) / 8.5);
  text-overflow: ellipsis;
  grid-area: 1 / 1;
  text-align: center;
  display: inline;
  font-family: "BONX-Medium", monospace;
  text-shadow: 0 0 20px red;
  color: #ffaa00;
}

#wlt-background {
  z-index: -1;
  color: #551100;
  text-shadow: 0 0 10px #551100;
  opacity: 0.8;
  font-family: "BONX-Silhouette", none;
}

#wlt-frame {
  color: black;
  z-index: 1;
  text-shadow: 0 0 0 black;
  font-family: "BONX-Frame", none;
}
</style>
