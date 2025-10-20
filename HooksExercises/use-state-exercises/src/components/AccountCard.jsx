import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const AccountCard = ({ account }) => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card className="h-100 shadow-sm">
        <Card.Body className="text-center">
          <div className="mb-3">
            <img
              src={account.avatar}
              alt={`Avatar of ${account.username}`}
              className="rounded-circle"
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
          </div>
          <Card.Title className="h5">{account.username}</Card.Title>
          <Card.Text className="text-muted">
            <small>ID: {account.id}</small>
          </Card.Text>
          <Card.Text>
            <strong>Password:</strong> {account.password}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AccountCard;
