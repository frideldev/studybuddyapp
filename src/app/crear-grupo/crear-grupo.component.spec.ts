import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CrearGrupoComponent } from './crear-grupo.component';

describe('CrearGrupoComponent', () => {
  let component: CrearGrupoComponent;
  let fixture: ComponentFixture<CrearGrupoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CrearGrupoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
