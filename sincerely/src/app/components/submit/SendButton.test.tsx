'use client';

import { render } from '@testing-library/react';
import SendButton from './SendButton';

test('renders SendButton without crashing', () => {
  render(<SendButton />);
});
