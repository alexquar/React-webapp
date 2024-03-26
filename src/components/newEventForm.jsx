import { useState } from 'react'
import './newEventForm.css'
export default function NewEventForm({addEvent}) {
    const [title,setTitle] = useState('')
    const [date,setDate] = useState('')
    const [location,setLocation] = useState('Waterloo')
    const resetForm = () =>{
        setTitle('')
        setDate('')
        setLocation('Waterloo')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
          title: title,
          date: date,
          location: location,
          id: Math.floor(Math.random() * 10000)
        }
        addEvent(event)
        resetForm()
      }
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span> Event Title: </span>
      <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title}/>
      </label>
      <label>
        <span> Event Date: </span>
      <input type="date" onChange={ (e)=> setDate(e.target.value)} value={date}/>
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="Waterloo">Waterloo</option>
          <option value="Cambridge">Cambridge</option>
          <option value="Kitchener">Kitchener</option>
        </select>
      </label>
     <button>Submit</button>
     <p onClick={resetForm}>Reset</p>
    </ form>
  )
}
