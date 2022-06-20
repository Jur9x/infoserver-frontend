import React from "react";
import { Container, Row} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { STADIONS } from "../utils/queries";
import { StadionCard } from "../components/StadionCard";
import './Hraci.css';

export default function Stadions() {
  const { loading, error, data } = useQuery(STADIONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const tms = data.stadions.data;

  return (
    <Container fluid>
      <Row>
      {tms.map((tms) => (
        <StadionCard
          id={tms.id}
          name={tms.attributes.jmeno}
          second={tms.attributes.kapacita}
          logo={tms.attributes.obrazek.data.attributes.url}
          />
          ))}
          </Row>
    </Container>
  );
}