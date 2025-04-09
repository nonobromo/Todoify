import { ComponentPropsWithoutRef } from "react";

type TextAreaProps = {
  label: string;
  id: string;
  rows?: number;
} & ComponentPropsWithoutRef<"textarea">;

function TextArea({ label, id, rows = 3, ...props }: TextAreaProps) {
  return (
    <div className="d-flex flex-column input">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        rows={rows}
        {...props}
        style={{
          backgroundColor: "#f1f1f1",
          border: "2px solid #D1D5DB",
          resize: "none",
        }}></textarea>
    </div>
  );
}

export default TextArea;
