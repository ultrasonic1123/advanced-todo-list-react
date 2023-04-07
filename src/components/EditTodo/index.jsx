import React from "react";
import styles from "./menuModal.module.css";
import { deleteTodo } from "../../api";

export default function index({ isShow, _id, onDelete }) {
  const handleDelete = async (_id) => {
    console.log({ onDelete });
    let res = await deleteTodo({ _id });
    console.log({ res });
    if (res.status == 200) {
      onDelete(_id);
    }
    return;
  };

  return (
    <div className={styles.container}>
      {isShow ? (
        <div>
          <div
            className={styles.btn}
            style={{
              width: "100%",
              backgroundColor: "rgba(135,206,250, 0.5)",
              border: "none",
              padding: "5px",
              borderRadius: "2px",
              marginLeft: "10px",
            }}
          >
            Edit
          </div>
          <div
            className={styles.btn}
            onClick={() => handleDelete(_id)}
            style={{
              width: "100%",
              backgroundColor: "rgba(135,206,250, 0.5)",
              border: "none",
              padding: "5px",
              borderRadius: "2px",
              marginLeft: "10px",
            }}
          >
            Delete
          </div>
        </div>
      ) : null}
    </div>
  );
}
