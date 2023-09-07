import React, { useState } from "react";
import { FormControl, TextField, Box, Button } from "@mui/material";
import { addProduct } from "../../services/adminDataService";

function EditBook() {
  const [data, setData] = useState({
    bookName: "",
    author: "",
    description: "",
    quantity: "",
    price: 0,
    discountPrice: 0,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    console.log(data);
    let res = await addProduct(data);
    console.log("added", res);
  };

  return (
    <Box sx={}>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Book Name
        </label>
        <TextField
          name="bookName"
          inputProps={{ style: { padding: 5 } }}
          value={data.bookName}
          onChange={handleChange}
          fullWidth
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Book Author
        </label>
        <TextField
          name="author"
          inputProps={{ style: { padding: 5 } }}
          value={data.author}
          onChange={handleChange}
          fullWidth
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Description
        </label>
        <TextField
          name="description"
          inputProps={{ style: { padding: 5 } }}
          value={data.description}
          onChange={handleChange}
          fullWidth
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Quantity
        </label>
        <TextField
          type="number"
          name="quantity"
          value={data.quantity}
          onChange={handleChange}
          placeholder="Enter Number between 1 to 10"
          InputProps={{
            style: { width: 250 }, // Adjust the font size as needed
            inputProps: { style: { padding: 5 } }, // Adjust padding if needed
          }}
          fullWidth
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Price
        </label>
        <TextField
          name="price"
          inputProps={{ style: { padding: 5 } }}
          value={data.price}
          onChange={handleChange}
          fullWidth
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Discount Price
        </label>
        <TextField
          name="discountPrice"
          inputProps={{ style: { padding: 5 } }}
          value={data.discountPrice}
          onChange={handleChange}
          fullWidth
        ></TextField>
      </FormControl>
      <Button onClick={onSubmit}>Add Product</Button>
    </Box>
  );
}

export default EditBook;
