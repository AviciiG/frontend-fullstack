import React from 'react';
// Компоненты Material UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, lightBlue, red } from '@mui/material/colors'; // <-- Импорт синих цветов

// React Router
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

// Компонент логина (ЛР 14)
import Login from './components/Login'; 

// 1. Создание СИНЕЙ темы (Blue/Light Blue)
const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[700], // Насыщенный синий (основной)
    },
    secondary: {
      main: lightBlue[300], // Светло-голубой оттенок (дополнительный)
    },
    error: {
      main: red[500], // Красный для ошибок
    },
    background: {
      default: '#f4f6f8', // Светлый фон для всего приложения
    },
  },
});

const queryClient = new QueryClient();

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ color: blueTheme.palette.primary.main, mb: 2 }}>
        Лабораторная работа
      </Typography>
      <Typography variant="h6" sx={{ mb: 2 }}>
        IT2-2212
      </Typography>
      <Typography variant="body1">
        Демонстрация полного функционала CRUD (Create, Read, Update, Delete) в стиле Material UI.
      </Typography>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={blueTheme}>
      <BrowserRouter>
        <CssBaseline />

        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div">
              🚗 Car Shop
            </Typography>
            <div style={{ flexGrow: 1 }}></div>

            <Link
              to="/"
              style={{
                color: 'white',
                margin: '0 15px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Список
            </Link>
            <Link
              to="/about"
              style={{
                color: 'white',
                margin: '0 15px',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              О работах
            </Link>
          </Toolbar>
        </AppBar>

        <Container maxWidth="xl">
          <Routes>
            {/* КЛЮЧЕВОЕ ИЗМЕНЕНИЕ ЛР 14: Рендерим Login */}
            <Route path="/" element={
              <QueryClientProvider client={queryClient}>
                <Login /> 
              </QueryClientProvider>
            } />
            <Route path="/about" element={<About />} />
            <Route
              path="*"
              element={
                <Typography
                  variant="h4"
                  color="error"
                  style={{ padding: '20px' }}
                >
                  404 Страница не найдена 🙀
                </Typography>
              }
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;