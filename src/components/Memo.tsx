// todoList[]を表示する　newTodo{}を追加する

import React, { ChangeEvent, useState } from "react";
import { Todo, TodoList } from "./Type";

const WORK_ON_PROGRESS = "作業中";
const DONE = "完了";

export const Memo: React.FC<{}> = (): any => {
  const [text, setText] = useState<string>("");
  const [todos, setTodo] = useState<Todo[]>([]);

  const todoList: TodoList = [...todos];

  const textRef = React.createRef<HTMLInputElement>();

  const addTodo = () => {
    if (textRef["current"] !== null) {
      const date: Date = new Date();
      const createdDate: number = date.getTime();
      const newTodo: Todo = {
        id: createdDate,
        contents: textRef["current"].value,
        status: WORK_ON_PROGRESS,
      };
      todoList.push(newTodo);
      setTodo(todoList);
      setText("");
    }
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(() => e.target.value);
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
              <button>削除</button>
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
