import React, { ChangeEvent, useRef, useState } from "react";
import { Todo } from "./Type";
import { InputText } from "./InputText";

const WORK_ON_PROGRESS = "作業中";
const DONE = "完了";

export const Memo: React.FC<{}> = (): any => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [radio, setRadio] = useState("all");

  const textRef = useRef<HTMLInputElement>(null!);

  const addTodo = () => {
    if (text === "") return;
    const date = new Date();
    const createdDate: number = date.getTime();
    const newTodo: Todo = {
      id: createdDate,
      contents: textRef.current.value,
      status: WORK_ON_PROGRESS,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
  };

  const onChangeRadioBtn = (e: ChangeEvent<HTMLInputElement>): void => {
    setRadio(e.target.value);
  };

  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === WORK_ON_PROGRESS ? DONE : WORK_ON_PROGRESS,
          };
        }
        return todo;
      })
    );
  };

  const switchTodos = (): Todo[] => {
    if (radio === "WORK_ON_PROGRESS") {
      return todos.filter((todo) => todo.status === WORK_ON_PROGRESS);
    } else if (radio === "DONE") {
      return todos.filter((todo) => todo.status === DONE);
    }
    return todos;
  };

  return (
    <>
      <input
        type="radio"
        name="status"
        value="all"
        onChange={onChangeRadioBtn}
        checked={radio === "all"}
      />
      すべて
      <input
        type="radio"
        name="status"
        value="WORK_ON_PROGRESS"
        checked={radio === "WORK_ON_PROGRESS"}
        onChange={onChangeRadioBtn}
      />
      作業中
      <input
        type="radio"
        name="status"
        value="DONE"
        checked={radio === "DONE"}
        onChange={onChangeRadioBtn}
      />
      完了
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
            <th></th>
          </tr>
        </thead>
        {switchTodos().map((todo) => {
          return (
            <tbody>
              <tr>
                <th>{todo.id}</th>
                <th>{todo.contents}</th>
                <th>
                  <button onClick={() => changeStatus(todo.id)}>
                    {todo.status}
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    削除
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div>
        <InputText
          text={text}
          onChange={onChangeText}
          textRef={textRef}
          onClick={() => addTodo()}
        />
      </div>
    </>
  );
};
