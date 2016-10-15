/**
 * Select constants for application according to environment.
 * Create a constants file used by application.
 * @module config
 */
'use strict'

// core modules
const fs = require('fs')
const path = require('path')

// App Modules
const constants = require(`./constants`)

// Constants & Variables
const fileName = 'constants.ts'
const destPath = path.resolve(`${__dirname}/../src/constants/${fileName}`)
// eslint-disable-next-line no-console
console.log(destPath)

// Convert object to string and add export function for the file to create
const objectString = JSON.stringify(constants)
const codeString = `export default ${objectString}`

// Save the new file
fs.writeFile(destPath, codeString, err => {
  // eslint-disable-next-line no-console
  if (err) return console.error(err)
  // eslint-disable-next-line no-console
  console.log('App constants: ', constants)
})