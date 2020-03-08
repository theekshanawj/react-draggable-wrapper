import React from 'react';
import PropTypes from 'prop-types';

// Wrapper div
const Wrapper = () => <div />;

// empty method
const noop = () => {};

const DraggableWrapper = (props) => {
  const {
    children,
    isDraggable,
    handleDragStart,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleDragExit,
    handleDragEnd,
    id,
    ...rest
  } = props;
  return (
    <Wrapper
      {...rest}
      draggable={isDraggable}
      onDragStart={(e) => handleDragStart && handleDragStart(e, id)}
      onDrop={(e) => handleDrop && handleDrop(e, id)}
      onDragOver={(e) => handleDragOver && handleDragOver(e, id)}
      onDragEnter={(e) => handleDragEnter && handleDragEnter(e, id)}
      onDragLeave={(e) => handleDragLeave && handleDragLeave(e, id)}
      onDragExit={(e) => handleDragExit && handleDragExit(e, id)}
      onDragEnd={(e) => handleDragEnd && handleDragEnd(e, id)}
    >
      {children}
    </Wrapper>
  );
};

DraggableWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isDraggable: PropTypes.bool,
  handleDragStart: PropTypes.func,
  handleDrop: PropTypes.func,
  handleDragOver: PropTypes.func,
  handleDragEnter: PropTypes.func,
  handleDragLeave: PropTypes.func,
  handleDragExit: PropTypes.func,
  handleDragEnd: PropTypes.func,
  id: PropTypes.any,
};

DraggableWrapper.defaultProps = {
  isDraggable: false,
  handleDragStart: noop,
  handleDrop: noop,
  handleDragOver: noop,
  handleDragEnter: noop,
  handleDragLeave: noop,
  handleDragExit: noop,
  handleDragEnd: noop,
  id: 0,
};

export default DraggableWrapper;
