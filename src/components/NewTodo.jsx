import { H1 } from "./H1";
import { useState } from "react";
import { Button } from "./Button";
export const NewTodo = ({ list, setList }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <div>
      <div>
        <H1>新規作成</H1>

        <Label>タイトル</Label>
        <input
          style={{
            width: "771px",
            height: "62px",
            borderRadius: "10px",
            border: "1px solid #707070",
            background: "#FFF",
            margin: "20px",
            fontSize: "31px",
          }}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Label>本文</Label>
        <input
          style={{
            width: "771px",
            height: "218px",
            borderRadius: "10px",
            border: "1px solid #707070",
            background: "#FFF",
            margin: "20px",
            fontSize: "31px",
          }}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 100,
        }}
      >
        <Button
          onClick={() => {
            setList([
              ...list,
              {
                id: list.length + 1,
                title: title,
                content: content,
              },
            ]);
          }}
        >
          追加
        </Button>
      </div>
    </div>
  );
};

const Label = ({ children }) => {
  return (
    <div
      style={{
        fontSize: "31px",
        fontWeight: "bold",
        borderLeft: "solid",
        paddingLeft: "10px",
        borderWidth: "5px",
        borderColor: "#0085FF",
        marginTop: "30px",
      }}
    >
      {children}
    </div>
  );
};
