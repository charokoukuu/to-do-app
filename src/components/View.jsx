import { H1 } from "./H1";
import { Button } from "./Button";
export const View = ({ list, selectedId, setList }) => {
  return (
    <div>
      {list.filter((e) => e.id === selectedId).length > 0 && (
        <div>
          <H1>{list.find((e) => e.id === selectedId).title}</H1>
          <div>{list.find((e) => e.id === selectedId).content}</div>
        </div>
      )}
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 100,
        }}
      >
        <Button
          onClick={() => {
            setList((prev) => prev.filter((e) => e.id !== selectedId));
          }}
          background="#E00000"
        >
          削除
        </Button>
      </div>
    </div>
  );
};
