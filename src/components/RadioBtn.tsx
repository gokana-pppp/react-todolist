import React from "react";

//ひとまず、3つのradioボタンは存在してるだけ。
export const RadioBtn = (): JSX.Element => {
  return (
    <>
      <input type="radio" checked />
      すべて
      <input type="radio" />
      作業中
      <input type="radio" />
      完了
    </>
  );
};
