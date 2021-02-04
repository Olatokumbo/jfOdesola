import { firestore } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";
export const fetchInfo = () => {
  return (dispatch) => {
    console.log("Here");
    firestore
      .collection("info")
      .doc("about")
      .get()
      .then((snapshot) => {
        dispatch({ type: actionTypes.FETCH_INFO, info: snapshot.data() });
      })
      .catch((err)=>{
        alert(err.message)
      })
  };
};
