import React from "react";
import { Col, Figure } from "react-bootstrap";

export const TymCard = (props) => {
  const {name, zkratka, logo } = props;
  return (
    <>
    <Col xs={4} md={4}>    
    <Col>
        {logo && (
            <Figure.Image
              src={`http://localhost:1337${logo}`}
              className='img-fluid'
              width='200'
            />
        )}
      </Col>
      <Col>
      <h4>
          <b>{name} ({zkratka})</b>
        </h4>
      </Col></Col>
      </>
  );
};