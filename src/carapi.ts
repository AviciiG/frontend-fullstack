// carapi.ts (с имитацией данных и добавлением JWT-конфигурации)

import axios, { AxiosRequestConfig } from 'axios';

// Имитация структуры данных для Carlist
const MOCK_CARS = [
    { id: 1, brand: 'Porsche', model: '911 Carrera S' },
    { id: 2, brand: 'Lexus', model: 'RX 350' },
    { id: 3, brand: 'Audi', model: 'Q8 e-tron' },
];

// ----------------------------------------------------
// ФУНКЦИЯ ЛР 14: ПОЛУЧЕНИЕ КОНФИГУРАЦИИ С ТОКЕНОМ
// ----------------------------------------------------
const getAxiosConfig = (): AxiosRequestConfig => { 
    const token = sessionStorage.getItem("jwt"); 
    
    // Возвращаем объект конфигурации для Axios
    return { 
        headers: { 
            // Добавляем токен в заголовок Authorization, как требует бэкенд
            'Authorization': token, 
            'Content-Type': 'application/json', 
        }, 
    }; 
};

// ----------------------------------------------------
// ИСПОЛЬЗОВАНИЕ ТОКЕНА И ВОЗВРАТ MOCK-ДАННЫХ
// ----------------------------------------------------

// 1. GET CARS (имитация загрузки данных)
export const getCars = async (): Promise<any[]> => { 
    const config = getAxiosConfig();
    
    // В реальном приложении здесь был бы axios.get(URL, config)
    console.log("GET API: Token included in config. Returning mock data.");
    
    // Имитируем задержку сети
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return MOCK_CARS;
}

// 2. DELETE CAR (имитация удаления)
export const deleteCar = async (link: string): Promise<any> => {
    const config = getAxiosConfig(); 
    // В консоль будет выведено, что функция была вызвана с токеном
    console.log(`DELETE API: Token included in config. Deleting link: ${link}`);
    // Здесь должна быть логика удаления из локального массива
    return Promise.resolve({}); // Имитируем успешный ответ
}

// 3. ADD CAR (имитация добавления)
export const addCar = async (car: any): Promise<any> => { 
    const config = getAxiosConfig();
    console.log("ADD API: Token included in config. Adding car:", car);
    return Promise.resolve({}); // Имитируем успешный ответ
}

// 4. UPDATE CAR (имитация обновления)
export const updateCar = async (carEntry: any): Promise<any> => { 
    const config = getAxiosConfig();
    console.log("UPDATE API: Token included in config. Updating car:", carEntry.url);
    return Promise.resolve({}); // Имитируем успешный ответ
}