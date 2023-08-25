import axios from "axios";

const headerConfig = {
  headers: {
    "x-access-token": localStorage.getItem("token"),
  },
};

export let getBooks = async () => {
  // console.log(headerConfig);
  let response = await axios.get(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",
    headerConfig
  );
  // console.log(response);
  return response;
};

export const addCartItem = async (data) => {
  let response = await axios.post(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/${data}`,
    data,
    headerConfig
  );
  return response;
};

export const getCartItems = async () => {
  let response = await axios.get(
    "https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items",
    headerConfig
  );
  console.log(response)
  return response;
};

export const modifyCartItem = async (id, data) => {
  let response = await axios.put(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${id}`,
    data,
    headerConfig
  );
  console.log(response)
  return response;
};

export const removeCartItem = async (id) => {
  let response = await axios.delete(
    `https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/${id}`,
    headerConfig
  );
  console.log(response)
  return response;
};
