import { useState } from "react";
import { useCallback } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChildComponent } from "./components/ChildComponent";

function App() {
  const [value, setValue] = useState("");

  console.log("App Render...");

  // 使用memo
  // 直接將父組件的function傳入子組件的memo會造成每次傳入function內存位置不一樣的問題
  // const sayHello = () => {
  //   console.log("Hello");
  // };

  // 使用useCallBack
  // 在父組件使用useCallBack傳入function到子組件的memo就解決了
  // 解決傳入function後會重新創建位置的問題
  // 這裡監聽value，如果值改變才重新創立新的內存地址
  // 如果不監聽任何東西 useCallBack(() => {}, [])，那就只會執行一次，和useEffect同理
  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value}</p>
      <ChildComponent number={1234} sayHello={sayHello} />
    </div>
  );
}

export default App;
