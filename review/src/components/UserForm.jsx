import React from 'react'
import { useState } from 'react';
import CollegeForm from './CollegeForm';
import OfficeForm from './OfficeForm';

function UserForm() {
    const [show,setShow] = useState(false);
    const [selected,setSelected] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        officename: '',
        officeid: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.id] : e.target.value
        }))
    }
    const handleAgeChange = (e) => {
        const value = parseInt(e.target.value,0)
        setShow(false)
        setSelected(value);
        console.log(selected)
    };
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setShow(true);
        console.log(formData)
    };
  return (
    <div>
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <select name="age" id="age" onChange={handleAgeChange} value={selected}>
                    <option value={0}>select age</option>
                    <option value={20}>0-20</option>
                    <option value={21}>20+</option>
                </select>
            </div>
            {selected === 20 && <CollegeForm 
                collegename={formData.collegename}
                collegeid={formData.collegeid}
                handleChange={handleChange}
                onHandleSubmit={onHandleSubmit}
                render={(collegename,collegeid) => show &&(<div>{collegename}{collegeid}</div>)}
            />}
            {selected === 21 && <OfficeForm 
                officename={formData.officename}
                officeid={formData.officeid}
                handleChange={handleChange}
                onHandleSubmit={onHandleSubmit}
                render={(officename,officeid) => show && (<div>{officename}{officeid}</div>)}
            />}
        </form>
        {/*
        {show && selected=== 21?  (     
            <>         
                <div>officename:{formData.officename}</div>
                <div>officeid:{formData.officeid}</div>
            </>   
        ) : show && selected=== 20?
        ( 
        <>        
            <div>collegename:{formData.collegename}</div>
            <div>collegeid:{formData.collegeid}</div>
        </>
        ) : <div></div>
        } */}
    </div>
  )
}

export default UserForm