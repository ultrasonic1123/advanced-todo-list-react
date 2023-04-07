import Todo from "./components/TodoItem";
import "./styles/css/global.css";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const headers = {
    "Content-Type": "application/json",
  };

  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getTodolist();
  }, []);

  const getTodolist = async () => {
    let { data } = await axios.get("http://localhost:3000/show/all", {
      headers,
    });
    // let todoList = JSON.parse(data);
    console.log(data);
    setTodoList(data);
  };

  const deleteTodo = (_id) => {
    console.log("Active!");
    let newData = todoList.filter((item) => {
      if (item._id != _id) return item;
    });

    setTodoList(newData);
  };

  const addNewTodo = (data) => {
    console.log("ADDDDD");
    let newTodoList = [...todoList, data];
    console.log({ newTodoList });
    setTodoList(newTodoList);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(106, 106, 106, 0.0)",
          padding: "10px",
          width: "100%",
        }}
      >
        <i
          style={{ fontSize: "2rem", marginRight: "15px", color: "white" }}
          className="fa-solid fa-clipboard-check"
        ></i>
        <h1 style={{ color: "white" }}>Todo APP</h1>
      </div>
      <CreateTodo onAddNewTodo={addNewTodo} />
      <div style={{ paddingBottom: "50px" }}>
        {todoList.map((item, index) => {
          console.log({ item });
          return (
            <Todo
              key={index.toString()}
              title={item?.name}
              content={item?.content}
              isDone={item?.isDone}
              _id={item?._id}
              onDelete={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
