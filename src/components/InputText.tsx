import { Props } from "./Type";

export const InputText: React.FC<Props> = (props) => {
  const { text, textRef, onChange, onClick } = props;

  return (
    <>
      <h2>新規タスクの追加</h2>

      <input type="text" value={text} ref={textRef} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </>
  );
};
