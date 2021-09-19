import React, { useState } from "react";
import Colorfull from "./components/Colorfull";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  return (
    <>
      <h1>こんにちは</h1>
      <Colorfull color="blue">お元気ですか？</Colorfull>
      <Colorfull color="pink">元気です！</Colorfull>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
    </>
  );
};

export default App;
