import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'calendarnavigation',
  components: {},
  props: [],
  data () {
    return {
      selectedBox: 0,
      newCalendar: ''
    }
  },
  computed: {
    ...mapGetters([
      'calendars'
    ])
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'addCalendar'
    ]),
    addCal () {
      this.addCalendar(this.newCalendar)
      this.newCalendar = ''
    },
    setSelectedCalendar (calendarId) {
      this.$emit('setSelectedCalendar', calendarId)
    }
  }
}
