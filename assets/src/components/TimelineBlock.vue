<template>
  <div v-if="index == 0" class="timeline-container">
    <div class="timeline-label">
													<span class="label label-primary arrowed-in-right label-lg">
														<b>  {{ item.start }}</b>
													</span>
      
    </div>
    <div class="timeline-items">
      <div class="timeline-item clearfix">
        <TimelineItem v-bind:item="item"/>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="timeline-item clearfix">
      <TimelineItem v-bind:item="item"/>
    </div>
  </div>


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