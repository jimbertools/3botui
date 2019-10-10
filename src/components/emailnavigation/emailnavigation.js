export default {
  name: 'emailnavigation',
  components: {},
  props: [],
  data () {
    return {
      selectedBox: 0,
      boxes: [
        { name: 'Inbox' },
        { name: 'Outbox' },
        { name: 'Sent' },
        { name: 'Spam' },
        { name: 'Trash' }
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    setSelectedBox (box) {
      this.$emit('selectMailBox', box)
    }
  }
}
