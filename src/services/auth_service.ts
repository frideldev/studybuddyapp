
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
  UserCredential
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  collection,
  getDocs
} from 'firebase/firestore';
import { firebaseConfig } from '../app/firebase-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);
  private firestore = getFirestore(this.app);

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  async signIn(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async createAccount(email: string, password: string): Promise<User | null> {
    try {
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = result.user;
      if (user) {
        const username = email.split('@')[0];
        await setDoc(doc(this.firestore, 'users', user.uid), {
          email: email,
          username: username,
          registrationDate: serverTimestamp(),
          lastLoginDate: serverTimestamp()
        });
      }
      return user;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      return null;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Sesión cerrada con éxito');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  async getAllUsers(): Promise<any[]> {
    try {
      const querySnapshot = await getDocs(collection(this.firestore, 'users'));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      return [];
    }
  }
}
