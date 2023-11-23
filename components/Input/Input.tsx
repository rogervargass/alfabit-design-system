export type InputProps = {
  label?: string;
  multiline?: boolean;
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = ({ multiline, ...rest }: InputProps) => {
  if (multiline) {
    return (
      <textarea
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }
  return <input {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />;
};

const Input = ({ label, className, ...rest }: InputProps) => {
  return (
    <div className="relative">
      {label && <label className="absolute pt-1 pl-3 text-xs">{label}</label>}
      <InputOrTextArea
        className={`
        bg-dark text-gray-primary rounded-md p-3
        disabled:bg-disabled disabled:border-2 disabled:border-disabled
        ${label && "pt-5"}
        ${className}
      `}
        {...rest}
      />
    </div>
  );
};

export default Input;
