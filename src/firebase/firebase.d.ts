// Type declarations for Firebase modules
declare module 'firebase/app' {
  export interface FirebaseApp {}
  export function initializeApp(config: any): FirebaseApp;
}

declare module 'firebase/firestore' {
  export interface Firestore {}
  export function getFirestore(app: any): Firestore;
  export function collection(firestore: any, collectionPath: string): any;
  export function addDoc(reference: any, data: any): Promise<{id: string}>;
  export function serverTimestamp(): any;
  export interface Timestamp {
    toDate(): Date;
  }
}

declare module 'firebase/analytics' {
  export function getAnalytics(app: any): any;
}
