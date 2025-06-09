import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth_service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.style.css', './register.globals.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  errorMsg = '';
  successMsg = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onRegister() {
    if (this.loading) return;
    
    this.errorMsg = '';
    this.successMsg = '';

    if (!this.fullName || !this.email || !this.password) {
      this.errorMsg = 'Por favor, completa todos los campos.';
      return;
    }

    this.loading = true;
    try {
      const user = await this.authService.createAccount(this.email, this.password);
      if (user) {
        this.successMsg = '¡Registro exitoso!';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      } else {
        this.errorMsg = 'Error al crear la cuenta. Intenta de nuevo';
      }
    } catch (error: any) {
      console.error('Error en registro:', error);
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.errorMsg = 'Este correo ya está registrado';
          break;
        case 'auth/invalid-email':
          this.errorMsg = 'Correo electrónico inválido';
          break;
        case 'auth/weak-password':
          this.errorMsg = 'La contraseña debe tener al menos 6 caracteres';
          break;
        default:
          this.errorMsg = 'Error al crear la cuenta. Intenta de nuevo';
      }
    } finally {
      this.loading = false;
    }
  }
}
