import Notification from './notification'
import notify from './fun'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notify = notify
}
