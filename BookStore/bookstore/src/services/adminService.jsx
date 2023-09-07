import axios from 'axios';

const headerConfig = {
    headers: {
      "x-access-token": localStorage.getItem("admin-token"),
    },
};

export let adminUserLogin = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/login',data)
    // console.log(response)
    return response
}

export let adminUserSignup = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/registration',data)
    console.log(response)
    return response
}
  



