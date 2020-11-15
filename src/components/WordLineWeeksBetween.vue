<template>
  <span id="root">
    <WordLineText :text="text" />
    <WordLineText :text="' ' + $tc('week', this.weeksBetween)" />
  </span>
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import WordLineText from "@/components/WordLineText.vue";

@Component({
  components: {
    WordLineText
  }
})
export default class WordLineWeeksBetween extends Vue {
  @Prop() readonly start!: Date;

  @Prop() readonly end!: Date;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timerId: any;

  get text() {
    return this.weeksBetween.toFixed(2);
  }

  get weeksBetween() {
    return (+this.end - Math.min(+Date.now(), +this.end)) / (7 * 24 * 60 * 60 * 1000);
  }

  created() {
    this.timerId = setInterval(() => {
      this.$forceUpdate();
    }, (24 * 60 * 60 * 1000) / 100);
  }

  beforeDestroy() {
    clearInterval(this.timerId);
  }
}
</script>

<style scoped>
#root {
  display: flex;
  align-items: flex-end;
}
</style>

<i18n>
{
"en": {
"week": "week | weeks"
},
"hy": {
"week": "շաբաթ"
},
"ru": {
"week": "недель | неделя | недели | недель"
}
}
</i18n>
