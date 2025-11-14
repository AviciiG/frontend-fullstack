import React, { useState } from 'react';

const UserForm = () => {

  const [name, setName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    
    alert(`Здравствуйте, ${name}! Ваши данные отправлены.`);
  };

  return (
    <div>
      <h3>Форма ввода данных</h3>
      {/* 4. Привязываем handleSubmit к событию onSubmit формы */}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Введите ваше имя"
          value={name}         
          onChange={handleChange} 
        />
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
};

export default UserForm;