import { ReactNode } from "react";

export interface PageContainerProps {
  headTitle?: string;
  center?: boolean;
  children: ReactNode | ReactNode[];
}
