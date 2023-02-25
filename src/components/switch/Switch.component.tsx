import React, { InputHTMLAttributes } from "react";

type SwitchProps = {
  id: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Switch({
  id,
  className,
  ...inputProps
}: SwitchProps): JSX.Element {
  return (
    <div className={className}>
      <input {...inputProps} id={id} type="checkbox" />
      <label htmlFor={id} />
    </div>
  );
}
