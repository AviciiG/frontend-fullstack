import '@testing-library/jest-dom'; 
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Все предыдущие vi.mock() удалены, так как они больше не нужны

afterEach(() => {
  cleanup();
});