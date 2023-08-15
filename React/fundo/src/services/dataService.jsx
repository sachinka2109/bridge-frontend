import axios from 'axios';

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export let createNotes = async(data) => {
    console.log(data)
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,headerConfig)
    return response;
}

export let getNotes = async() => {
    let response = await axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response;
}

export const updateArchive= async(data)=>{
    console.log(data);
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",data,headerConfig)
    return response
}

export let updateColor = async(data) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',data,headerConfig)
    return response;
}

export const deleteItem= async(data)=>{
    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",data,headerConfig)
    return response
}