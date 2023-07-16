import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    component = new LoginComponent(router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to dashboard on successful login', () => {
    component.username = 'admin';
    component.password = 'senha123';

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should display error message on invalid credentials', () => {
    component.username = 'admin';
    component.password = 'senha456';
  
    spyOn(console, 'log'); 
  
    component.login();
  
    expect(console.log).toHaveBeenCalledWith('Credenciais inválidas!');
  });

  it('should display error message when username is empty', () => {
    component.username = '';
    component.password = 'senha123';
  
    spyOn(console, 'log');
  
    component.login();
  
    expect(console.log).toHaveBeenCalledWith('Credenciais inválidas!');
  });

  it('should display error message when password is empty', () => {
    component.username = 'admin';
    component.password = '';
  
    spyOn(console, 'log'); 
  
    component.login();
  
    expect(console.log).toHaveBeenCalledWith('Credenciais inválidas!');
  });
  
  

});
