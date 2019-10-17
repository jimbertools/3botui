import Axios from 'axios'
import config from '../../public/config'
import moment from 'moment'
const headers = { headers: { 'Content-Type': 'application/json' } }
export default ({
  getCalendarIds () {
    return Axios.post(`${config.jsApiUrl}calendar/list_calendars`)
  },
  getFullCalendar (id) {
    return Axios.post(`${config.jsApiUrl}calendar/get_calendar`, {
      args: {
        cal_id: id
      }
    })
  },
  addCalendar (calendarName) {
    return Axios.post(`${config.jsApiUrl}calendar/add_calendar`, {
      args: {
        name: calendarName,
        cal_id: calendarName
      }
    })
  },
  getEvent (calendarId, eventId) {
    return Axios.post(`${config.jsApiUrl}calendar/get_event`, {
      args: {
        cal_id: calendarId,
        uid: eventId
      }
    })
  },
  addEvent (event) {
    console.log(event.startDate)
    console.log(event.startTime)
    console.log(moment(event.startDate + ' ' + event.startTime))
    console.log("------------")
    console.log(event.toDate)
    console.log(event.endTime)
    console.log(moment(event.toDate + ' ' + event.endTime))

    return Axios.post(`${config.jsApiUrl}calendar/add_event`, {      
      args: {
        cal_id: event.selectedCalendarId,
        uid: event.eventName,
        summary: event.eventName,
        dtstart: moment(event.startDate + ' ' + event.startTime).unix(),
        dtend: moment(event.toDate + ' ' + event.endTime).unix()
      }
    })
  }
})
