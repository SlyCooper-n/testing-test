interface InputBoxWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelFor: string;
  invalidValue: boolean;
}

export const InputBoxWithLabel = ({
  label,
  labelFor,
  type,
  required,
  value,
  onChange,
  invalidValue,
  onInvalid,
}: InputBoxWithLabelProps) => {
  return (
    <>
      <label htmlFor={labelFor} className="label-text">
        {label}
      </label>
      <input
        type={type}
        id={labelFor}
        required={required}
        value={value}
        onChange={onChange}
        onInvalid={onInvalid}
        className={`input bg-slate-200 text-neutral focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary ${
          invalidValue &&
          "invalid:ring-2 invalid:ring-offset-2 invalid:ring-offset-error invalid:ring-error"
        }`}
      />
    </>
  );
};
