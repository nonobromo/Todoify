import { ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

function Input({ label, id, ...props }: InputProps) {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        className="input"
        style={{
          backgroundColor: "#FFF085",
          border: "none",
          borderBottom: "4px solid #FFB200",
          padding: "5px",
        }}
      />
    </div>
  );
}

export default Input;
