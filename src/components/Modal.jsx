import './Modal.css'
export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>   
        {children}
        <button onClick={handleClose}>Close</button>
        </h2>
      </div>
    </div>
  )
}
