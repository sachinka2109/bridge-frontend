import {
  Box,
  Divider,
  Grid,
  Typography,
  Button,
  FormGroup,
  Breadcrumbs,
  Skeleton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Book from "../../Images/Book.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FormControl, Rating } from "@mui/material";
import { TextareaAutosize } from "@mui/base";
import {
  addCartItem,
  addFeedback,
  getBooks,
  getCartItems,
  getFeedback,
  postWishList,
} from "../../services/dataService";
import { useNavigate, useParams } from "react-router-dom";
import QuantityComponent from "../quantity-component/QuantityComponent";
import { connect, useDispatch } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditBook from "../edit-book/EditBook";
import { deleteProduct } from "../../services/adminDataService";

function BookDetails() {
  const [book, setBook] = useState({});
  const [giveFeedback,setGiveFeedback] = useState({
    comment:"",
    rating:0
  });
  const [feedback,setFeedback] = useState([]);
  const [bookIndex, setBookIndex] = useState(1);
  const [addCart, setAddCart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rating,setRating] = useState(0);
  const [cartItem, setCartItem] = useState({});
  const dispatch = useDispatch();
  const location = window.location.href;
  const navigate = useNavigate();
  let filteredItem;
  let totalRating;
  let averageRating;
  let { id } = useParams();
  const addToCart = async () => {
    await addCartItem(id);
    getCartItem();
  };

  const addToWishList = async () => {
    await postWishList(id);
    getCartItem();
  };
  const deleteBook = async () => {
    let response = await deleteProduct(id);
    if (response) {
      navigate("/admin/products");
    }
  };

  const getCartItem = async () => {
    let response = await getCartItems();
    const arr = response.data.result;
    dispatch({ type: "GET_CART_ITEMS", payload: arr });
    // console.log(arr);
    filteredItem = arr.find((item) => item.product_id._id === id);
    setCartItem(filteredItem);
    if (filteredItem) {
      setAddCart(true);
    } else {
      setAddCart(false);
    }
  };

  const getSingleBook = async () => {
    try {
      let response = await getBooks();
      const data = response.data.result;
      let filteredData = data.find((item, index) => {
        item._id === id ? setBookIndex(index+1) : setBookIndex(1);
        return item._id === id;
      });
      setBook(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  // const getBookFeedback = async() => {
  //   let response = await getFeedback(id)
  //   setFeedback(response.data.result,
  //     totalRating = feedback.reduce((acc, item) => acc + item.rating, 0),
  //     averageRating = totalRating / feedback.length,
  //     setRating(averageRating)
  //   );
  // }

  const getBookFeedback = async () => {
    let response = await getFeedback(id);
    const feedbackData = response.data.result;
    totalRating = feedbackData.reduce((acc, item) => acc + item.rating, 0);
    averageRating = feedbackData.length > 0 ? totalRating / feedbackData.length : 0;
    setFeedback(feedbackData);
    setRating(averageRating.toFixed(1));
  };

  const handleGiveRating = (e,newRating) => {
    setGiveFeedback({
      ...giveFeedback,
      rating: newRating
    })
  }

  const handleGiveFeedback = (e) => {
    setGiveFeedback({
      ...giveFeedback,
      [e.target.id]: e.target.value
    })
  }

  const onSubmitFeedback = async() => {
    let response = await addFeedback(id,giveFeedback);
    console.log(response);
    getBookFeedback();
  }


  useEffect(() => {
    setLoading(true);
    getSingleBook().then(() => {
      setLoading(false);
    })
    getBookFeedback();
  }, []);

  useEffect(() => {
    if (!location.includes("admin")) {
      getCartItem();
    }
  }, []);

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb" sx={{ mx: "11%", my: 2 }}>
        <Link to="/" sx={{ textDecoration: "none", color: "#9D9D9D" }}>
          Home
        </Link>
        <Typography color="text.primary">Books({(bookIndex < 9 ? `0${bookIndex}`:bookIndex)})</Typography>
      </Breadcrumbs>
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "flex-start" }}
      >
        <Grid item sx={{ display: "flex", flexDirection: "column", mx: 5 }}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="rectangle"
              width={284}
              height={367}
            />
          ) : (
            <Typography
              component={"div"}
              sx={{ border: "1px solid #D1D1D1", px: 3, py: 2 }}
            >
              <img src={Book} alt="Book" style={{ height: 367 }} />
            </Typography>
          )}
          {loading ? (
            <></>
          ) : (
            <>
              {location.includes("admin") ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 3,
                  }}
                >
                  {!location.includes("edit") ? (
                    <>
                      <Link
                        to={`/admin/book-details/${id}?edit=true`}
                        style={{ marginRight: "20px", flexGrow: 1 }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#A03037",
                            "&:hover": { backgroundColor: "#A03037" },
                          }}
                          fullWidth
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="contained"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          flexGrow: 1,
                          backgroundColor: "#333333",
                          "&:hover": { backgroundColor: "#333333" },
                        }}
                        onClick={deleteBook}
                      >
                        <DeleteIcon
                          style={{ fontSize: 17, margin: "0px 4px" }}
                        />
                        Delete
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    my: 3,
                  }}
                >
                  {!addCart && (
                    <Button
                      variant="contained"
                      sx={{
                        flexGrow: 1,
                        marginRight: "20px",
                        backgroundColor: "#A03037",
                        "&:hover": { backgroundColor: "#A03037" },
                      }}
                      onClick={addToCart}
                    >
                      Add to bag
                    </Button>
                  )}
                  {(addCart || filteredItem) && (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexGrow: 1,
                      }}
                    >
                      <QuantityComponent
                        item={cartItem}
                        setAddCart={setAddCart}
                        getCartItem={getCartItem}
                      />
                    </Box>
                  )}
                  <Button
                    variant="contained"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      flexGrow: 1,
                      backgroundColor: "#333333",
                      "&:hover": { backgroundColor: "#333333" },
                    }}
                    onClick={addToWishList}
                  >
                    <FavoriteIcon style={{ fontSize: 17, margin: "0px 4px" }} />
                    Wishlist
                  </Button>
                </Box>
              )}
            </>
          )}
        </Grid>
        {location.includes("edit") ? (
          <Grid item sx={{ px: { xs: 2, sm: 5 } }} xs={12} sm={8} md={6}>
            <EditBook item={book} getSingleBook={getSingleBook} />
          </Grid>
        ) : (
          <Grid item sx={{ px: { xs: 2, sm: 5 } }} xs={12} sm={8} md={6}>
            <Box>
              <Typography component="div" variant="h4" color="initial">
                {loading ? <Skeleton /> : `${book.bookName}`}
              </Typography>
              <Typography
                variant="h6"
                color="initial"
                sx={{ color: "#878787" }}
                component="div"
              >
                {loading ? <Skeleton /> : `${book.author}`}
              </Typography>
              <Typography
                variant="span"
                color="text.secondary"
                component="div"
                sx={{ display: "flex", alignItems: "center", my: 1 }}
              >
                {loading ? (
                  <Skeleton width={100} />
                ) : (
                  <>
                    <Typography
                      sx={{
                        display:'flex',
                        alignItems:'center',
                        backgroundColor: rating >3.5 ? "#388E3C" : rating >2.0 ? "orange" : rating <=2.0? "lightcoral": "",
                        color: "white",
                        px: 1,
                      }}
                      component="div"
                    >
                      {rating}
                      <StarIcon fontSize="sm" />
                    </Typography>
                    <Typography
                      sx={{ color: "#878787", fontSize: 15, px: 1 }}
                      component="div"
                    >
                      ({feedback.length})
                    </Typography>
                  </>
                )}
              </Typography>
              <Typography
                variant="span"
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  my: 1,
                  color: "#0A0102",
                  fontWeight: "bold",
                }}
              >
                <Typography sx={{ fontSize: 30 }} component="div">
                  {loading ? <Skeleton width={80} /> : `Rs. ${book.discountPrice}`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    textDecoration: "line-through",
                    color: "#878787",
                    px: 1,
                  }}
                  component="div"
                >
                  {loading ? (
                    <Skeleton width={80} variant="rectangle" />
                  ) : (
                    `Rs.${book.price}`
                  )}
                </Typography>
              </Typography>
            </Box>
            <Divider sx={{ color: "#9D9D9D" }}></Divider>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 15, color: "#878787" }}
              component={"div"}
            >
              <ul style={{ padding: "15px" }}>
                <li>Book Detail</li>
                <Typography
                  variant="body2"
                  sx={{ color: "#373434", fontSize: 12 }}
                  component="div"
                >
                  {loading ? (
                    <>
                      <Skeleton width={"100%"} />
                      <Skeleton width={"100%"} />
                    </>
                  ) : (
                    `${book.description}`
                  )}
                </Typography>
              </ul>
            </Typography>
            <Divider sx={{ color: "#9D9D9D" }}></Divider>
            {!location.includes("admin") && (
              <>
                <Box>
                  <Typography variant="body2" sx={{ fontSize: 18, my: 2 }}>
                    Customer Feedback
                  </Typography>
                  <FormGroup sx={{ backgroundColor: "#F5F5F5", p: 2 }}>
                    <FormControl>
                      <label
                        style={{
                          fontSize: 12,
                          color: "#0A0102",
                          margin: "5px 0",
                        }}
                      >
                        Overall rating
                      </label>
                      <Rating name="half-rating" id="rating" value={giveFeedback.rating} onChange={handleGiveRating}/>
                      <TextareaAutosize
                        id="comment"
                        minRows={3}
                        placeholder="Write Your Review"
                        style={{ border: "none", marginTop: "10px" }}
                        value={giveFeedback.comment}
                        onChange={handleGiveFeedback}
                      />
                    </FormControl>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        textTransform: "none",
                        width: "20%",
                        alignSelf: "end",
                        my: 1,
                      }}
                      disabled={loading}
                      onClick={onSubmitFeedback}
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Box>
                <Box>
                  {feedback.map(item => (
                  <Grid
                    container
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      px: 1,
                      py: 2,
                    }}
                    key={item._id}
                  >
                    <Grid item sx={{ display: "flex" }}>
                      <Grid item>
                        {loading ? (
                          <Skeleton variant="circular" width={30} height={30} />
                        ) : (
                          <AccountCircleIcon fontSize="large" />
                        )}
                      </Grid>
                      <Grid item sx={{ paddingLeft: 1 }}>
                        <Typography variant="body1" color="initial">
                          {loading ? (
                            <Skeleton width={80} />
                          ) : (
                            `${item.user_id.fullName}`
                          )}
                        </Typography>
                        {loading ? "" : <Rating name="half-rating" readOnly value={item.rating}/>}
                      </Grid>
                    </Grid>
                    <Grid item sx={{ paddingLeft: 5 }}>
                      <Typography variant="body1" color="initial">
                        {loading ? (
                          <>
                            <Skeleton width={"100%"} />
                            <Skeleton width={"30%"} />
                          </>
                        ) : (
                          `${item.comment}`
                        )}
                      </Typography>
                    </Grid>
                  </Grid>
                  ))}
                </Box>
              </>
            )}
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default connect()(BookDetails);
