import { ComponentPropsWithoutRef } from "react";

type SelectProps = {
  id: string;
  name: string;
  selectIems: string[];
  label?: string;
} & ComponentPropsWithoutRef<"select">;

function Select({ id, name, label, selectIems, ...props }: SelectProps) {
  return (
    <div className="d-flex flex-column input">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        defaultValue=""
        {...props}
        style={{ backgroundColor: "#FFF", border: "1px solid #1F2937" }}>
        <option value="" disabled hidden style={{ color: "#1F2937" }}>
          Select a category
        </option>
        {selectIems.map((category) => (
          <option key={category} value={category} style={{ color: "#1F2937" }}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
