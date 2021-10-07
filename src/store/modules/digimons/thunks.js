import axios from "axios";

import { addDigimon } from "./actions";

export const addDigimonsThunk = (digimon, setError) => (dispatch) => {
  console.log(digimon);
  axios
    .get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
    .then((response) => {
      console.log(response.data[0]);
      dispatch(addDigimon(response.data[0]));
    })
    .catch((error) => {
      alert(error.message);
    });
};
