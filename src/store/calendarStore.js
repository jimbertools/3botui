import calendarService from '../services/calendarService'
import moment from 'moment'
export default ({
  state: {
    calendars: [],
    events: []
  },
  actions: {
    getCalendars: (context) => {
      calendarService.getCalendarIds().then((response) => {
        context.dispatch('getFullCalendars', response.data.calendars)
      })
    },
    getFullCalendars (context, calendarIds) {
      let calendars = []

      calendarIds.forEach(calendarId => {
        calendarService.getFullCalendar(calendarId).then((response) => {
          calendars.push(response.data.calendar)
        })
      })
      context.commit('setCalendars', calendars)
    },
    addCalendar (context, calendarName) {
      calendarService.addCalendar(calendarName).then((response) => {
        context.dispatch('getCalendars')
      })
    },
    getFullEvents (context, obj) {
      let calendarId = obj.calendarId
      let eventIds = obj.eventIds
      let events = []

      eventIds.forEach(eventId => {
        calendarService.getEvent(calendarId, eventId).then((response) => {
          events.push(response.data.event)
        })
      })
      context.commit('setEvents', events)
    },
    addEvent (context, event) {
      calendarService.addEvent(event).then((response) => {
        context.dispatch('getCalendars')
      })
    }
  },
  mutations: {
    setCalendars: (state, calendars) => {
      state.calendars = calendars
    },
    setEvents: (state, events) => {
      state.events = events
    }
  },
  getters: {
    calendars: (state) => state.calendars,
    events: (state) => state.events.map(ev=> {
      return {
        start: moment.unix(ev.dtstart).format("YYYY-MM-DD HH:mm"),
        end: moment.unix(ev.dtend).format("YYYY-MM-DD HH:mm"),
        name: ev.summary,
        cal_id: ev.calendar_id,
        uid: ev.uid
      }
    })
  }
})
