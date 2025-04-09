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
          backgroundColor: "#f1f1f1",
          border: "2px solid #D1D5DB",
          padding: "5px",
        }}
      />
    </div>
  );
}

export default Input;
