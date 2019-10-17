import fullEvent from '../../components/fullevent'
import calendarNavigation from '../../components/calendarnavigation'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'calendar',
  components: { fullEvent, calendarNavigation },
  props: [],
  data () {
    return {
      today: '2019-10-16',
      openEvent: {},
      addEventDialog: false,
      selectedCalendarId: ''
    }
  },
  computed: {
    ...mapGetters([
      'calendars',
      'events'
    ])
  },
  mounted () {
    this.$refs.calendar.scrollToTime('08:00')
    this.getCalendars()
  },
  methods: {
    ...mapActions([
      'getCalendars',
      'setEvents',
      'getFullEvents'
    ]),
    clearAndClose () {
      this.newEvent = {}
      this.addEventDialog = false
    },
    setSelectedCalendar (calendarId) {
      this.selectedCalendarId = calendarId
      let eventIds = this.calendars.find(x => x.id === calendarId).events
      this.getFullEvents({
        calendarId: this.selectedCalendarId,
        eventIds: eventIds
      })
    }
  }
}
