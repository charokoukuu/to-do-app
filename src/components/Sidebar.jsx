import { Button } from "./Button";
import { List } from "./List";

export const Sidebar = ({
  list,
  setList,
  selectedId,
  callback,
  setMode,
  setSelectedId,
}) => {
  return (
    <div
      style={{
        width: "331px",
        height: "100vh",
        background: "#D9D9D9",
      }}
    >
      <div
        style={{
          fontSize: "45px",
          fontWeight: "bold",
          margin: "auto",
          paddingTop: "50px",
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        ToDo
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        {list.map((item) => {
          return (
            <List
              selected={item.id === selectedId}
              key={item.id}
              onClick={() => {
                setMode("view");
                setSelectedId(item.id);
              }}
              content={item.title}
              callback={() => {
                setList((prev) => prev.filter((e) => e.id !== selectedId));
              }}
            />
          );
        })}
        <Button onClick={callback}>新規作成</Button>
      </div>
    </div>
  );
};
