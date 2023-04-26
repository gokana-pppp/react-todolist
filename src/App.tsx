import React from "react";
import { RadioBtn } from "./components/RadioBtn";
import { Memo } from "./components/Memo";

export const App = () => {
  return (
    <div>
      <h1>ToDo リスト</h1>
      <RadioBtn />
      <Memo />
    </div>
  );
};
