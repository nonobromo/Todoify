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
          backgroundColor: "#FEEC37",
          border: "none",
          borderBottom: "5px solid #FFB200",
          resize: "none",
        }}></textarea>
    </div>
  );
}

export default TextArea;
