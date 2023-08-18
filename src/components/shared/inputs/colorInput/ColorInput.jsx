import './colorInput.css'

function ColorInput({label}) {
  return (
    <div className="form-group">
<label htmlFor="colorInput">{label}</label>
   <input className='colorInput' type="color" />
    </div>
  )
}

export default ColorInput