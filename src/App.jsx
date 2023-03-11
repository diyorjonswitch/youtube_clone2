import React, { useEffect, useState } from 'react'
import './App.scss'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Videocard from './Components/Videocard/Videocard'
import { instance } from "./Api/Instance"

function App() {
const [VideoData, setVIdeoData] = useState([])

  useEffect(() => {
    instance.get('trending?type=mu&hl=en&gl=US')
    .then(response => setVIdeoData(response.data.contents))
  }, []);
console.log(VideoData);
  return (
    <div className="App">
      <Header/>
      <div className="mainBody">
        <Sidebar/>
        <div className="videos">
        <h1>Recommended</h1>
        <div className="videos__container">
          {
            VideoData.map(item => {
              return <Videocard items={item.video}/>
            })
          }
        </div>

        </div>

      </div>
    </div>
  )
}

export default App
