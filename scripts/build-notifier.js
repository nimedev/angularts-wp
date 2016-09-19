/**
 * Make a notification for build process
 * @module build-notifier
 */

// npm modules
const notifier = require('node-notifier')

// Get jspm dependencies from package.json
const appSetting = require('../package')
const appName = appSetting.name

// Do the notification
notifier.notify({
  title: appName,
  message: 'Finish build'
})