import { SET_DATA, SET_FORM_DATA } from "./formTypes";

export function setFormData(data) {
  return {
    type: SET_FORM_DATA,
    data,
  };
}

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  };
}
