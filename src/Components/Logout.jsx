import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ show, handleClose, handleLogout }) => {
  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          width: '23%',
          height: 'fit-content',
          margin: 'auto',
          marginTop: '100px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <div className='delete-modal'>
        <h2 style={{ textAlign: 'center', fontSize: '20px' }}>Confirm Logout</h2>
        <p style={{ textAlign: 'center', fontSize: '16px' }}>Are you sure you want to Logout?</p>
        <div style={{ textAlign: 'center' }}>
          <button className="btn btn-secondary" style={{ marginRight: '10px' }} onClick={handleClose}>Cancel</button>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </Modal>
  );
};

const Logout = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleLogout = () => {
    // Perform logout logic
    // For example, call onLogout prop to handle logout

    // Close the modal
    setShowModal(false);
    navigate('/'); // Navigate to the home page
  };

  return (
    <>
      <button class="btn btn-primary  bg-teal" onClick={() => setShowModal(true)}>Log Out</button>
      <LogoutModal show={showModal} handleClose={() => setShowModal(false)} handleLogout={handleLogout} />
    </>
  );
};

export default Logout;
