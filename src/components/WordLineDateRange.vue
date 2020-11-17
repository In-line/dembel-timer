<template>
  <WordLineText :text="text" />
</template>

<script lang="ts">
import { Prop, Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import dateFormat from "dateformat";
import WordLineText from "@/components/WordLineText.vue";

@Component({
  components: {
    WordLineText
  }
})
export default class WordLineDateRange extends Vue {
  @Prop() readonly start!: Date;

  @Prop() readonly end!: Date;

  get text() {
    return `${dateFormat(this.start, "dd.mm.yyyy")} - ${dateFormat(this.end, "yyyy")}`;
  }
}
</script>
