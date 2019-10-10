import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'emailnavigation',
  components: {},
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
    setSelectedBox (box) {
      this.$emit('selectMailBox', box)
    }
  }
}
