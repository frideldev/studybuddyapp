import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CrearGrupoComponent } from '../crear-grupo/crear-grupo.component';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss']
})
export class Tab3Page {
  studyGroups = [
    {
      title: 'Calculus Study Group',
      subject: 'MATH 201',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      active: 'Active 2 hours ago',
      members: 5
    },
    {
      title: 'Physics Lab Partners',
      subject: 'PHYS 101',
      image: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg',
      active: 'Active Yesterday',
      members: 3
    },
    {
      title: 'Programming Project Team',
      subject: 'MATH 201',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg',
      active: 'Active just now',
      members: 4
    }
  ];

  constructor(private modalCtrl: ModalController) {}

  async CREATEGROUP() {
    const modal = await this.modalCtrl.create({
      component: CrearGrupoComponent
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    if (data) {
      this.studyGroups.unshift(data);
    }
  }
}