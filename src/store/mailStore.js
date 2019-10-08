import mailService from '../services/mailService'

export default ({
  state: {
    mails: []
  },
  actions: {
    getMails: (context) => {
      mailService.getMails().then((response) => {
        response.data.sort(function(a,b){
          return new Date(b.date) - new Date(a.date);
        })
        context.commit('setMails', response.data)
      }).catch((error) => {
        console.error(error)
      })
    },
    sendMail: (mail, contact) => {
      mailService.sendMail(mail).then((response) => {
        context.dispatch('getMails')
      }).catch((error) => {
        console.error(error)
      })
    }/*,
    deleteContact: (context, contactId) => {
      contactService.deleteContact(contactId).then((response) => {
        context.dispatch('getContacts')
      }).catch((error) => {
        console.error(error)
      })
    },
    createContact: (context, contact) => {
      contactService.updateOrCreate(contact).then((response) => {
        context.dispatch('getContacts')
      }).catch((error) => {
        console.error(error)
      })
    }*/
  },
  mutations: {
    setMails: (state, mails) => {
      state.mails = mails
    }
  },
  getters: {
    mails: (state) => state.mails
  }
})
