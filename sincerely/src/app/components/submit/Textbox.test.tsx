import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import Textbox from './Textbox';

const mockEntryHook = {
  entry: '',
  setEntry: jest.fn(),
  handleAddEntry: jest.fn(),
  selectedTags: [],
  setSelectedTags: jest.fn(),
};

const mockUploadHook = {
  previewUrl: '',
  handleUpload: jest.fn().mockResolvedValue('https://example.com/image.png'),
  fileName: '',
  setPreviewUrl: jest.fn(),
};

describe('Textbox', () => {
  test('renders without crashing', () => {
    render(<Textbox entryHook={mockEntryHook} upload={mockUploadHook} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('allows user to type in the textbox', () => {
    render(<Textbox entryHook={mockEntryHook} upload={mockUploadHook} />);
    const textarea = screen.getByRole('textbox');
    fireEvent.change(textarea, { target: { value: 'hello world' } });
    expect(mockEntryHook.setEntry).toHaveBeenCalledWith('hello world');
  });
});
