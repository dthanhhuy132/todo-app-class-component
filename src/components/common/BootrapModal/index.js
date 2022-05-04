import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function BootstrapModal({
  isShowModal = false,
  taskName,
  delFunc,
  handleCloseModal,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(isShowModal);
  }, [isShowModal]);

  const handleClose = () => {
    setShow(false);
    handleCloseModal();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete task: <strong>{`"${taskName}"`}</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={delFunc}>
            I'm very sure.
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BootstrapModal;
