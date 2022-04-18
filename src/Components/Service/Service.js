import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <Card className="bg-dark text-white">
                <Card.Img className='image' src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <button onClick={() => navigateToServiceDetail(id)} id='border' className='btn btn-link text-white text-decoration-none'>BOOK NOW</button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Service;