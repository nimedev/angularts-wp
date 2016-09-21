/**
 * Select app constants according to environment.
 * Create a constants file used by application.
 * @module app-config
 */
'use strict'

// core modules
const fs = require('fs')
const path = require('path')

// App Modules
const constants = require(`./constants`)

// Constants & Variables
const fileName = 'app.constants.ts'
const destPath = path.resolve(`${__dirname}/../app/${fileName}`)
console.log(destPath)

// Convert object to string and add export function for the file to create
const objectString = JSON.stringify(constants)
const codeString = `export default ${objectString}`

// Save the new file
fs.writeFile(destPath, codeString, err => {
  if (err) return console.error(err)
  console.log('App constants: ', constants)
})