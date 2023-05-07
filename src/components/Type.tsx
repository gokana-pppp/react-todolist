import React, { ChangeEvent } from "react";

export type Todo = {
  id: number;
  contents: string;
  status: "作業中" | "完了";
};

export type Props = {
  text: string;
  textRef: React.MutableRefObject<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
};
