import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Book from '../../Images/Book.png';
import './BookCard.css';
import StarIcon from '@mui/icons-material/Star';

function BookCard({item}) {
    return (
        <Card sx={{ minWidth:235,maxWidth: 235}}>
            <CardActionArea>
            <CardContent sx={{backgroundColor:'#F5F5F5'}}>
                <CardMedia
                    component="img"
                    height="135px"
                    src={Book}
                    alt="Book"
                    sx={{objectFit:'contain',backgroundColor:'#F5F5F5'}}
                />
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="span" component="div" sx={{fontSize:'14px'}}>
                    {item.bookName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
                    {item.author}
                </Typography>
                <Typography variant="span" color="text.secondary" component="div" sx={{display:'flex',alignItems:'flex-start',my:1}}>
                    <span className='rating'>
                        4.5
                        <StarIcon fontSize='sm'/>
                    </span>
                    <span className='rating-number'>
                        (20)
                    </span>
                </Typography>
                <Typography variant="span" color="text.secondary" component="div" sx={{display:'flex',alignItems:'flex-start',my:1}}>
                    <span className='price'>
                       Rs. {item.price}
                    </span>
                    <span className='discount-price'>
                        Rs. {item.discountPrice}
                    </span>
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default BookCard