import axios from 'axios';

let headerConf;
const headerConfig = () => {
  headerConf = {
    headers: {
      "x-access-token": localStorage.getItem("admin-token"),
    },
  }
  return headerConf;
};


export const addProduct = (data) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/add/book',data,headerConfig());
    return response;
}

export const updateProduct = (id,data) => {
  let response = axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/update/book/${id}`,data,headerConfig());
  return response;
}

export const deleteProduct = (id) => {
  console.log(id)
  let response = axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/admin/delete/book/${id}`,headerConfig());
  console.log(response)
  return response;
}