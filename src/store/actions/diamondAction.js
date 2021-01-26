import { diamondsService } from "../../services/diamondsService";


export function loadDiamonds() {
  return async (dispatch) => {
    try {
      const diamonds = await diamondsService.query();
      dispatch({ type: "SET_DIAMONDS", diamonds });
    } catch (err) {
      console.log(`ERROR: while loading diamonds`);
    }
  };
}