  import {useState} from 'react'
  import './App.css';

  function App() {
  const [name, setName] = useState('mario')
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])
    const handleClick = () => {
          setName('luigi')   
    }

    return (
      <div className="App">
      <h1> {name}</h1>
      <button onClick={handleClick}>Change Name </button>
      {
        events.map((event)=>(
          <div key={event.id}> 
            <h2>
              {event.title}
            </h2>
            </div>
        ))
      }
      </div>
    );
  }

  export default App;