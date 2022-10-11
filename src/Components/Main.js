import React, { useEffect, useState } from 'react'

function Main() {
    const [data, setData] = useState([]);

    const getCovidApi = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const covidData = await res.json();
            setData(covidData.statewise[0]);
        } catch (error) {
            console.log(error)
        }
    }
    // useing use Effect hooks 
    useEffect(() => {
        getCovidApi();
    }, []);

    return (
        <div>

            {/* This is my main components. */}
            <div className='banner-text'>
                <h3 className='blink'>🔴Live</h3>
                <h2 className='text'>Latest Covid-19 Update Tracker. </h2>
            </div>
            {/* Card section */}
            <div className='card-section'>
                <ul className="cards">
                    <li className='card'>
                        <div className="main-card">
                            <p><span>OUR</span> COUNTRY</p>
                            <h1>INDIA</h1>
                        </div>
                    </li>
                    <li className='card purple'>
                        <div className="main-card">
                            <p><span>Total</span> RECOVERED</p>
                            <h1>{data.recovered}</h1>
                        </div>
                    </li>
                    <li className='card green'>
                        <div className="main-card">
                            <p><span>TOTAL</span> DEATHS</p>
                            <h1>{data.deaths}</h1>
                        </div>
                    </li>
                    <li className='card orange'>
                        <div className="main-card">
                            <p><span>TOTAL</span> CONFIRMED</p>
                            <h1>{data.confirmed}</h1>
                        </div>
                    </li>
                    <li className='card yellow'>
                        <div className="main-card">
                            <p><span>TOTAL</span> ACTIVE</p>
                            <h1>{data.active}</h1>
                        </div>
                    </li>
                    <li className='card voilate'>
                        <div className="main-card ">
                            <p><span>Last</span> UPDATE</p>
                            <h1>{data.lastupdatedtime}</h1>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Main
