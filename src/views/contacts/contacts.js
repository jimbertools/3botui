import fullContact from '../../components/fullcontact'
import contactListItem from '../../components/contactlistitem'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'contacts',
  components: { fullContact, contactListItem },
  props: [],
  data () {
    return {
      openContact: null,
      newContact: {},
      addContactDialog: false,
      sortingSelection: [
        'Name',
        'Recent'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'contacts'
    ])
  },
  mounted () {
    this.getContacts()
  },
  methods: {
    ...mapActions([
      'getContacts',
      'createContact'
    ]),
    deleteContact (contactId) {
      this.openContact = null
    },
    clearAndClose () {
      this.newContact = {}
      this.addContactDialog = false
    }
  }
}
