// CarDialogContent.tsx

// import { Car } from '../types'; // Не забудьте импортировать свой интерфейс Car
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import DialogContent from '@mui/material/DialogContent';

// Интерфейс для пропсов компонента (использую any, чтобы не зависеть от внешнего импорта Car)
interface CarDialogProps {
    car: any;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Компонент, содержащий поля формы
export default function CarDialogContent({ car, handleChange }: CarDialogProps) {
    return (
        <DialogContent>
            <Stack mt={1} spacing={2}>
                <TextField
                    label="Brand"
                    name="brand"
                    value={car.brand}
                    onChange={handleChange}
                />
                <TextField
                    label="Model"
                    name="model"
                    value={car.model}
                    onChange={handleChange}
                />
                <TextField
                    label="Color"
                    name="color"
                    value={car.color}
                    onChange={handleChange}
                />
                <TextField
                    label="Year"
                    name="modelYear"
                    value={car.modelYear}
                    onChange={handleChange}
                    type="number" 
                />
                <TextField
                    label="Reg.nr."
                    name="registrationNumber"
                    value={car.registrationNumber}
                    onChange={handleChange}
                />
                <TextField
                    label="Price"
                    name="price"
                    value={car.price}
                    onChange={handleChange}
                    type="number" 
                />
            </Stack>
        </DialogContent>
    );
}