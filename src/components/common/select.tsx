import { ComponentPropsWithoutRef } from "react";

type SelectProps = {
  id: string;
  name: string; // Add name prop
} & ComponentPropsWithoutRef<"select">;

const categories = ["Home", "Work", "Shopping", "Outdoor", "Other"];

function Select({ id, name, ...props }: SelectProps) {
  return (
    <div className="d-flex flex-column input">
      <label htmlFor={id}>Category</label>
      <select id={id} name={name} defaultValue="" {...props}>
        <option value="" disabled hidden>
          Select a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
