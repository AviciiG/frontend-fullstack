import React, { useState } from 'react'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Счетчик</h3>
      <p>Текущее значение: {count}</p>
      {/* Привязываем обработчик события к кнопке */}
      <button onClick={handleClick}>
        Увеличить на +1
      </button>
    </div>
  );
};

export default Counter;