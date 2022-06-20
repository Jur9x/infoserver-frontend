import React from "react";
import { HOMEPAGE } from "./../utils/queries";
import { useQuery } from "@apollo/client";
import { Container, Row, Col, Figure} from "react-bootstrap";
import './Homepage.css';

export default function Homepage() {
  const { loading, error, data } = useQuery(HOMEPAGE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const homepage = data.homepage.data.attributes;
    return (
      <>
        <Container>
          <Row xs={1} sm={1} md={2} lg={2}>
            <Col>
              <a href="/hraci" className="nadpis">{homepage.nadpis1}</a>
              <Col>
                {homepage.clanek1}
              </Col>
              <br></br>
              <Col>
                {homepage.picture1 && (
                  <Figure>
                    <Figure.Image
                      src={`${process.env.REACT_APP_BACKEND_URL}${homepage.picture1.data.attributes.url}`}
                    />
                  </Figure>
                )}
                </Col>
                </Col>
              <Col>
                <a href="/tymy" className="nadpis">{homepage.nadpis2}</a>
                <Col>
                  {homepage.clanek2}
                </Col>
                <br></br>
                <Col>
                  {homepage.picture2 && (
                    <Figure>
                      {/* ... použije se spojení adresy webu s cestou k danému obrázku, která je uložena v databázi backendu. */}
                      <Figure.Image
                        src={`${process.env.REACT_APP_BACKEND_URL}${homepage.picture2.data.attributes.url}`}
                        rounded
                      />
                    </Figure>
                  )}
                </Col>
                </Col>
              </Row>
              <Row xs={1} sm={1} md={2} lg={2}>
            <Col>
              <a href="/souteze" className="nadpis">{homepage.nadpis3}</a>
              <Col>
                {homepage.clanek3}
              </Col>
              <br></br>
              <Col>
                {homepage.picture3 && (
                  <Figure>
                    {/* ... použije se spojení adresy webu s cestou k danému obrázku, která je uložena v databázi backendu. */}
                    <Figure.Image
                      src={`${process.env.REACT_APP_BACKEND_URL}${homepage.picture3.data.attributes.url}`}
                      rounded
                    />
                  </Figure>
                )}
              </Col>
            </Col>
              </Row>
            </Container>
          </>
          );
  }