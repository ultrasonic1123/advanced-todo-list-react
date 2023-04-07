import React, { useEffect } from "react";
import styles from "./create.module.css";
import { useState } from "react";

import { addNewTodo } from "../../api";

export default function index({ onAddNewTodo }) {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleShowCreateModal = () => {
    window.scrollTo(0, 0, { behavior: "smooth" });
    setShowCreateModal(!showCreateModal);
  };

  const handleOnchangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnchangeContent = (e) => {
    setContent(e.target.value);
  };

  const handleOnchangeIsDone = (e) => {
    setIsDone(e.target.checked);
  };

  const handleAddNewTodo = async () => {
    let { data } = await addNewTodo({ name: title, content, isDone });
    if (data) {
      onAddNewTodo(data);
    }
  };

  useEffect(() => console.log(isDone), [isDone]);

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        width: "20rem",
        marginTop: "5vh",
        marginBottom: "5vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleShowCreateModal}
        style={{
          display: "inline-block",
          marginLeft: "5%",
          width: "35%",
          padding: "0.5rem",
          backgroundColor: "rgba(106, 106, 106, 0.85)",
          border: "none",
          borderRadius: "5px",
          color: "rgba(255, 255, 255, 0.75)",
        }}
      >
        Create todo
        <i style={{ marginLeft: "0.25rem" }} className="fa-regular fa-plus"></i>
      </button>
      {showCreateModal ? (
        <div className={styles.modal}>
          <div className={styles.modalBody}>
            <p>Create new todo:</p>
            <div>
              <label htmlFor="modal-title">Title:</label>
              <input onChange={handleOnchangeTitle} id="modal-title"></input>
            </div>
            <div>
              <label htmlFor="modal-title">Content:</label>
              <input onChange={handleOnchangeContent} id="modal-title"></input>
            </div>
            <div>
              <label htmlFor="modal-title">Is Completed:</label>
              <input
                onChange={handleOnchangeIsDone}
                id="modal-title"
                type="checkbox"
              ></input>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button onClick={handleShowCreateModal}>Close</button>
              <button
                onClick={() => {
                  handleAddNewTodo();
                }}
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
