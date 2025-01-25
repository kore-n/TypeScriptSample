import React, { useState } from "react";

const App: React.FC = () => {
  // カウントを管理する状態を作成
  const [count, setCount] = useState(0); // 初期値は0

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウンターアプリ</h1>
      <p>現在のカウント: <strong>{count}</strong></p>
      <button
        onClick={() => setCount(count + 1)} // ボタンクリックでカウントを1増やす
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        カウントを増やす
      </button>

      <button
        onClick={() => setCount(count -1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        カウントを減らす
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        カウントをリセット
      </button>
    </div>
  );
};

export default App;