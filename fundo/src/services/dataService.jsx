import axios from 'axios';

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export let createNotes = (data) => {
    console.log(data)
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,headerConfig)
    return response;
}

export let getNotes = async() => {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response;
}


export let updateColor = async(data) => {
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/explorer/api/notes/changesColorNotes',data,headerConfig)
    return response;
}