const {isWithin100Km, quickSort} = require('./utils')
const fs = require('fs')

const latitude = 53.339428
const longitude = -6.257664

const start = () => {
    try {
        const data = fs.readFileSync('customers.txt', 'utf8').toString().split(`\n`)
        const filteredData = data.reduce((filtered, entry) => {
            const customer = JSON.parse(entry)
            if (isWithin100Km(latitude, longitude, customer.latitude, customer.longitude)) {
                filtered.push(customer)
            }
            return filtered
        }, [])
        console.log(quickSort(filteredData, 0, filteredData.length - 1))
    } catch (e) {
        console.log('Error:', e.stack);
    }
}

start()