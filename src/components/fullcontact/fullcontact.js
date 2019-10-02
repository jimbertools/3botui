import { mapActions } from 'vuex'

export default {
  name: 'fullcontact',
  components: {},
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    contact: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
      edit: this.editable,
      currentContact: {},
      birthdateDialog: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
  },
  mounted () {
    this.currentContact = JSON.parse(JSON.stringify(this.contact))
    this.edit = JSON.parse(JSON.stringify(this.editable))
  },
  methods: {
    ...mapActions([
      'deleteContact',
      'createContact'
    ]),
    updateContact () {
      this.createContact(this.currentContact)
      this.edit = false
      this.$emit('update')
    },
    cancelUpdate () {
      this.currentContact = JSON.parse(JSON.stringify(this.contact))
      this.edit = false
      this.$emit('cancel')
    }
  }
}
