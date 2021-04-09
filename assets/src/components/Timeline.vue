<template>

  <div id="timeline-1">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">


          <TimelineBlock/>

      </div>
    </div>
  </div>

</template>

<script>
import TimelineBlock from "./TimelineBlock";

export default {

  name: "Timeline",
  components: {TimelineBlock},

  /*  data() {
      return {
        timeline: [
          {
            id:1,
            title: 'Today',
            items: [
              {
                time: '16:22',
                title: 'Susan'
              }
            ]
          }
        ]
      };
    },*/


}
</script>

<style scoped>

</style>