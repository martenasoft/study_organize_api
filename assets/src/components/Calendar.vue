<template>
  <div class="row-fluid">
    <div class="col-xs-12">
      <!-- PAGE CONTENT BEGINS -->
      <div class="row">
        <div class="col-sm-9">
          <div class="space"></div>

          <FullCalendar :options="calendarOptions" ref="calendar" />
        </div>
        <div class="col-sm-3">
          <div class="widget-body">
            <div class="widget-main no-padding">
              <div id="external-events">

                <div class="widget-box">
                  <div class="widget-header">
                    <h4 class="widget-title">Date Picker</h4>

                    <span class="widget-toolbar">
														<a href="#" data-action="settings">
															<i class="ace-icon fa fa-cog"></i>
														</a>

														<a href="#" data-action="reload">
															<i class="ace-icon fa fa-refresh"></i>
														</a>

														<a href="#" data-action="collapse">
															<i class="ace-icon fa fa-chevron-up"></i>
														</a>

														<a href="#" data-action="close">
															<i class="ace-icon fa fa-times"></i>
														</a>
													</span>
                  </div>

                  <div class="widget-body">

                    <div class="widget-main">
                      <label for="id-date-picker-1">Title</label>

                      <div class="row">
                        <div class="col-xs-8 col-sm-11">
                          <div class="input-group">
                            <input v-model="calendarItem.title" class="form-control" id="title" type="text"/>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div class="widget-main">
                      <label for="id-date-picker-1">Start</label>
                      <div class="row">
                        <div class="col-xs-8 col-sm-11">
                          <div class="input-group">
                            <input v-model="calendarItem.start" class="form-control date-picker"
                                   id="id-date-picker-1"
                                   type="text"
                                   data-date-format="yyyy-mm-dd"/>
                            <span class="input-group-addon"><i class="fa fa-calendar bigger-110"></i></span>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div class="widget-main">
                      <label for="id-date-picker-1">End</label>

                      <div class="row">
                        <div class="col-xs-8 col-sm-11">
                          <div class="input-group">
                            <input v-model="calendarItem.end" class="form-control date-picker" id="id-date-picker-2"
                                   type="text"
                                   data-date-format="yyyy-mm-dd"/>
                            <span class="input-group-addon"><i class="fa fa-calendar bigger-110"></i></span>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="widget-main">
                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div class="input-group">
                            <label for="about">About</label>
                            <div class="row">
                              <div class="col-xs-12 col-sm-12">

                                  <textarea v-model="calendarItem.about" id="about" class="autosize-transition form-control"></textarea>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class="space"></div>
                    <div class="clearfix">

                      <button  v-on:click="submitItem()" type="button" class="width-35 pull-right btn btn-sm btn-primary">
                        <i class="ace-icon fa fa-key"></i>
                        <span class="bigger-110">Save</span>
                      </button>
                    </div>

                    <div class="space-4"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- PAGE CONTENT ENDS -->
    </div><!-- /.col -->
  </div><!-- /.row -->
</template>

<script>


import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import {mapGetters, mapActions} from 'vuex';

//import './../../js/bootstrap-datetimepicker.min.js';

export default {
  name: "Calendar",
  async mounted() {

      $('.date-picker').datepicker({
        autoclose: true,
        todayHighlight: true
      });

  },
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  computed: mapGetters(["calendarItem"]),
  data() {
    return {

      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        dateClick: this.handleDateClick,
        select: this.handleSelect,
        eventClick: this.eventClick,
        eventContent: this.eventContent,
        updateEvent: this.updateEvent,
        selectable: true,
        unselectAuto: true,
       events:  this.events,
       /* events: [
          {id: 1, title: 'event 1-4', start: '2021-04-01', end: '2021-04-04'},
          {id: 2, title: 'event 1', date: '2021-04-01'},
          {id: 3, title: 'event 2', date: '2021-04-02'}
        ]*/
      }
    }
  },
  methods: {
    ...mapActions(['fetchItems', 'fetchItem', 'submitItem']),

    events: function (info, successCallback, failureCallback) {
      this.fetchItems(successCallback);
    //  const items = this.$store.getters.calendarItems;
      //console.log(items);
      //return items;
    },
    handleSelect: function (info, arg) {
      const item = {
        title: '',
        start: info.start,
        end: info.end
      };

     // console.log(this.$refs);

    //  let calendarApi = this.$refs.calendar;

      this.$refs.calendar.getApi()
      .addEvent(
          {
            title: 'new',
            start: info.start,
            end: info.end,
            //allDay: allDay,
            className: 'label-info'
          },
          true // make the event "stick"
      );


      //info.addEvent(item)
      this.$store.commit("updateItem", item);
    },
    eventContent: function (info) {
      return {html: "<div id='"+info.event.id+"'>"+info.event.title+"</div>"};
    },
    eventClick: function (info) {

      const item = {
        id: info.event.id,
        title: info.event.title,
        start: info.event.start,
        end: info.event.end,
        obj: info
      };
     // console.log(item)
      info.event.setStart(info.event.start);
      this.$store.commit("updateItem", item);

    //  info.setStart(info.event.start);

      //  this.$store.dispatch('fetchItem', info.event.title);

    },
    handleDateClick: function (info) {
      const item = {
        title: '',
        start: info.date,
        end: info.date
      };

      this.$store.commit("updateItem", item);
    }
  }
}
</script>

<style scoped>

</style>