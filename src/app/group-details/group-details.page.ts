import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-group-details',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './group-details.page.html',
  styleUrls: ['./group-details.page.scss']
})
export class GroupDetailsPage implements OnInit {
  group: any = {};
  
  members = [
    {
      name: 'Ana Martinez',
      role: 'Líder del grupo',
      time: '2da semana',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      color: 'danger'
    },
    {
      name: 'Carlos López',
      role: 'Miembro',
      time: '3ra semana', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      color: 'tertiary'
    },
    {
      name: 'María García',
      role: 'Miembro',
      time: '4ta semana',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      color: 'warning'
    },
    {
      name: 'Juan Silva',
      role: 'Miembro', 
      time: '2da semana',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      color: 'secondary'
    },
    {
      name: 'Laura Rodríguez',
      role: 'Miembro',
      time: '6ta semana',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      color: 'success'
    }
  ];

  studySchedule = [
    {
      day: 'Lunes',
      time: '7:00 PM - 9:00 PM',
      status: 'available'
    },
    {
      day: 'Miércoles', 
      time: '6:30 PM - 8:30 PM',
      status: 'pending'
    },
    {
      day: 'Viernes',
      time: '5:00 PM - 10:00 PM',
      status: 'available'
    }
  ];

  groupInfo = {
    sessions: 'Sesiones actuales los lunes via Zoom',
    general: 'Información General',
    projectPermanent: 'Chat grupal permanente para dudas rápidas',
    noRequires: 'Sesiones no requiere asistir el exámen',
    requirements: [
      'Traer con apuntes y ejercicios',
      'Bases de ecuaciones diferencias',
      'Cálculo e integrales aplicaciones',
      'Formularios y tablas de referencia'
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Obtener datos del grupo desde los parámetros de navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.group = navigation.extras.state['group'];
    } else {
      // Datos por defecto si no se pasan parámetros
      this.group = {
        title: 'Calculus Study Group',
        subject: 'MATH 201 • Matemáticas Avanzadas',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
        members: 5,
        active: 'Active 2 hours ago'
      };
    }
  }

  goBack() {
    this.router.navigate(['/tabs/tab3']);
  }

  joinGroup() {
    console.log('Joining group...');
    // Implementar lógica para unirse al grupo
  }

  chatGroup() {
    console.log('Opening group chat...');
    // Implementar lógica para abrir chat del grupo
  }

  viewResources() {
    console.log('Viewing resources...');
    // Implementar lógica para ver recursos
  }
}