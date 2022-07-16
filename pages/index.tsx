import { PageContainer } from "@components/layouts";
import { LoginForm } from "@components/modules/";
import { FormContextProvider } from "@core/contexts";
import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";

const Login: NextPage = () => {
  return (
    <PageContainer headTitle="TestingTest | Login" center>
      <Toaster />

      <FormContextProvider>
        <LoginForm />
      </FormContextProvider>
    </PageContainer>
  );
};

export default Login;
