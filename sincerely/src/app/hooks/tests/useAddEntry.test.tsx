const { initializeApp, deleteApp } = require('firebase/app');
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  connectFirestoreEmulator,
  setLogLevel
} from 'firebase/firestore';

// Custom Firebase config for local testing
const firebaseConfig = {
  apiKey: "AIzaSyDkaBDZm7W6FwC2koG2iMDIDViaU7BYrxY",
  authDomain: "sincerely-eb8a6.firebaseapp.com",
  projectId: "sincerely-eb8a6",
  storageBucket: "sincerely-eb8a6.firebasestorage.app",
  messagingSenderId: "353310573294",
  appId: "1:353310573294:web:06475f5fcae7cf98c369ff",
  measurementId: "G-F0T1EB016R"
};

let db;
let app;

beforeAll(async () => {
  jest.setTimeout(10000); // Extend timeout for slow startup

  app = initializeApp(firebaseConfig); // Assign to outer scope
  db = getFirestore(app);

  connectFirestoreEmulator(db, 'localhost', 8080);
  setLogLevel('error');
});

afterAll(async () => {
  await deleteApp(app); // Clean up app properly
  await new Promise(resolve => setTimeout(resolve, 100)); // Optional: tiny buffer
});

// Test for text field
test('should add and retrieve an entry with text', async () => {
  const docRef = doc(collection(db, 'entries'), 'test-entry-text');
  const entryData = { entry: 'Test Message' };

  // Add the entry to Firestore
  await setDoc(docRef, entryData);

  // Retrieve the entry from Firestore
  const docSnapshot = await getDoc(docRef);
  const data = docSnapshot.data();

  // Check that the entry contains the expected text value
  expect(data?.entry).toBe('Test Message');
});

// Test for tags field
test('should add and retrieve an entry with tags', async () => {
  const docRef = doc(collection(db, 'entries'), 'test-entry-tags');
  const entryData = { entry: 'Test Message', tags: ['tag1', 'tag2'] };

  // Add the entry to Firestore
  await setDoc(docRef, entryData);

  // Retrieve the entry from Firestore
  const docSnapshot = await getDoc(docRef);
  const data = docSnapshot.data();

  // Check that the entry contains the expected tags
  expect(data?.tags).toEqual(['tag1', 'tag2']);
});
