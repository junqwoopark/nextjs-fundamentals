// pages 폴더 안에 있는 파일명에 따라 라우팅이 됨.
// index.js는 기본적으로 라우팅이 되는 파일임.
// 즉, localhost:3000/ 으로 접속하면 index.js가 렌더링 됨.

import { useState } from "react";
import NavBar from "../components/NavBar";

// 파일 내 함수명은 반드시 export default로 선언해야 함.
// 그렇지 않으면 라우팅이 되지 않음.

// Static Pre-rendering을 지원함.
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}
