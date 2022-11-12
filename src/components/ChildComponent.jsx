import React from "react";
import { memo } from "react";
import { useCallback } from "react";

// memo是HOC，所以要用HOC的使用方法
// memo是使用Shallow compare，會判斷目前父組件傳進來的值和原本已有的值完全一樣的話，就不重新渲染子組件
// ! 例外：如果父組件傳入一個function的話，因為function的內存位置不同，所以會是不同值，一樣會重新渲染
// export const ChildComponent = memo(({ number }) => {
//   console.log("Child Component Render....");
//   return <div>ChildComponent {number}</div>;
// });

// 在父組件使用useCallBack傳入function到子組件的memo就解決了
// 解決傳入function後會重新創建位置的問題
export const ChildComponent = memo(({ number }) => {
  console.log("Child Component Render....");
  return <div>ChildComponent {number}</div>;
});
