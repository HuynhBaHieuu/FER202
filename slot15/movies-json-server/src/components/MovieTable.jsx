import React from 'react';
import { Table, Button, Image, Modal, Alert, Spinner, Badge } from 'react-bootstrap';
import { useMovieState, useMovieDispatch } from '../contexts/MovieContext';

const MovieTable = () => {
  const state = useMovieState();
  const { dispatch, confirmDelete } = useMovieDispatch(); 
  
  const { movies, loading, movieToDelete, showDeleteModal, selectedMovie, showViewModal } = state;

  // Mapping genreId to genre name
  const genreMap = {
    1: 'Sci-Fi',
    2: 'Comedy', 
    3: 'Drama',
    4: 'Horror',
    5: 'Romance',
    6: 'Action',
    7: 'Thriller'
  };

  const handleEditClick = (movie) => {
      dispatch({ type: 'OPEN_EDIT_MODAL', payload: movie });
  };
  
  const handleDeleteClick = (movie) => {
      dispatch({ type: 'OPEN_DELETE_MODAL', payload: movie });
  };
  const handleViewDetailClick = (movie) => {
      dispatch({ type: 'OPEN_VIEW_DETAIL_MODAL', payload: movie });
  };

  return (
    <>
      {loading && movies.length === 0 ? (
          <div className="text-center my-4">
              <Spinner animation="border" role="status" variant="primary" className="me-2" />
              <Alert variant="info" className="mt-3">Loading movies...</Alert>
          </div>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>Poster</th>
              <th>ID</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Duration (min)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              const genreName = genreMap[movie.genreId] || 'Unknown';
              return (
                <tr key={movie.id}>
                  <td><Image src={movie.poster} alt={movie.title} style={{ width: '50px', height: '50px', objectFit: 'cover' }} rounded /></td>
                  <td>#{movie.id}</td>
                  <td>
                    <strong>{movie.title}</strong>
                    <br />
                    <small className="text-muted">({movie.year})</small>
                  </td>
                  <td>{genreName}</td>
                  <td>{movie.duration} min</td>
                  <td>
                    <Button variant="primary" size="sm" onClick={() => handleEditClick(movie)} className="me-2">Edit</Button>
                    <Button variant="danger" size="sm" onClick={() => handleDeleteClick(movie)} className="me-2">Delete</Button>
                    <Button variant="info" size="sm" onClick={() => handleViewDetailClick(movie)}>View detail</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      <Modal show={showDeleteModal} onHide={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
        <Modal.Header closeButton>
<Modal.Title>Confirm Delete Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete "{movieToDelete?.title}" (ID: {movieToDelete?.id})?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_DELETE_MODAL' })}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => confirmDelete(movieToDelete.id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* VIEW DETAIL MODAL */}
      <Modal 
        show={showViewModal} 
        onHide={() => dispatch({ type: 'CLOSE_VIEW_DETAIL_MODAL' })} 
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedMovie?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMovie && (
            <div className="row">
              <div className="col-md-4">
                <img 
                  src={selectedMovie.poster} 
                  alt={`${selectedMovie.title} poster`}
                  className="img-fluid rounded"
                  style={{ width: '100%' }}
                />
              </div>
              <div className="col-md-8">
                <div className="mb-3">
                  <Badge bg="primary" className="me-2">{genreMap[selectedMovie.genreId]}</Badge>
                  <Badge bg="secondary" className="me-2">{selectedMovie.year}</Badge>
                  <Badge bg="info">{selectedMovie.country}</Badge>
                </div>
                
                <h6>Duration: {selectedMovie.duration} minutes</h6>
                
                <h6 className="mt-3">Movie ID:</h6>
                <Badge bg="secondary" className="me-2">#{selectedMovie.id}</Badge>
                
                <h6 className="mt-3">Description:</h6>
                <p className="text-muted">{selectedMovie.description}</p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_VIEW_DETAIL_MODAL' })}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MovieTable;