// ConfirmModal component - Modal hiển thị thông tin đăng ký thành công
import React from "react";
import { Modal, Button, Card } from "react-bootstrap";

function ConfirmModal({ show, onHide, formData }) {
  return (
    <Modal show={show} onHide={onHide} centered size="md">
      <Modal.Header closeButton>
        <Modal.Title>Đăng Ký Thành Công!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card>
          <Card.Header>
            <h5 className="text-center mb-0">Thông Tin Tài Khoản</h5>
          </Card.Header>
          <Card.Body>
            <div className="mb-2">
              <strong>Username:</strong> {formData?.username}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {formData?.email}
            </div>
            <div className="mb-2">
              <strong>Password:</strong> {formData?.password}
            </div>
            <div className="text-muted small mt-3">
              <em>Chúc mừng! Tài khoản của bạn đã được tạo thành công.</em>
            </div>
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;