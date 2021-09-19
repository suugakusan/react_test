import React from "react";
import Colorfull from "./components/Colorfull";

const App = () => {
  const onclickButton = () => alert();

  return (
    <>
      <h1>こんにちは</h1>
      <Colorfull color="blue">お元気ですか？</Colorfull>
      <Colorfull color="pink">元気です！</Colorfull>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};

export default App;
