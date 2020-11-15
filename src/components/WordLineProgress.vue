<template>
  <WordLineText :text="this.percentText" />
</template>

<script lang="ts">
import WordLineText from "@/components/WordLineText.vue";
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    WordLineText
  }
})
export default class WordLineProgress extends Vue {
  @Prop() readonly start!: Date;

  @Prop() readonly end!: Date;

  @Prop({ default: 19 }) readonly fractionDigits!: number;

  currentDate: Date = new Date();

  animationTimerId = 0;

  get percent() {
    return (+this.currentDate - +this.start) / (+this.end - +this.start) / 0.01;
  }

  get percentText() {
    return `${this.percent.toFixed(this.fractionDigits)}%`;
  }

  created() {
    this.requestAnimationFrame();
  }

  requestAnimationFrame() {
    this.animationTimerId = window.requestAnimationFrame(() => {
      this.currentDate = new Date();
      this.requestAnimationFrame();
    });
  }

  destroyed() {
    window.cancelAnimationFrame(this.animationTimerId);
  }
}
</script>
