import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  text: string;
  buttonType?:
    | "btn btn-primary"
    | "btn btn-secondary"
    | "btn btn-success"
    | "btn btn-danger"
    | "btn btn-warning"
    | "btn btn-info"
    | "btn btn-light"
    | "btn btn-dark"
    | "btn btn-outline-light"
    | "btn btn-outline-secondary";
} & ComponentPropsWithoutRef<"button">;

function Button({ text, buttonType, ...props }: ButtonProps) {
  return (
    <button className={`${buttonType} input`} {...props}>
      {text}
    </button>
  );
}

export default Button;
