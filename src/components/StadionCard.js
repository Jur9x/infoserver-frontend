import React from "react";
import { Col, Figure } from "react-bootstrap";

export const StadionCard = (props) => {
  const {name, second, logo } = props;
  return (
    <>
    <Col xs={4} md={4}>    
    <Col>
        {logo && (
            <Figure.Image
              src={`http://localhost:1337${logo}`}
              className='img-fluid rounded'
              width='400'
            />
        )}
      </Col>
      <Col>
      <h4>
          <b>{name} ({second} míst)</b>
        </h4>
      </Col></Col>
      </>
  );
};