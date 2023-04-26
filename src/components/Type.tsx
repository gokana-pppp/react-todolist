import React from "react";

export type Todo = {
  id: number;
  contents: string | null;
  status: "作業中" | "完了";
};

export type TodoList = Todo[];
