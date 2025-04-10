import { FormEvent } from "react";
import { TodoCategory, useTodos } from "../context/todosState-contex";
import Button from "./common/button";
import Input from "./common/input";
import Select from "./common/select";
import TextArea from "./common/textarea";
import { useNavigate } from "react-router-dom";

function Form() {
  const { dispatch } = useTodos();
  const navigate = useNavigate();
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const formData = new FormData(form);

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("categories") as TodoCategory;

    if (!title || !category) {
      alert("Please fill out all fields.");
      return;
    }

    dispatch({
      type: "ADD_TODO",
      payload: {
        title: title,
        description: description,
        category: category,
        complete: false,
        id: crypto.randomUUID(),
        date: new Date().toLocaleDateString(),
      },
    });
    form.reset();
    navigate("/todos");
  }

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="container d-flex flex-column align-items-center gap-4 mt-3"
      >
        <Input label="Title" id="title" name="title" type="text" />
        <TextArea id="description" label="Description" name="description" />
        <Select id="categories" name="categories" label="Category" />
        <Button
          text="Submit"
          style={{
            backgroundColor: "#1E90FF",
            color: "#F0F6FC",
            border: "none",
          }}
        />
      </form>
    </div>
  );
}

export default Form;
