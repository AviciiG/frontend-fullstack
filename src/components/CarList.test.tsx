import '@testing-library/jest-dom'; 
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe, vi } from 'vitest';
import CarList from './CarList'; 

// Моковые данные для тестирования
const mockCars = [
  { id: 1, brand: 'Ford', model: 'Focus' },
  { id: 2, brand: 'Kia', model: 'Ceed' },
];

// Моковые функции (шпионы), чтобы проверить, что они были вызваны
const mockOnDelete = vi.fn();
const mockOnEdit = vi.fn();

describe('CarListTest - Lab13(Assemzhan)', () => {

  // ----------------------------------------------------------------
  // ТЕСТ 1: Проверка рендеринга данных в DataGrid
  // ----------------------------------------------------------------
  test('should render cars data correctly in the DataGrid', () => {
    render(<CarList cars={mockCars} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    expect(screen.getByText(/Brand/i)).toBeInTheDocument();
    expect(screen.getByText(/Model/i)).toBeInTheDocument();
    
    expect(screen.getByText('Ford')).toBeInTheDocument();
    expect(screen.getByText('Focus')).toBeInTheDocument();
    expect(screen.getByText('Kia')).toBeInTheDocument();
    expect(screen.getByText('Ceed')).toBeInTheDocument();

    const deleteButtons = screen.getAllByLabelText('delete');
    const editButtons = screen.getAllByLabelText('edit');
    expect(deleteButtons).toHaveLength(mockCars.length);
    expect(editButtons).toHaveLength(mockCars.length);
  });
  test('should call onDelete function with correct ID when delete button is clicked', () => {
    render(<CarList cars={mockCars} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    const deleteButtons = screen.getAllByLabelText('delete');
    fireEvent.click(deleteButtons[0]);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });

  test('should call onEdit function with the car object when edit button is clicked', () => {
    render(<CarList cars={mockCars} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    const editButtons = screen.getAllByLabelText('edit');
    fireEvent.click(editButtons[1]);
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledWith(mockCars[1]);
  });
});