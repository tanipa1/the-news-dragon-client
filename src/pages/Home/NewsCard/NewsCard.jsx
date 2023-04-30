import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;

    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image height={40} width={40} src={author?.img} roundedCircle />
                    <div className='ms-3 flex-grow-1'>
                        <p className='m-0'>{author?.name}</p>
                        <p className='m-0'> {moment(author?.published_date).format('yyyy-MM-D')}</p>
                    </div>

                    <div>
                        <FaRegBookmark className='me-3' />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} className=''>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar className='text-warning' />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar className='text-warning' />}
                        ></Rating>
                        <span>  {rating?.number}</span>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                        <FaRegEye /> {total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;