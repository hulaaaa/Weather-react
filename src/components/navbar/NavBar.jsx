import {useState} from 'react'
import axios from 'axios'

const NavBar = (props) => {
    const key_api = `5ed440c86d7f69992d36aa7f085fae50`;
    const [city,setCity] = useState('');
    async function searchWeatherByClick() {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key_api}&units=metric`);
        props.dataWeather(response.data);
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">weatherApp</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input 
                        type="text" 
                        placeholder="Find weather in your city" 
                        value={city}
                        onChange={e=> setCity(e.target.value)}
                        className="input input-bordered w-24 md:w-auto" 
                    />
                </div>
                <button onClick={()=>searchWeatherByClick()} className="btn btn-ghost normal-case">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default NavBar