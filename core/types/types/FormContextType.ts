import { FormEvent } from "react";

export type FormContextType = {
  formValues: {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
  };
  invalid: {
    email: boolean;
    password: boolean;
    confirmPw: boolean;
  };
  handle: {
    invalidEmail: (e: FormEvent) => void;
    invalidPassword: (e: FormEvent) => void;
    invalidConfirmPw: (e: FormEvent) => void;
    validation: () => void;
    submit: (e: FormEvent) => void;
  };
};
