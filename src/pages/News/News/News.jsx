import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const [news, setNews] = useState({});

    const { newsid } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/news/${newsid}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [newsid])

    return (
        <div>
            <Card>
                <Card.Img className='p-3' variant="top" src={news.image_url} />
                <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>
                        {news.details}
                    </Card.Text>
                    <Link to={`/category/${news.category_id}`}><Button variant="danger"><FaArrowLeft /> All news in this category</Button></Link>
                </Card.Body>
            </Card>

            <div className='mt-5'>
                <EditorsInsight></EditorsInsight>
            </div>
        </div>
    );
};

export default News;