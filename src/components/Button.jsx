export const Button = ({ children, onClick, background = "#0085FF" }) => {
  return (
    <button
      style={{
        padding: "10px 60px",
        background: background,
        border: "none",
        fontSize: "20px",
        fontWeight: "bold",
        marginTop: "20px",
        borderRadius: "10px",
        cursor: "pointer",
        color: "white",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
