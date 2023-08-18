import axios from 'axios'

const headerConfig = {
    headers: {
        Authorization: localStorage.getItem('token')
    }
}

export let signIn = async(data) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login',data)
    console.log(response)
    return response
}

export let signUp = async(data) => {
    let response = await axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp',data)
    console.log(response)
    return response
}

export let getUserData = async(data) => {
    let response = await axios.get(`http://fundoonotes.incubation.bridgelabz.com/explorer/api/user/findById`,headerConfig)
    return response
}