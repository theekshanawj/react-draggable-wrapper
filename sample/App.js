import React from 'react';
import './App.css';
import DraggableWrapper from "react-draggable-wrapper";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [1, 2, 3, 4, 5]
    };
    this.dragStartIdx = null;
  }

  dragNDrop = (startIdx, dropIdx) => {

    const items = [...this.state.items];
    const [ deletedItem ] = items.splice(startIdx, 1);
    items.splice(dropIdx, 0, deletedItem);

    this.setState({ items });
  };

  renderItems = () => {
    return this.state.items.map((value, index) => {
      return (
          <DraggableWrapper
              key={value}
              id={index}
              handleDragStart={(e, id) => {
                console.log('started dragging', id);
                this.dragStartIdx = id;
              }}
              handleDrop={(e, id) => {
                e.preventDefault();
                console.log('dropped', id);
                this.dragNDrop(this.dragStartIdx, id);
                this.dragStartIdx = null;
              }}
              handleDragOver={(e) => {
                e.preventDefault();
              }}
          >
            <div className="dragging" key={value} > drag me {value} </div>
          </DraggableWrapper>
      );
    });
  };

  render() {
    return (
        <div className="App">
          {this.renderItems()}
        </div>
    );
  }
}

export default App;
