import { setData } from "./formMutations";

export function sendOfferData(values) {
  return (dispatch) => {
    new Promise((resolve) => {
      setTimeout(() => resolve({ data: 42 }), 1500);
    }).then((res) => {
      dispatch(setData(res.data));
    });
  };
}
