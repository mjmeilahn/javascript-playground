
const fs = require('fs')
const path = require('path')
const moment = require('moment')
const tz = require('moment-timezone') // KEEP THIS
const timezone = 'America/Los_Angeles' // CHANGE THIS TO HOW YOU LIKE
const begin = moment().tz(timezone).format()
const mdy = moment().tz(timezone).format('L').split('/').join('-')
let now = moment().tz(timezone).format('MMMM Do YYYY, h:mma')
const obj = {}

const setLog = name => {
    obj.name = name.trim()
    obj.file = path.join(process.cwd(), `/logs/${obj.name}-${mdy}-log.txt`)

    if (fs.existsSync(obj.file)) {
        fs.unlinkSync(obj.file)
    }
    fs.appendFileSync(obj.file, '')
    update('Running at ' + now)
}

const log = message => {
    let end = moment().tz(timezone).format()
    let duration = moment.utc(moment(end).diff(moment(begin))).format('HH:mm:ss')
    let time = moment().tz(timezone).format('h:mma')
    update(`${message} (${duration}) ${time}`)
}

const update = content => {
    if (obj.name === undefined) {
        return console.error('Call setLog() before log() with a String ID')
    }
    else {
        console.log(`${obj.name}: ${content}`)
        fs.appendFileSync(obj.file, content + '\n')
    }
}

const endLog = () => {
    let end = moment().tz(timezone).format()
    let now = moment().tz(timezone).format('MMMM Do YYYY, h:mma')
    let duration = moment.utc(moment(end).diff(moment(begin))).format('HH:mm:ss')
    update(`Finished at ${now} (${duration})`)
}

module.exports = {
    setLog,
    log,
    endLog
}
