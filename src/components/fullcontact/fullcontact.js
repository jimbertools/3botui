import { mapActions } from 'vuex'
import config from '../../../public/config'
import cloneDeep from 'lodash.clonedeep'
export default {
  name: 'fullcontact',
  components: { },
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    contact: {
      type: Object,
      default: () => {
        return {
          addresses: [{}],
          email: [{}],
          phone_numbers: [{}]
        }
      }
    }
  },
  data () {
    return {
      salutations: config.salutations,
      description: config.description,
      edit: this.editable,
      currentContact: {
        addresses: [{}],
        email: [{}],
        phone_numbers: [{}]
      },
      birthDateDialog: false,
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
    currentSalutations: {
      get () {
        return this.currentContact.salutation ? this.currentContact.salutation.split(',') : []
      },
      set (val) {
        this.currentContact.salutation = val.join(',')
      }
    }
  },
  mounted () {
    this.currentContact = cloneDeep(this.contact)
    this.edit = cloneDeep(this.editable)
  },
  methods: {
    ...mapActions([
      'deleteContact',
      'createContact'
    ]),
    updateContact () {
      // TODO check if last phone_numbers / email / address is filled in
      this.createContact(this.currentContact)
      this.edit = false
      this.$emit('update')
    },
    cancelUpdate () {
      this.currentContact = cloneDeep(this.contact)
      this.edit = false
      this.$emit('cancel')
    },
    addPhoneNumber () {
      // TODO verify last phoneNumber
      this.currentContact.phone_numbers.push({})
    },
    removeNumber (index) {
      // TODO show dialog "are you sure"
      this.currentContact.phone_numbers.splice(index, 1)
    },
    addPhoneAddress () {
      // TODO verify last phoneNumber
      this.currentContact.addresses.push({})
    },
    removeAddress (index) {
      // TODO show dialog "are you sure"
      this.currentContact.addresses.splice(index, 1)
    },
    addPhoneEmail () {
      // TODO verify last phoneNumber
      this.currentContact.email.push({})
    },
    removeEmail (index) {
      // TODO show dialog "are you sure"
      this.currentContact.email.splice(index, 1)
    }
  },
  watch: {
    edit: {
      immediate: true,
      handler (val) {
        if (val) {
          if (!this.currentContact.phone_numbers.length) this.currentContact.phone_numbers.push({})
          if (!this.currentContact.email.length) this.currentContact.email.push({})
          if (!this.currentContact.addresses.length) this.currentContact.addresses.push({})
        }
      }
    }
  }
}
