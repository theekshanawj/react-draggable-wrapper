import React from 'react';

/**
 * Setting the default props.
 * Id is set to 0 if props does not define it
 * isDraggable is true if caller does not call isDraggable=true|false explicitly
 * @param props Props passed
 * @return {object} Props with default props
 */
const defaultProps = (props) => {
  const id = props.id || 0;
  const isDraggable = props.isDraggable === undefined ? true : props.isDraggable;
  return {
    ...props,
    id,
    isDraggable,
  }
};

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
  } = defaultProps(props);

  return (
      <div
          draggable={isDraggable}
          onDragStart={(e) => handleDragStart && handleDragStart(e, id)}
          onDrop={(e) => handleDrop && handleDrop(e, id)}
          onDragOver={(e) => handleDragOver && handleDragOver(e, id)}
          onDragEnter={(e) => handleDragEnter && handleDragEnter(e, id)}
          onDragLeave={(e) => handleDragLeave && handleDragLeave(e, id)}
          onDragExit={(e) => handleDragExit && handleDragExit(e, id)}
          onDragEnd={(e) => handleDragEnd && handleDragEnd(e, id)}
          {...rest}
      >
        {children}
      </div>
  );
};

export default DraggableWrapper;
