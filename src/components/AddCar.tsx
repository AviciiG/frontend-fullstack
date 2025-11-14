// AddCar.tsx

import { useState } from 'react';
import Button from '@mui/material/Button'; 
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import CarDialogContent from './CarDialogContent'; 
// import { Car } from '../types'; // Не забудьте импортировать свой интерфейс Car

// Начальное состояние для новой машины
const initialCar = {
    brand: '',
    model: '',
    color: '',
    modelYear: '',
    registrationNumber: '',
    price: ''
};

interface Props {
    // Укажите конкретный тип для car, например, Car
    addCar: (car: any) => void; 
}

export default function AddCar({ addCar }: Props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState<any>(initialCar); // Используйте тип Car, если он определен

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCar(initialCar); 
    };

    const handleSave = () => {
        addCar(car); 
        handleClose();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    return (
        <div>
            {/* Кнопка "Add Car" - MUI Button */}
            <Button 
                variant="contained" 
                onClick={handleClickOpen}
                sx={{ mb: 2 }}
            >
                Add Car
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                
                {/* Компонент с полями ввода MUI TextField */}
                <CarDialogContent car={car} handleChange={handleChange} />

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}