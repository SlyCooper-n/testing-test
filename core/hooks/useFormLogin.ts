import { useContext } from "react";
import { FormContext } from "../contexts";

export const useFormLogin = () => {
  return useContext(FormContext);
};
