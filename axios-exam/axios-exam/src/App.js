import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import AxiosApi from "./AxiosApi";

function App() {
  // // GET
  // async function getUser() {
  //   // async, await을 사용하는 경우
  //   try {
  //     // GET 요청은 params에 실어 보냄
  //     const response = await axios.get("/user", {
  //       params: {
  //         ID: 12345,
  //       },
  //     });

  //     // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

  //     await axios.get("/user?ID=12345"); // 위의 요청과 동일

  //     var userId = 12345;
  //     await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

  //     console.log(response);
  //   } catch (e) {
  //     // 실패 시 처리
  //     console.error(e);
  //   }
  // }
  // // POST
  // async function postUser() {
  //   try {
  //     // POST 요청은 body에 실어 보냄
  //     await axios.post("/user", {
  //       firstName: "Fred",
  //       lastName: "Flintstone",
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  // // 동시 요청 생성하기
  // function getUserAccount() {
  //   return axios.get("/user/12345");
  // }

  // function getUserPermissions() {
  //   return axios.get("/user/12345/permissions");
  // }

  // Promise.all([getUserAccount(), getUserPermissions()]) // Promise, then 사용
  //   .then(function (results) {
  //     // 응답 결과를 results 배열로 받아서
  //     const acct = results[0]; // 각각의 결과를 acct와 perm에 저장
  //     const perm = results[1];
  //   });

  return (
    <div className="App">
      <AxiosApi />
    </div>
  )
}

export default App;
