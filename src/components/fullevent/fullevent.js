import { mapActions } from 'vuex'
import config from '../../../public/config'
import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'fullevent',
  components: {},
  props: [ 'calendars', 'selectedCalendarId' ],
  data () {
    return {
      edit: true,
      currentEvent: {
      }
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    ...mapActions([
      'addEvent'
    ]),
    saveEvent () {
      this.addEvent(this.currentEvent)
      this.clearAndClose()
    },
    clearAndClose () {
      this.currentEvent = {}
      this.$emit('cancel')
    },
    cancel () {
      this.$emit('cancel')
    }
  },
  watch: {
  }
}
