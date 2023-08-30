import React from 'react'
import { useState } from 'react';

function OfficeForm(props) {
  const [office,setOffice] = useState({
    officename: '',
    officeid: ''
  })

  const handleChange = (e) => {
    setOffice(prev => ({
        ...prev,
        [e.target.id] : e.target.value
    }))
  }
  return (
    <div>
        <form>
            <div className="form-group">
            <label htmlFor="officename">Office-name</label>
            <input type="text" id="officename" name="officename" value={office.officename} onChange={handleChange}/>
            </div>
            <div className="form-group">
            <label htmlFor="officeid">Office-id</label>
            <input type="text" id="officeid" name="officeid" value={office.officeid}  onChange={handleChange}/>
            </div>
            <button onClick={props.onHandleSubmit}>Submit form</button>
        </form>
        <div>
          {props.render(office.officename)}
          {props.render(office.officeid)}
        </div>
    </div>
  )
}

export default OfficeForm