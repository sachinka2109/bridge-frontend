import axios from 'axios';

export let userLogin = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login',data)
    console.log(response)
    return response
}

export let userSignUp = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',data)
    console.log(response)
    return response
}