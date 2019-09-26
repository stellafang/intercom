import {isWithin100Km, quickSort} from './utils'
import fs from 'fs'

const latitude = 53.339428
const longitude = -6.257664

const app = () => {
    const data = fs.readFileSync('customers.txt', 'utf8').toString().split(`\n`)
    const filteredData = data.reduce((filtered, entry) => {
        const customer = JSON.parse(entry)
        if (isWithin100Km(latitude, longitude, customer.latitude, customer.longitude)) {
            filtered.push(customer)
        }
        return filtered
    }, [])
    console.log(quickSort(filteredData, 0, filteredData.length - 1, "user_id"))
}

module.exports = app()