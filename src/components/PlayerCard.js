import React from "react";
import { Col, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import './PlayerCard.css';

export const PlayerCard = (props) => {
  const {name, photo } = props;
  return (
    <>
    <Col className="karta" xs={4} md={4}>    <Col>
        {photo && (
          <Link key={props.id} className="a" to={`/hraci/${props.id}`}>
            <Figure.Image
              src={`http://localhost:1337${photo}`}
              className='img-fluid rounded-circle'
              width='100'
            />
            </Link> 
        )}
      </Col>
      <Col>
      <h4>
      <Link className="a" to={`/hraci/${props.id}`}>
          <b>{name}</b>
          </Link> 
        </h4>
      </Col></Col>
      </>
  );
};