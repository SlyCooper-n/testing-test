import { LoginForm } from "@components/modules/";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <LoginForm />
    </div>
  );
};

export default Home;
