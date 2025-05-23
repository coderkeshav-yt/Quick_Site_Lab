// Type declarations for Firebase modules
declare module 'firebase/app' {
  export interface FirebaseOptions {
    apiKey?: string;
    authDomain?: string;
    databaseURL?: string;
    projectId?: string;
    storageBucket?: string;
    messagingSenderId?: string;
    appId?: string;
    measurementId?: string;
  }

  export interface FirebaseApp {
    name: string;
    options: FirebaseOptions;
  }

  export function initializeApp(options: FirebaseOptions, name?: string): FirebaseApp;
}

declare module 'firebase/firestore' {
  import { FirebaseApp } from 'firebase/app';
  
  export interface DocumentData {
    [key: string]: any;
  }

  export interface QueryDocumentSnapshot {
    id: string;
    data(): DocumentData;
  }

  export interface DocumentReference {
    id: string;
  }

  export interface CollectionReference {
    doc(documentPath?: string): DocumentReference;
  }

  export interface Firestore {
    collection(collectionPath: string): CollectionReference;
  }

  export function getFirestore(app: FirebaseApp): Firestore;
  export function collection(firestore: Firestore, collectionPath: string): CollectionReference;
  export function addDoc(reference: CollectionReference, data: DocumentData): Promise<DocumentReference>;
  export function serverTimestamp(): any;
  export function Timestamp(seconds: number, nanoseconds: number): any;
}

declare module 'firebase/analytics' {
  import { FirebaseApp } from 'firebase/app';
  
  export interface Analytics {}
  export function getAnalytics(app: FirebaseApp): Analytics;
}
