import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function ProjectsNav(props) {
  const [showModal, setModalShow] = useState(false);

  function deleteHandler() {
    setModalShow(true);
  }

  function closeModalHandler(){
    setModalShow(false);
  }

  return (
    <div>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        { showModal && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> }
        { showModal && <Backdrop onClick={closeModalHandler}/> }
      </div>
    </div>
  );
}

export default ProjectsNav;
