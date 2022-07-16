import { FormContext } from "@core/contexts";
import { useContext } from "react";

export const useFormLogin = () => {
  return useContext(FormContext);
};
