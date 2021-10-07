import { useSelector } from "react-redux";
import { Container } from "./style";
import DigimonCard from "../DigimonCard";
const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  console.log(digimons);
  return (
    <Container>
      <ul>
        {digimons.map((item, index) => {
          return (
            <li key={index}>
              <DigimonCard digimon={item}></DigimonCard>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
export default Digimons;
