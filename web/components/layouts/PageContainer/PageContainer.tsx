import { PageContainerProps } from "@core/types";
import Head from "next/head";

export const PageContainer = ({
  headTitle,
  center,
  children,
}: PageContainerProps) => {
  return (
    <>
      <Head>
        <title>{headTitle}</title>
      </Head>

      <div
        className={`w-screen min-h-screen flex flex-col ${
          center && "justify-center items-center"
        }`}
      >
        {children}
      </div>
    </>
  );
};
