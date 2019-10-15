import { mapActions } from 'vuex'
import config from '../../../public/config'
import cloneDeep from 'lodash.clonedeep'

export default {
  name: 'fullevent',
  components: {},
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
      description: config.description,
      edit: this.editable,
      currentEvent: {
        
      },
      startDateDialog: false
    }
  },
  computed: {
    currentSalutations: {
      get () {
        return this.currentEvent.salutation ? this.currentEvent.salutation.split(',') : []
      },
      set (val) {
        this.currentEvent.salutation = val.join(',')
      }
    }
  },
  mounted () {
    this.currentEvent = cloneDeep(this.contact)
    this.edit = cloneDeep(this.editable)
  },
  methods: {
    ...mapActions([
      'deleteContact',
      'createContact'
    ]),
    updateFavorite (isFavorite) {
      this.currentEvent.favorite = isFavorite
      this.createContact(this.currentEvent)
    },
    openFilePicker () {
      this.$refs.image.click()
    },
    onFilePicked (e) {
      const files = e.target.files
      if (e.target.files && e.target.files[0]) {
        var fr = new window.FileReader()
        fr.addEventListener('load', (x) => {
          this.currentEvent.picture = x.target.result
        })
        fr.readAsDataURL(files[0])
      }
    },
    updateContact () {
      if (this.$refs.contactForm.validate()) {
        for (let index = 0; index < this.currentEvent.email.length; index++) {
          const element = this.currentEvent.email[index]
          if (!element.email) {
            this.currentEvent.email.splice(index, 1)
          }
        }
        for (let index = 0; index < this.currentEvent.phone_numbers.length; index++) {
          const element = this.currentEvent.phone_numbers[index]
          if (!element.number) {
            this.currentEvent.phone_numbers.splice(index, 1)
          }
        }
        for (let index = 0; index < this.currentEvent.addresses.length; index++) {
          const element = this.currentEvent.addresses[index]
          if (!element.street_name) {
            this.currentEvent.addresses.splice(index, 1)
          }
        }
        this.createContact(this.currentEvent)
        this.edit = false
        this.$emit('update')
      }
    },
    cancelUpdate () {
      this.currentEvent = cloneDeep(this.contact)
      this.edit = false
      this.$refs.contactForm.resetValidation()
      this.$emit('cancel')
    },
    addPhoneNumber () {
      this.currentEvent.phone_numbers.push({})
    },
    removeNumber (index) {
      // TODO show dialog "are you sure"
      this.currentEvent.phone_numbers.splice(index, 1)
    },
    addAddress () {
      this.currentEvent.addresses.push({})
    },
    removeAddress (index) {
      // TODO show dialog "are you sure"
      this.currentEvent.addresses.splice(index, 1)
    },
    addEmail () {
      this.currentEvent.email.push({})
    },
    removeEmail (index) {
      // TODO show dialog "are you sure"
      this.currentEvent.email.splice(index, 1)
    },
    deleteThisContact () {
      // TODO show dialog "are you sure"
      this.deleteContact(this.currentEvent.id)
      this.$emit('delete:contact', this.currentEvent.id)
    }
  },
  watch: {
    edit: {
      immediate: true,
      handler (val) {
        if (val) {
          if (!this.currentEvent.phone_numbers.length) this.currentEvent.phone_numbers.push({})
          if (!this.currentEvent.email.length) this.currentEvent.email.push({})
          if (!this.currentEvent.addresses.length) this.currentEvent.addresses.push({})
        }
      }
    }
  }
}
