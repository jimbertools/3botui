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
    cancelContactCreation () {
      this.newContact = {}
      this.addContactDialog = false
    },
    saveNewContact () {
      this.addContactDialog = false
      this.createContact(this.newContact)
      this.newContact = {}
    }
  }
}
