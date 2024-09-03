import React, { useState, useEffect } from "react";
export default (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Você clicou ${count} vezes!`;
  });
  return (
    <div>
      <p>Você clicou {count} vezes!</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui (com hook)
      </button>
    </div>
  );
};
