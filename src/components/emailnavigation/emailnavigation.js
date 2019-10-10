import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'emailnavigation',
  components: {},
  props: [],
  data () {
    return {
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
