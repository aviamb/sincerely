import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Entry from './Entry';

describe('Entry component', () => {
  it('renders text without Spotify iframe when no URL is provided', () => {
    render(
      <Entry
        id="1"
        text="This is a simple entry"
        timestamp={{ toDate: () => new Date('2023-01-01T00:00:00Z') }}
      />
    );
    expect(screen.getByText('This is a simple entry')).toBeInTheDocument();
    expect(screen.queryByTitle('Spotify Preview')).not.toBeInTheDocument();
  });

  it('renders Spotify iframe and hides Spotify URL from text', () => {
    render(
      <Entry
        id="2"
        text="Check this out https://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6"
        timestamp={{ toDate: () => new Date('2023-01-01T00:00:00Z') }}
      />
    );
    expect(screen.queryByText(/spotify/i)).not.toBeInTheDocument(); // URL should be stripped
    expect(screen.getByTitle('Spotify Preview')).toBeInTheDocument(); // iframe renders
  });
});