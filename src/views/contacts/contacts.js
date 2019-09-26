import fullContact from '../../components/fullcontact'
import contactListItem from '../../components/contactlistitem'
export default {
  name: 'contacts',
  components: { fullContact, contactListItem },
  props: [],
  data () {
    return {
      openContact: null,
      sortingSelection: [
        'Name',
        'Recent'
      ],
      item:
        {
          name: 'John Lennon',
          star: false,
          contacts: [{
            label: 'Work email',
            type: 'email',
            value: 'john@len.non'
          }, {
            label: 'Work phone',
            type: 'phone',
            value: '+3249000000000'
          }, {
            label: 'Work',
            type: 'location',
            value: 'Legeweg 135, 8020 Oostkamp'
          }],
          recent: [{
            type: 'phone',
            direction: 'outgoing',
            body: '05:13',
            timestamp: '25/09/2019'
          }, {
            type: 'email',
            direction: 'outgoing',
            body: 'All my troubles seemed so far away',
            timestamp: '26/09/2019'
          }, {
            type: 'email',
            direction: 'incoming',
            body: 'Imagine',
            timestamp: '24/09/2019'
          }]
        }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
