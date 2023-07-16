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

  it('should create a new card', () => {
    component.cardName = 'Card 1';
    component.cardImage = 'image.jpg';
    component.cardStrength = 10;
    component.cardIntelligence = 5;
    component.cardBeauty = 6;
  
    component.createCard();
  
    expect(component.cardList.length).toBe(1);
    expect(component.cardList[0].name).toBe('Card 1');
    expect(component.cardList[0].image).toBe('image.jpg');
    expect(component.cardList[0].strength).toBe(10);
    expect(component.cardList[0].intelligence).toBe(5);
    expect(component.cardList[0].beauty).toBe(6);
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

  it('should show attributes warning for sum of attributes greater than 21', () => {
    component.cardStrength = 15;
    component.cardIntelligence = 8;
    component.cardBeauty = 5;
  
    component.createCard();
  
    expect(component.showAttributesWarning).toBeTrue();
    expect(component.cardList.length).toBe(0);
  });

  it('should display the list of cards', () => {
    component.cardName = 'Card 1';
    component.cardImage = 'image1.jpg';
    component.cardStrength = 10;
    component.cardIntelligence = 5;
    component.cardBeauty = 6;
    component.createCard();
  
    component.cardName = 'Card 2';
    component.cardImage = 'image2.jpg';
    component.cardStrength = 8;
    component.cardIntelligence = 7;
    component.cardBeauty = 6;
    component.createCard();
  
    fixture.detectChanges();
  
    const cardElements = fixture.nativeElement.querySelectorAll('.card');
    expect(cardElements.length).toBe(2);
  
    const card1Header = cardElements[0].querySelector('.card-header').textContent;
    const card1Image = cardElements[0].querySelector('.card-image img').src;
    const card1Strength = cardElements[0].querySelector('.card-details p:nth-child(1)').textContent;
    const card1Intelligence = cardElements[0].querySelector('.card-details p:nth-child(2)').textContent;
    const card1Beauty = cardElements[0].querySelector('.card-details p:nth-child(3)').textContent;
  
    expect(card1Header).toContain('Card 1');
    expect(card1Image).toContain('image1.jpg');
    expect(card1Strength).toContain('10');
    expect(card1Intelligence).toContain('5');
    expect(card1Beauty).toContain('6');
  });
});
