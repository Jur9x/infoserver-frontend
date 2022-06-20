import React from "react";
import { Container, Row} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { TEAMS } from "../utils/queries";
import { TymCard } from "../components/TymCard";
import './Hraci.css';

export default function Teams() {
  const { loading, error, data } = useQuery(TEAMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;
  const tms = data.teams.data;

  return (
    <Container fluid>
      <Row>
      {tms.map((tms) => (
        <TymCard
          id={tms.id}
          name={tms.attributes.jmeno}
          zkratka={tms.attributes.zkratka}
          logo={tms.attributes.logo.data.attributes.url}
          />
          ))}
          </Row>
    </Container>
  );
}