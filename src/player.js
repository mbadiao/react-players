import React from "react";
import Card from "react-bootstrap/Card";
const Player = ({ name, team, nationality, age, Image }) => {
  return (
    <Card style={{ width: "18rem", margin:'3rem'}}>
      <Card.Body>
        <Card.Img variant="top" src={Image} className="rounded"/>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
