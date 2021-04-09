<template>
  <div id="timeline-1">
    <div class="row">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1">
        <div v-if="items.length > 0">

          <TimelineBlock
              v-for="(item, index) in items"
              v-bind:index="index"
              v-bind:key="item.id"
              v-bind:item="item"


          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TimelineBlock from "./TimelineBlock";
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters(["items"]),
 // methods: mapActions(["fetch"]),
  name: "Timeline",
  components: {TimelineBlock},
  mounted() {
    this.fetch();
  }
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