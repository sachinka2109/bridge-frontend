import React, { useState } from "react";
import { FormControl, TextField, Box, Button, Typography } from "@mui/material";
import { addProduct, updateProduct } from "../../services/adminDataService";
import { useNavigate } from "react-router-dom";

function EditBook({item,getSingleBook}) {
  const bookNameRegex = /^[\w\s.,'-]+$/;
  const fullNameRegex = /^[A-Za-z\s.'-]+$/;
  const location = window.location.href;
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: item?.bookName || "",
    author: item?.author || "",
    description: item?.description || "",
    quantity: item?.quantity || "",
    price: item?.price || 0,
    discountPrice: item?.discountPrice || "",
  });

  const [error,setError] = useState({
    isBookNameTrue: false,
    bookNameError: '',
    isAuthorTrue: false,
    authorError: '',
    isDescriptionTrue:false,
    descriptionError:'',
    isQuantityTrue:false,
    quantityError:'',
    isPriceTrue:false,
    priceError:'',
    isDiscountPriceTrue:false,
    discountPriceError:''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async () => {
    const booknameTest = bookNameRegex.test(data.bookName);
    const authorTest = fullNameRegex.test(data.author);
    if(booknameTest === false) {
      return setError({
        isBookNameTrue:true,
        bookNameError:'Please Enter good BookName'
      })
    } else if(authorTest === false) {
      return setError({
        isAuthorTrue:true,
        authorError: 'author name should have firstname and lastname'
      })
    } else if(data.description === '' || data.description.length < 3) {
      return setError({
        isDescriptionTrue:true,
        descriptionError: 'Enter BookDescription'
      })
    }else if(data.quantity < 0 || data.quantity > 10) {
      return setError({
        isQuantityTrue:true,
        quantityError: 'Please Enter quantity from 1-10'
      })
    }else if(data.price < 0 && data.price < data.discountPrice) {
      return setError({
        isPriceTrue:true,
        priceError: 'Please Enter price greater than discount price'
      })
    }else if(data.discountPrice > data.price) {
      return setError({
        isDiscountPriceTrue:true,
        discountPriceError: 'Discount price should be less than original price'
      })
    } else {
      setError({
        isDescriptionTrue:false,
        descriptionError: '',
        isQuantityTrue:false,
        quantityError: '',
        isPriceTrue:false,
        priceError: '',
        isDiscountPriceTrue:false,
        discountPriceError: ''
      })
      if(location.includes('edit')) {
        let res = await updateProduct(item._id,data);
        console.log('edited',res);
        getSingleBook();
        navigate(`/admin/book-details/${item._id}`)
      } else {
        let res = await addProduct(data);
        console.log("added", res);
      }
    } 
  };

  return (
    <Box sx={{display:'flex',flexDirection:'column',border:'1px solid #d1d1d1',flex:'0 1 30%',p:5}}>
      <Typography variant="h5" color="initial">{!location.includes('edit')?'Add Book' : 'Edit Book'}</Typography>
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
          error={error.isBookNameTrue}
          helperText={error.bookNameError}
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
          error={error.isAuthorTrue}
          helperText={error.authorError}
        ></TextField>
      </FormControl>
      <FormControl>
        <label style={{ fontSize: 12, color: "#0A0102", margin: "5px 0" }}>
          Description
        </label>
        <TextField
          name="description"
          inputProps={{ style: { padding: 0 } }}
          value={data.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={2}
          error={error.isDescriptionTrue}
          helperText={error.descriptionError}
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
            inputProps: { style: { padding: 5 } }, // Adjust padding if needed
          }}
          fullWidth
          error={error.isQuantityTrue}
          helperText={error.quantityError}
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
          error={error.isPriceTrue}
          helperText={error.priceError}
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
          error={error.isDiscountPriceTrue}
          helperText={error.discountPriceError}
        ></TextField>
      </FormControl>
        <Button onClick={onSubmit} variant="contained" sx={{backgroundColor:'#A03037','&:hover':{backgroundColor:'#A03037'},my:2}}>{location.includes('edit')? 'Update Product' : 'Add Book'}</Button>
    </Box>
  );
}

export default EditBook;
