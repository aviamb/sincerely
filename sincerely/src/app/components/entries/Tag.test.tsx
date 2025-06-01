import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tag from './Tag';

describe('Tag component', () => {
  test('renders the tag text', () => {
    render(<Tag text="#test" color="bg-blue" hover="hover:bg-blue-hover" selected={false} />);
    expect(screen.getByText('#test')).toBeInTheDocument();
  });

  test('adds asterisk when selected', () => {
    render(<Tag text="#test" color="bg-blue" hover="hover:bg-blue-hover" selected={true} />);
    expect(screen.getByText('#test*')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Tag text="#test" color="bg-blue" hover="hover:bg-blue-hover" selected={false} onClick={handleClick} />);
    fireEvent.click(screen.getByText('#test'));
    expect(handleClick).toHaveBeenCalled();
  });
});
