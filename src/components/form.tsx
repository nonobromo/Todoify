import { FormEvent } from "react";
import { TodoCategory, useTodos } from "../context/todosState-contex";
import Button from "./common/button";
import Input from "./common/input";
import Select from "./common/select";
import TextArea from "./common/textarea";

function Form() {
  const { dispatch } = useTodos();
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
    console.log(title);
    form.reset();
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
        <Input label="Title" id="title" name="title" type="text" />
        <TextArea id="description" label="Description" name="description" />
        <Select id="categories" name="categories" />
        <Button text="Submit" buttonType="btn btn-primary" />
      </form>
    </div>
  );
}

export default Form;
