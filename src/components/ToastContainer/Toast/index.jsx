import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';

// eslint-disable-next-line import/no-cycle
import { useToast } from '../../../hooks/toast';

import { Container, Button } from './styles';

const icons = {
  success: <FaCheckCircle size={24} />,
  error: <FaTimesCircle size={24} />,
};

const Toast = ({ message /* style */ }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description} /* style={style} */
    >
      {icons[message.type]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <Button onClick={() => removeToast(message.id)}>
        <FaTimes size={18} />
      </Button>
    </Container>
  );
};

Toast.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Toast;
