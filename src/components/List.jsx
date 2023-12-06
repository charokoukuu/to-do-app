export const List = ({ content, onClick, callback, selected }) => {
  return (
    <div
      style={{
        background: selected ? "#FCF1D5" : "#fff",
        border: "none",
        fontSize: "20px",
        fontWeight: "bold",
        margin: "17px auto",
        borderRadius: "10px",
        cursor: "pointer",
        color: "black",
        width: "305px",
        padding: "24px 0px",
        textAlign: "left",
        boxShadow: selected
          ? "0px 1px 4px 1px rgba(0, 0, 0, 0.25) inset"
          : "none",
      }}
      onClick={onClick}
    >
      <div
        style={{
          paddingLeft: "20px",
          display: "flex",
          position: "relative",
        }}
      >
        <div>{content}</div>
        <div
          style={{
            position: "absolute",
            right: "20px",
            color: "#f00",
          }}
          onClick={callback}
        >
          削除
        </div>
      </div>
    </div>
  );
};
