import React, { useState } from "react";
import styles from "./todoItem.module.css";
import MenuModal from "../EditTodo";

export default function Todo({ title, content, isDone, _id, onDelete }) {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div className={styles.todoItem}>
      <div className={!isDone ? styles.container : styles.containerDone}>
        <div className={styles.todoHeader}>
          <h2>{title}</h2>
          <div
            onClick={() => {
              setIsShowModal(!isShowModal);
            }}
            className={styles.todoMenu}
          >
            <div className={styles.menuItem}></div>
            <div className={styles.menuItem}></div>
            <div className={styles.menuItem}></div>
            <MenuModal onDelete={onDelete} _id={_id} isShow={isShowModal} />
          </div>
        </div>
        <div className={styles.done}>
          <span>IsDone: </span>
          {!isDone ? (
            <i className="fa-regular fa-square"></i>
          ) : (
            <i className="fa-regular fa-square-check"></i>
          )}
        </div>
        <p>Note:</p>
        <p>{content}</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <hr style={{ width: "50%", marginBottom: "10px" }} />
          {/* <span>Deadline: </span> */}
        </div>
      </div>
    </div>
  );
}
