import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [AuthService] // Provee el servicio aquí
})
export class LoginPage {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onLogin() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter email and password';
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    try {
      await this.authService.signIn(this.email, this.password);
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error('Login error:', error);
      this.errorMessage = 'Invalid email or password';
    } finally {
      this.isLoading = false;
    }
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}