import { useState } from "react"
import axios from "axios"
const Weather = () => {
    const [evalue, setevalue] = useState("")
    const [Weather, setWeather] = useState("")
    const [desc, setdesc] = useState("")
    const [temp, settemp] = useState("")
    const handle = (evt) => {
        setevalue(evt.target.value)
    }
    const getWeather = () => {
        var Weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${evalue}&appid=e1b2702d6277c01e92027e630b4686d1`)
        Weather.then((success) => {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)

        })

    }
    return (
        <div className="max-w-sm mx-auto  p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-32">
            <h1 className="text-3xl font-bold mb-2 text-center text-white">Weather Report</h1>
            <p className="text-gray-700 mb-4 text-center whitespace-nowrap">I Can give you a Weather report about your city!!</p>
            <input type="text" className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white" placeholder="Enter city name" value={evalue} onChange={handle}></input>
            <button className="w-full py-2 bg-white text-blue-600 rounded hover:bg-gray-200 transition duration-300" onClick={getWeather}>Get Report</button>
            <div  className="mt-4 text-white transition-opacity duration-300">
                <p className="text-lg font-semibold ">Weather : <span className="font-normal">{Weather}</span></p>
                <p className="text-lg font-semibold ">Temperature : <span className="font-normal">{temp}</span></p>
                <p className="text-lg font-semibold ">Description : <span className="font-normal">{desc}</span></p>
            </div>
        </div>)
}
export default Weather 
