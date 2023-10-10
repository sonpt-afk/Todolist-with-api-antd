import { useRef } from 'react';

const App = () => {
  const headingRef = useRef(null);
  const colorInputRef = useRef(null);

  const changeColor = () => {
    const color = colorInputRef.current.value;
    headingRef.current.style.color = color;
  };

  return (
    <div>
      <h1 ref={headingRef}>Hello, World!</h1>
      <input type="color" ref={colorInputRef} />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default App;