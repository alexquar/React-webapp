  import {useState} from 'react'
  import './App.css';

  function App() {
  const [name, setName] = useState('mario')

    const handleClick = () => {
          setName('luigi')   
    }

    return (
      <div className="App">
      <h1> {name}</h1>
      <button onClick={handleClick}>Change Name </button>
      </div>
    );
  }

  export default App;