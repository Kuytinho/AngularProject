import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display name error message when name exceeds the limit', () => {
    component.cardName = 'Nome muito longo para testar';
    component.createCard();
    fixture.detectChanges();

    const nameErrorElement = fixture.debugElement.query(By.css('.name-error'));
    expect(nameErrorElement).toBeTruthy();

    const errorMessage = nameErrorElement.nativeElement.textContent;
    expect(errorMessage).toContain('O nome deve ter no máximo 10 letras.');
  });

  it('should display image error message when image is missing', () => {
    component.cardName = 'Nome válido';
    component.cardImage = '';
    component.createCard();
    fixture.detectChanges();

    const imageErrorElement = fixture.debugElement.query(By.css('.image-error'));
    expect(imageErrorElement).toBeTruthy();

    const errorMessage = imageErrorElement.nativeElement.textContent;
    expect(errorMessage).toContain('A imagem é obrigatória.');
  });
});
