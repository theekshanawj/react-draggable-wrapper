# react-draggable-wrapper
React draggable wrapper component encapsulating the HTML5 Drag and Drop APIs.

## HTML5 Drag and Drop

Refer: https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

## How to use

Import the module from [here](https://www.npmjs.com/package/react-draggable-wrapper)

```javascript
import DraggableWrapper from 'react-draggable-wrapper';
```

Wrap any React component which requires Drag and Drop feature by `DraggableWrapper`.

```javascript
<DraggableWrapper
      id={...}
      handleDragStart={...}
      handleDrop={...}
      handleDragOver={...}
    >
    <div> drag me </div>
 </DraggableWrapper>

```

## API reference 

### Props

Following props main props are accepted 

|Prop|Type|Usage|Default|
|---|---|---|---|
id|`any`| Uniquely identify a dragging element| `0` |
isDraggable|`boolean`| Allow drag and drop| `true` |
handleDragStart|`function: (event, id) => {...}`| Will trigger at `onDragStart` | - |
handleDrop|`function: (event, id) => {...}`| Will trigger at `onDrop` | - |
handleDragOver|`function: (event, id) => {...}`| Will trigger at `onDragOver` | - |
handleDragEnter|`function: (event, id) => {...}`| Will trigger at `onDragEnter` | - |
handleDragLeave|`function: (event, id) => {...}`| Will trigger at `onDragLeave` | - |
handleDragExit|`function: (event, id) => {...}`| Will trigger at `onDragExit` | - |
handleDragEnd|`function: (event, id) => {...}`| Will trigger at `onDragEnd` | - |

Other than above main props, additional props such as `style`, `data-id` can be passed to the wrapper.

### Example

A reference implementation of a row drag and drop is provided [here](https://github.com/theekshanawj/react-draggable-wrapper/blob/master/sample/App.js). Below is a screen casting of the application.

![Row and Drop](https://github.com/theekshanawj/react-draggable-wrapper/blob/read-me/sample/row-drag-n-drop.gif)

