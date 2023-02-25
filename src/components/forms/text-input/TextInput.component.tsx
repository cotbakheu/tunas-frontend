import React, {
  ChangeEventHandler,
  FormEventHandler,
  FC,
  SVGProps,
} from "react";

// Component Imports
import { Label, TextInput } from "flowbite-react";

export type CustomTextInputProps = {
  id?: string;
  value?: string;
  type?: "email" | "password" | "text";
  label?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  onChange?: ChangeEventHandler;
  onBlur?: FormEventHandler;
  containerClass?: string;
  placeholder?: string;
  errorText?: string;
};

const CustomTextInput = ({
  id,
  type = "text",
  icon,
  onChange,
  onBlur,
  label,
  containerClass,
  placeholder,
  value,
  errorText,
}: CustomTextInputProps) => {
  return (
    <div className={containerClass}>
      <div className="mb-2 block">
        <Label htmlFor={id} value={label} />
      </div>
      <TextInput
        id={id}
        className={"border-error-500"}
        value={value}
        placeholder={placeholder}
        type={type}
        icon={icon}
        onChange={onChange}
        onBlur={onBlur}
        color={errorText ? "failure" : undefined}
        helperText={
          <>
            <p className="text-xs">{errorText || ""}</p>
          </>
        }
      />
    </div>
  );
};

export default CustomTextInput;
