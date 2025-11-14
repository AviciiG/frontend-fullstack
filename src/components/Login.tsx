// Login.tsx (Mock-логин для ЛР 14)
import { useState } from 'react'; 
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Carlist from './CarList';

// Фиктивные учетные данные
const MOCK_USERNAME = 'test';
const MOCK_PASSWORD = '123'; 
// Фиктивный токен
const DUMMY_JWT = 'Bearer lab14-dummy-token-Asemzhan-JWT'; 

type User = {
    username: string;
    password: string;
}

function Login() {
    const [user, setUser] = useState<User>({ username: '', password: '' }); 
    const [isAuthenticated, setAuth] = useState(false); 
    const [loginError, setLoginError] = useState(''); 

    // Проверяем, есть ли токен при инициализации 
    useState(() => {
        if (sessionStorage.getItem("jwt")) {
            setAuth(true);
        }
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        setLoginError('');
    };

    const handleLogin = () => {
        if (user.username === MOCK_USERNAME && user.password === MOCK_PASSWORD) {
            sessionStorage.setItem("jwt", DUMMY_JWT);
            setAuth(true); 
        } else {
            setLoginError("Invalid credentials. Try: test / password");
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem("jwt"); 
        setAuth(false); 
    }

    if (isAuthenticated) {
        return <Carlist logOut={handleLogout} />; 
    } else {
        return (
            <Stack spacing={2} alignItems="center" mt={5}>
                <Typography color="error">{loginError}</Typography> 
                <TextField
                    name="username"
                    label="Username"
                    value={user.username}
                    onChange={handleChange} />
                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={user.password}
                    onChange={handleChange} />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}>
                    LOGIN
                </Button>
            </Stack>
        );
    }
}

export default Login;
