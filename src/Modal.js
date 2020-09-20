import React, { useRef } from "react";
import { useClickAway } from "./useClickAway";

export default function Modal({ onClose }) {
  const modalRef = useRef(null);

  useClickAway(modalRef, () => {
    onClose();
  });

  return (
    <div className="shadow-overlay">
      <div ref={modalRef} className="my-modal">
        <div className="modal-header">Awesome Modal</div>
        <div className="modal-body">
          If you click outside of this white view, the modal will close.
          <br />
          The button "cancel" also closes the modal.
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button>Ok</button>
        </div>
      </div>
    </div>
  );
}
