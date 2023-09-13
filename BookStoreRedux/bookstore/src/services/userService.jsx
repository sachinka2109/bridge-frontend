import axios from 'axios';

const headerConfig = {
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
};

export let userLogin = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login',data)
    console.log(response)
    return response
}

export let userSignUp = async(data) => {
    let response = await axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',data)
    // console.log(response)
    return response
}

export const updateUser = async (data) => {
    let response = await axios.put(
      `https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user`,
      data,
      headerConfig
    );
    // console.log(response)
    return response;
};
  