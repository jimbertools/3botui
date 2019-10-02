export default {
  name: 'contactlistitem',
  components: {},
  props: ['contact'],
  data () {
    return {

    }
  },
  computed: {
    name () { return `${this.contact.firstname} ${this.contact.lastname}` }
  },
  mounted () {

  },
  methods: {

  }
}
