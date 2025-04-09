import { useRef, useState } from "react";
import {
  useTodos,
  type Todo as TodoType,
} from "../../context/todosState-contex";

type Props = {
  todo: TodoType;
};

function Todo({ todo }: Props) {
  const { category, complete, date, description, id, title } = todo;
  const { dispatch } = useTodos();
  const [edit, setEdit] = useState<boolean>(false);
  const titleEdit = useRef<HTMLInputElement>(null);
  const descriptionEdit = useRef<HTMLTextAreaElement>(null);
  function deleteTodo() {
    dispatch({ type: "REMOVE_TODO", payload: { id: id } });
  }

  function finishTodo() {
    dispatch({ type: "COMPLETE_TODO", payload: { id: id } });
  }

  function editTodo() {
    const entertedTitle = titleEdit.current!.value
      ? titleEdit.current!.value
      : title;
    const entertedDescription = descriptionEdit.current!.value
      ? descriptionEdit.current!.value
      : description;

    dispatch({
      type: "EDIT_TODO",
      payload: {
        id: id,
        title: entertedTitle,
        description: entertedDescription,
      },
    });
    setEdit((perv) => !perv);
  }

  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header">Category: {category}</div>
      <div className="card-body d-flex flex-column gap-2">
        <span>Created at: {date}</span>
        {edit ? (
          <input type="text" ref={titleEdit} defaultValue={title} />
        ) : (
          <h5 className="card-title">Title: {title}</h5>
        )}
        {edit ? (
          <textarea ref={descriptionEdit} defaultValue={description}></textarea>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="card-actions d-flex justify-content-between align-items-center border-top p-3">
        <div className="d-flex gap-2 ms-2">
          <i
            className="bi bi-trash-fill text-danger fs-3"
            onClick={deleteTodo}></i>
          <i
            className="bi bi-pencil-square fs-3"
            onClick={() => setEdit((perv) => !perv)}></i>
        </div>
        <div className="d-flex me-3 btn-group">
          <div className="form-check">
            {edit ? (
              <>
                <i
                  className="bi bi-check2 text-success fs-2"
                  onClick={editTodo}></i>
                <i
                  className="bi bi-x text-danger fs-2"
                  onClick={() => setEdit((perv) => !perv)}></i>
              </>
            ) : (
              <input
                type="checkbox"
                className="form-check-input"
                checked={complete}
                onChange={finishTodo}
                style={{
                  width: "30px",
                  height: "30px",
                  border: "2px solid #0D6EFD",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
