import React, { useEffect } from "react";
import "./App.css";
import AutoBatchEventHandler from "./components/AutoBatchEventHandler";

function App() {
  // useEffectの２引数を[]にするとコンポーネントを読み込んだ最初だけ実行される。
  useEffect(() => {
    console.log("Appがレンダリングされた。React17では1度だけ呼ばれる。");
  }, []);

  return (
    <div className="App">
      <AutoBatchEventHandler />
    </div>
  );
}

export default App;
