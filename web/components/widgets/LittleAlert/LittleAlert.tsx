import { LittleAlertProps } from "@core/types/props";

export const LittleAlert = ({ message }: LittleAlertProps) => {
  return (
    <span className="alert alert-sm bg-error text-error-content">
      {message}
    </span>
  );
};
