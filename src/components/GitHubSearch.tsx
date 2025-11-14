
import React, { useState } from 'react';
import axios from 'axios';

interface Repository {
  id: number;
  full_name: string;
  html_url: string;
}

const GitHubSearch = () => {
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]); 

  const handleClick = () => {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;

    axios.get<{ items: Repository[] }>(url)
      .then(response => {
        setRepodata(response.data.items); 
      })
      .catch(err => {
        console.error("Ошибка при получении данных:", err);
        setRepodata([]);
      });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Лабораторная работа 8 (Выполнила - Асемжан)</h3>
      <input 
        type="text" 
        value={keyword} 
        onChange={e => setKeyword(e.target.value)} 
        placeholder="Введите слово"
      />
      <button onClick={handleClick} style={{ marginLeft: '10px' }}>
        Найти
      </button>

      {repodata.length > 0 && (
        <table style={{ marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th style={{ padding: '8px', textAlign: 'left' }}>Имя</th>
              <th style={{ padding: '8px', textAlign: 'left' }}>Ссылка</th>
            </tr>
          </thead>
          <tbody>
            {repodata.map(repo => (
              <tr key={repo.id} style={{ borderBottom: '1px dotted #eee' }}>
                <td style={{ padding: '8px' }}>{repo.full_name}</td>
                <td style={{ padding: '8px' }}>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.html_url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {repodata.length === 0 && keyword !== '' && <p>Нет данных или выполните поиск.</p>}
    </div>
  );
};

export default GitHubSearch;