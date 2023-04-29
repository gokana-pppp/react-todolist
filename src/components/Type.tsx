import React from "react";

export type Todo = {
  id: number;
  contents: string;
  status: "作業中" | "完了";
};
