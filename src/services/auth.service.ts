import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Asegúrate de que este archivo exista y tenga la configuración correcta
import { firebaseConfig } from '../app/firebase-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private app = initializeApp(firebaseConfig);
  private auth = getAuth(this.app);

  async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}