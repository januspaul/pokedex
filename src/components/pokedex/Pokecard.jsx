import { Card, Button } from "react-bootstrap";

const PokemonCard = ({ number, name, image }) => {
  const handleCard = (name) => {
    window.location.href = `/pokemon/${name}`;
  };

  const capitalizeFirstLetter = (name) => {
    // converting first letter to uppercase
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <Card className="content-card" onClick={() => handleCard(name)}>
      <Card.Img src={image} alt={name} className="img-card" />
      <Card.Body>
        <Card.Title className="name-card">{capitalizeFirstLetter(name)}</Card.Title>
        <Card.Text className="number-card">#{number}</Card.Text>
        <Button variant="primary" onClick={() => handleCard(name)}>
          View Pokémon
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
