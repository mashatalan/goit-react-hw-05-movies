import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Button, Container, Title } from './ErrorMessage.styled';

const ErrorMessage = ({ error }) => {
  const showErrorToast = () => {
    toast.error(
      <>
      Oops, an error occurred.
      <br />
      Please try again later.
      <br />
      Error: {error}
    </>,{
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: 'error-toast',

    });
  };

  return (
    <Container style={{ textAlign: 'center' }}>
      <Title>Something went wrong!</Title>
      <Button onClick={showErrorToast}>Show Error Toast</Button>
    </Container>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorMessage;
