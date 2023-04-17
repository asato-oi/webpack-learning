import * as React from "react";

const module4: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ backgroundColor: "green", color: "#fff", padding: "1em" }}>
      {message}
    </div>
  );
};

export default module4;
