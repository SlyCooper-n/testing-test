import { LoginForm } from "@components/modules/";
import type { NextPage } from "next";
import { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <Toaster />

      <LoginForm />
    </div>
  );
};

export default Home;
