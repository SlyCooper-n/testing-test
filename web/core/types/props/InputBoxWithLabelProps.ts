export interface InputBoxWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelFor: string;
  invalidValue: boolean;
}
