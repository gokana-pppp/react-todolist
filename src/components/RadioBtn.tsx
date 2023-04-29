import React from "react";

//ひとまず、3つのradioボタンは存在してるだけ。
export const RadioBtn = (): JSX.Element => {
  return (
    <>
      <input type="radio" name="status" checked />
      すべて
      <input type="radio" name="status" />
      作業中
      <input type="radio" name="status" />
      完了
    </>
  );
};
