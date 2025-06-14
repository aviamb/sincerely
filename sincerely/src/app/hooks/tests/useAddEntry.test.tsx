jest.mock('firebase/firestore', () => ({
  getFirestore: jest.fn(() => ({} as unknown)),
  collection: jest.fn(() => ({} as unknown)),
  addDoc: jest.fn(() => Promise.resolve()),
  query: jest.fn(),
  orderBy: jest.fn(),
  serverTimestamp: jest.fn(() => 'mocked-timestamp'),
  onSnapshot: jest.fn(),
}));

import { renderHook, act, waitFor } from '@testing-library/react';
import { useAddEntry } from '../useAddEntry';
import {
  // collection,
  addDoc,
  onSnapshot,
  // serverTimestamp,
} from 'firebase/firestore';

describe('useAddEntry', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should add and retrieve an entry with text', async () => {
    const entryText = 'Test Message';
    const fakeEntry = {
      id: '123',
      entry: entryText,
      timestamp: 'mocked-timestamp',
      tags: [],
    };

    // Mock onSnapshot to simulate incoming data
    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      callback({
        docs: [
          {
            id: '123',
            data: () => fakeEntry,
          },
        ],
      });
      return () => {}; // unsubscribe
    });

    const { result } = renderHook(() => useAddEntry());

    act(() => {
      result.current.setEntry(entryText);
    });

    await act(async () => {
      await result.current.handleAddEntry();
    });

    expect(addDoc).toHaveBeenCalledWith(expect.anything(), {
      entry: entryText,
      timestamp: 'mocked-timestamp',
      tags: [],
      imageUrl: null,
    });

    await waitFor(() =>
      expect(result.current.entries).toEqual([
        {
          id: '123',
          text: entryText,
          timestamp: 'mocked-timestamp',
          tags: [],
          imageUrl: undefined,
        },
      ])
    );
  });
});
