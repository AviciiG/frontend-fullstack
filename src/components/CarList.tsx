// CarList.tsx (Окончательная версия с DataGrid, новыми данными и красным Logout)

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid"; 
import Stack from '@mui/material/Stack'; 
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 

// 💥 ИМИТАЦИЯ ИМПОРТА AddCar (предполагается, что он существует)
import AddCar from './AddCar'; 


interface Car {
    id: number;
    brand: string;
    model: string;
}

interface Props {
    logOut: () => void; // Пропс для выхода из системы (ЛР 14)
}

// 💥 НОВЫЕ ИМИТАЦИОННЫЕ ДАННЫЕ
const MOCK_CARS: Car[] = [ 
    { id: 1, brand: 'Lixiang', model: 'L6' },
    { id: 2, brand: 'Subaru', model: 'Outback' },
    { id: 3, brand: 'Lexus', model: 'RX 350' },
    { id: 4, brand: 'Audi', model: 'RSQ8' },
];

export default function Carlist({ logOut }: Props) {
    const cars = MOCK_CARS; 
    
    // Имитация функций CRUD для логирования
    const onDelete = (id: number) => console.log('DELETE called for ID:', id);
    const onEdit = (car: Car) => console.log('EDIT called for car:', car);

    // Используем any[] вместо GridColDef[], чтобы обойти SyntaxError
    const columns: any[] = [
        { field: "brand", headerName: "Brand", width: 150 },
        { field: "model", headerName: "Model", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 120, 
            sortable: false, 
            filterable: false, 
            renderCell: (params: any) => (
                <div>
                    {/* Кнопка Редактировать */}
                    <Tooltip title="Edit car">
                        <IconButton
                            aria-label="edit"
                            size="small"
                            onClick={() => onEdit(params.row as Car)}
                        >
                            <EditIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>

                    {/* Кнопка Удалить */}
                    <Tooltip title="Delete car">
                        <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => onDelete(params.row.id as number)}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </div>
            ),
        },
    ];

    return (
        <div style={{ padding: '20px', width: "100%" }}>
            <Stack 
                direction="row" 
                alignItems="center" 
                justifyContent="space-between" 
                mb={2}
            >
                <Typography variant="h5">Car Inventory</Typography>
                
                {/* Группа кнопок (Add Car и Log out) */}
                <Stack direction="row" spacing={2} alignItems="center">
                    {/* 💥 КНОПКА ADD CAR (СИМУЛЯЦИЯ) */}
                    {/* Здесь должен быть компонент <AddCar /> */}
                    <Button variant="contained" color="primary">
                        Add New Car
                    </Button>
                    
                    {/* 💥 КРАСНАЯ КНОПКА LOG OUT */}
                    <Button variant="contained" color="error" onClick={logOut}>
                        Log out
                    </Button>
                </Stack>
            </Stack>
            
            <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    getRowId={(row) => row.id}
                    disableRowSelectionOnClick
                />
            </div>
        </div>
    );
}