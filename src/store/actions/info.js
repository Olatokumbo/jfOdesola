import { firestore } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const fetchInfo = () => {
  return (dispatch) => {
    firestore
      .collection("info")
      .doc("about")
      .get()
      .then((snapshot) => {
        dispatch({ type: actionTypes.FETCH_INFO, info: snapshot.data() });
      })
      .then(() => {
        // dispatch({ type: actionTypes.LIST_CITIES, cities });
      });
  };
};
