// todoList[]を表示する　newTodo{}を追加する

import React, { ChangeEvent, useRef, useState } from "react";
import { Todo } from "./Type";

const WORK_ON_PROGRESS = "作業中";
const DONE = "完了";

export const Memo: React.FC<{}> = (): any => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoList: Todo[] = [...todos];

  const textRef = useRef<HTMLInputElement>(null!);

  const addTodo = () => {
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

  const deleteTodo = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const displayTodo = (): JSX.Element => {
    const list = todoList.map((todo) => {
      return (
        <>
          {" "}
          <tr>
            <th>{todo.id}</th>
            <th>{todo.contents}</th>
            <th>
              <button>作業中</button>
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
        </>
      );
    });
    return <tbody>{list}</tbody>;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
            <th></th>
          </tr>
        </thead>
        {displayTodo()}
      </table>
      <div>
        <h2>新規タスクの追加</h2>
        <div>
          <input
            type="text"
            value={text}
            ref={textRef}
            onChange={onChangeText}
          />
          <button onClick={addTodo}>追加</button>
        </div>
      </div>
    </>
  );
};
