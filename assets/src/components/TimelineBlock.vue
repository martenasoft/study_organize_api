<template>
  <div v-if="items.length > 0">

    <div v-for="item in items" class="timeline-container" v-if='expandItem(item.start, "date")'>
      <div class="timeline-label">
        <span class="label label-primary arrowed-in-right label-lg">
          <b>  {{ item.start }}</b>
        </span>
      </div>

      <TimelineItem
          v-for="item_ in items"
          v-bind:item="item_"
          v-bind:key="item_.id"
          v-if='expandItem(item_.id, "item")'
      />

    </div>
    <!--
      <div v-else>
        <div class="timeline-item clearfix">
          <TimelineItem v-bind:item="item"/>
        </div>
      </div>
    -->

  </div>

</template>

<script>
import TimelineItem from "./TimelineItem";
import {mapGetters, mapActions} from 'vuex';

let showedDate = [];
let showedItem = [];

export default {

  computed: mapGetters(["items"]),
  methods: {
    ...mapActions(["fetch"]),
    expandItem: function (data, varName) {
      let ret = false;
      let start = null;
      let end = null;

      switch (varName) {
        case 'item':



          ret = !showedItem.includes(data) /*|| showedDate.find(element => (new Date(element)).getTime() <= (new Date(data.start)).getTime() )*/;
          if (ret) {
            showedItem.push(data);
          }
          break;

        case 'date':
          ret = !showedDate.includes(data);
          start = data.start;
          end = data.end;

          if (start !== null && end !== null) {
            const start = (new Date(data.start)).getTime();
            const end = (new Date(data.end)).getTime();

            console.log({
              start: start,
              end: end
            });
          }


          if (ret) {
            showedDate.push(data);
          }
          break;
      }
      return ret;
    }
  },
  name: "TimelineBlock",
  mounted() {
    const date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth();
    let dd = date.getMonth();

    if (mm < 10) {
      mm += '0' + mm;
    }

    if (dd < 10) {
      dd += '0' + dd;
    }

    let currentDate = yyyy + '-' + mm + '-' + dd;
    this.fetch();
    //this.fetch(currentDate);
  },
  components: {
    TimelineItem
  },
  props: {
    index: {},
    /* item: {
       type: Object,
       required: true
     }*/
  },

}
</script>

<style scoped>

</style>