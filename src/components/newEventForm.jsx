import './newEventForm.css'
export default function newEventForm() {
  return (
    <form className="new-event-form">
      <label>
        <span> Event Title:</span>
      <input type="text" />
      </label>
      <label>
        <span> Event Date:</span>
      <input type="date"/>
      </label>
     <button>Submit</button>
    </ form>
  )
}
