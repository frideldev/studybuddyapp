// intro.page.ts - Componente Standalone
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

// Registrar Swiper
register();

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class IntroPage {
  @ViewChild('swiper') swiper: any;

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    speed: 400
  };

  slides_data = [
    {
      id: 1,
      title: 'Track Your Academic Journey',
      description: 'Keep all your assignments, exams, and study sessions organized in one place.',
      image: 'assets/images/intro1.jpg'
    },
    {
      id: 2,
      title: 'Never Miss a Deadline',
      description: 'Get reminders for upcoming assignments and exams so you\'re always prepared.',
      image: 'assets/images/intro2.jpg'
    },
    {
      id: 3,
      title: 'Collaborate with Classmates',
      description: 'Create study groups, share notes, and work on projects together.',
      image: 'assets/images/intro3.jpg'
    },
    {
      id: 4,
      title: 'Achieve Your Academic Goals',
      description: 'Track your progress and celebrate your academic achievements along the way.',
      image: 'assets/images/intro4.jpg'
    }
  ];

  currentSlide = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializar el slide actual
    this.currentSlide = 0;
  }

  slideChanged(event: any) {
    this.currentSlide = event.detail[0].activeIndex;
  }

  nextSlide() {
    if (this.currentSlide === this.slides_data.length - 1) {
      this.getStarted();
    } else {
      this.swiper.nativeElement.swiper.slideNext();
    }
  }

  previousSlide() {
    this.swiper.nativeElement.swiper.slidePrev();
  }

  skipIntro() {
    this.getStarted();
  }

  getStarted() {
    // Marcar que el intro ya fue completado
    localStorage.setItem('introCompleted', 'true');
    // Navegar a la página principal o login
    this.router.navigate(['/tabs/tab1']); // Cambia por tu ruta principal
  }

  goToSlide(index: number) {
    this.swiper.nativeElement.swiper.slideTo(index);
  }
}