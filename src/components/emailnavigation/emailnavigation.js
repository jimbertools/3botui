import { mapActions, mapGetters } from 'vuex'
import { Drag, Drop } from 'vue-drag-drop'

export default {
  name: 'emailnavigation',
  components: { Drag, Drop },
  props: [],
  data () {
    return {
      selectedBox: 0
    }
  },
  computed: {
    ...mapGetters([
      'boxes'
    ])
  },
  mounted () {

  },
  methods: {
    ...mapActions([
      'updateFolder'
    ]),
    setSelectedBox (box) {
      this.$emit('selectMailBox', box)
    },
    moveMail (mailArgument, event, folder) {
      this.updateFolder({
        mailId: mailArgument.emailId,
        folder: folder.name
      })
    }
  }
}
