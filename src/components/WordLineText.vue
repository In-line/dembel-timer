<template>
  <span id="wlt-root">
    <span id="wlt-frame" v-if="!disableFrame">{{ dummyText }}</span>
    <span id="wlt-line">{{ text }}</span>
    <span id="wlt-silhouette" v-if="!disableFrame">{{ dummyText }}</span>
    <span id="wlt-tube" v-if="!disableTube" />
  </span>
</template>

<script lang="ts">
import "reflect-metadata";
import { Vue, Prop } from "vue-property-decorator";
import Component from "vue-class-component";

@Component
export default class WordLineText extends Vue {
  @Prop() readonly text?: string;

  @Prop({ default: false }) readonly disableTube!: boolean;

  @Prop({ default: false }) readonly disableFrame!: boolean;

  get dummyText() {
    return "1".repeat(this.text?.length || 0);
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
  filter: blur(0.5px);
  font-size: calc(((70vw - 4.5rem) / 8.5));
}

#wlt-line,
#wlt-frame,
#wlt-silhouette,
#wlt-tube {
  text-overflow: ellipsis;
  grid-area: 1 / 1;
  text-align: center;
  display: inline;
  font-family: "BONX-Medium", monospace;
  animation: wlt-glow 3s ease-in-out alternate infinite;
  color: #ffaa00;
  letter-spacing: 0.075em;
}

#wlt-frame {
  color: black;
  z-index: 2;
  text-shadow: 0 0 0 black;
  font-family: "BONX-Frame", none;
}

#wlt-line {
  z-index: 1;
}

#wlt-silhouette {
  z-index: 0;
  color: #551100;
  text-shadow: 0 0 10px #551100;
  opacity: 0.8;
  font-family: "BONX-Silhouette", none;
}

#wlt-tube {
  background-image: url("~@/assets/empty.png");
  background-repeat: round;
  background-size: contain;
  transform: scaleY(1.5);
  transform-origin: 100% 40%;
  width: 100%;
  height: calc(((70vw - 4.5rem) / 8.5));
}

@media only screen and (max-width: 768px) {
  #wlt-tube {
    height: calc(((70vw - 4.5rem) / 6.5));
  }

  #wlt-root {
    font-size: calc(((70vw - 4.5rem) / 6.5));
  }
}
</style>

<style>
@keyframes wlt-glow {
  from {
    text-shadow: 5px 5px 0.5em red;
  }
  to {
    text-shadow: 0 0 1em red;
  }
}
</style>
