<template>
  <div v-if="index == 0"  class="timeline-container">
    <div v-if="index == 0" class="timeline-label">
													<span class="label label-primary arrowed-in-right label-lg">
														<b>  {{ item.start }}</b>
													</span>
    </div>

    <div  class="timeline-items">
      <TimelineItem />
    </div><!-- /.timeline-items -->
  </div>
  <TimelineItem v-else/>
</template>

<script>
import TimelineItem from "./TimelineItem";


export default {
  name: "TimelineBlock",
  components: {
    TimelineItem
  },
  props: {
    index: {},
    item: {
      type: Object,
      required: true
    }
  },

}
</script>

<style scoped>

</style>