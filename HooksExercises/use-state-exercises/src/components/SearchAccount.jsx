import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import AccountCard from './AccountCard';
import { accounts } from '../data/accounts';

const SearchAccount = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(accounts);
  const [showAll, setShowAll] = useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      setSearchResults(accounts);
      setShowAll(true);
    } else {
      const filtered = accounts.filter(account =>
        account.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
      setShowAll(false);
    }
  };

  const handleShowAll = () => {
    setSearchResults(accounts);
    setShowAll(true);
    setSearchTerm('');
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Tìm kiếm Account</h2>
          
          <Form onSubmit={handleSearch} className="mb-4">
            <Row className="g-2">
              <Col md={8}>
                <Form.Control
                  type="text"
                  placeholder="Nhập username để tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Col>
              <Col md={4}>
                <Button variant="primary" type="submit" className="w-100">
                  Tìm kiếm
                </Button>
              </Col>
            </Row>
          </Form>

          <div className="text-center mb-3">
            <Button 
              variant="outline-secondary" 
              onClick={handleShowAll}
              disabled={showAll}
            >
              Hiển thị tất cả
            </Button>
          </div>

          {searchResults.length === 0 ? (
            <Alert variant="warning" className="text-center">
              <Alert.Heading>Không tìm thấy kết quả</Alert.Heading>
              <p>Không có account nào khớp với từ khóa tìm kiếm của bạn.</p>
            </Alert>
          ) : (
            <>
              <div className="mb-3">
                <h5>
                  {showAll 
                    ? `Hiển thị tất cả ${searchResults.length} accounts` 
                    : `Tìm thấy ${searchResults.length} kết quả cho "${searchTerm}"`
                  }
                </h5>
              </div>
              
              <Row>
                {searchResults.map(account => (
                  <AccountCard key={account.id} account={account} />
                ))}
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchAccount;
