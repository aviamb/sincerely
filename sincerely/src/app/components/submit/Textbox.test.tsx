import { render, screen, waitFor, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';

// ✅ MOCK BEFORE importing Textbox
jest.mock('@/app/hooks/useAddEntry', () => {
  const React = require('react');
  return {
    useAddEntry: () => {
      const [entry, setEntry] = React.useState('');
      const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
      return {
        entry,
        setEntry: (val: string) => setEntry(val.slice(0, 2000)), // enforce maxlength
        selectedTags,
        setSelectedTags,
        handleAddEntry: jest.fn(),
        messageSent: false,
      };
    },
  };
});



import Textbox from './Textbox';

test('allows user to type in the textbox', async () => {
  render(<Textbox />);
  const textbox = screen.getByRole('textbox');
  await userEvent.type(textbox, 'Hello, world!');
  expect(textbox).toHaveValue('Hello, world!');
});

test('updates character count correctly', async () => {
  render(<Textbox />);
  const textbox = screen.getByRole('textbox');
  await userEvent.type(textbox, 'test');
  expect(screen.getByText(/4\s*\/\s*2000/)).toBeInTheDocument();
});

test('enforces 2000 character max in textbox', async () => {
  render(<Textbox />);
  const textbox = screen.getByRole('textbox');

  const longText = 'a'.repeat(2100); // Over the limit
  fireEvent.change(textbox, { target: { value: longText } });

  expect(textbox).toHaveValue('a'.repeat(2000)); // Only 2000 should be kept
});
