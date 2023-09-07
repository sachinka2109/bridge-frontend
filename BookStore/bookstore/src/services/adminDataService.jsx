import axios from 'axios';

const headerConfig = {
    headers: {
      "x-access-token": localStorage.getItem("admin-token"),
    },
};


export const addProduct = (data) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/add/book',data,headerConfig);
    return response;
}