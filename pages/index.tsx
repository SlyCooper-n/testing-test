import { LoginForm } from "@components/modules/";
import { FormContextProvider } from "@core/contexts";
import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";

const Login: NextPage = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <Toaster />

      <FormContextProvider>
        <LoginForm />
      </FormContextProvider>
    </div>
  );
};

export default Login;
