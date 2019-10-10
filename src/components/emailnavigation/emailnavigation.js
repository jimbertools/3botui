import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'emailnavigation',
  components: {},
  props: [],
  data () {
    return {
<<<<<<< HEAD
=======
      selectedBox: 0,
      boxes: [
        { name: 'Inbox' },
        { name: 'Outbox' },
        { name: 'Sent' },
        { name: 'Spam' },
        { name: 'Trash' }
      ]
>>>>>>> 0b2269a4d6fd6d90f9e5e3c0f6103a70d16c5751
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
    setSelectedBox (box) {
      this.$emit('selectMailBox', box)
    }
  }
}
