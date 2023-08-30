import React, { useState } from "react";

function CollegeForm(props) {
  const [college,setCollege] = useState({
    collegename: '',
    collegeid: ''
  })

  const handleChange = (e) => {
    setCollege(prev => ({
        ...prev,
        [e.target.id] : e.target.value
    }))
  }
  return (
    <div>
      <form>
        <div className="form-group">
        <label htmlFor="collegename">College name</label>
        <input type="text" id="collegename" name="collegename" value={college.collegename} onChange={handleChange}/>
        </div>
        <div className="form-group">
        <label htmlFor="collegeid">College id</label>
        <input type="text" id="collegeid" name="collegeid" value={college.collegeid} onChange={handleChange}/>
        </div>
        <button onClick={props.onHandleSubmit}>Submit form</button>
      </form>
      <div>
        {props.render(college.collegename)}
        {props.render(college.collegeid)}
      </div>
    </div>
  );
}

export default CollegeForm;
