import logo from "./logo.svg";
import "./App.css";
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import React, { useState /**useEffect**/ } from "react";
import useFetch from "./useFetch";
import Users from "./Users";

// class App extends React.Component {
//   state = { requested: "" };

//   render() {
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     // return (
//     <div>
//       <Button
//         variant="link"
//         onClick={() =>
//           this.setState({
//             requested: "https://jsonplaceholder.typicode.com/posts",
//           })
//         }
//       >
//         Posts
//       </Button>
//       <Button
//         variant="link"
//         onClick={() =>
//           this.setState({
//             requested: "https://jsonplaceholder.typicode.com/todos",
//           })
//         }
//       >
//         Todos
//       </Button>
//       <br />
//       Requested: {this.state.requested}
//     </div>;
//   }
// }
// export default App;

const App = () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  const [requested, setRequested] = useState(postsUrl);
  // const [data, setData] = useState([]);
  const data = useFetch(requested);
  // useEffect(() => {
  //   fetch(requested)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }, [requested]);
  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postsUrl)}>
        Posts
      </Button>
      <Button variant="link" onClick={() => setRequested(todosUrl)}>
        Todos
      </Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
