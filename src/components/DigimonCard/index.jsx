import { Container } from "./style";
const DigimonCard = ({ digimon }) => {
  return (
    <Container>
      <h3>{digimon.name}</h3>
      <img src={digimon.img} alt={digimon.name} />
      <p>Level: {digimon.level}</p>
    </Container>
  );
};
export default DigimonCard;
