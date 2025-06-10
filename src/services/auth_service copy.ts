// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, User, UserCredential } from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
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

  // Login
  async signIn(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  // Registro + documento en Firestore
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
}
