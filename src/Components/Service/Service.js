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
            {/* <img className='w-100 p-2 border-2' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {name}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-dark'>Book: {name}</button> */}
            <Card className="bg-dark text-white">
                <Card.Img className='image' src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <button onClick={() => navigateToServiceDetail(id)} className='btn btn-link text-white text-decoration-none'>Book: {name}</button>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Service;