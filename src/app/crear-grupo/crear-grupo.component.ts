import { Component } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-grupo',
  standalone: true,
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule],
})
export class CrearGrupoComponent {
  groupName = '';
  subject = '';
  members = 1;
  status = 'Active just now';
  imageUrl = '';

  constructor(private modalCtrl: ModalController) {}

  CANCELAR() {
    this.modalCtrl.dismiss();
  }

  GUARDAR() {
    const nuevoGrupo = {
      title: this.groupName,
      subject: this.subject,
      members: this.members,
      active: this.status,
      image: this.imageUrl || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    };
    this.modalCtrl.dismiss(nuevoGrupo);
  }
}