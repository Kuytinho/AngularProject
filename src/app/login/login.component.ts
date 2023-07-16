import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private router: Router) {
    this.username = '';
    this.password = '';
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'senha123') {
      console.log('Login bem-sucedido!');
      this.router.navigate(['/dashboard']); // Redireciona para a rota 'dashboard'
    } else {
      console.log('Credenciais inválidas!');
    }

    // login(): void {
    //   const credentials = {
    //     username: this.username,
    //     password: this.password
    //   };
  
    //   // Chamada para a API simulada 
    //   this.http.post('https://api.example.com/login', credentials).subscribe(
    //     (response: any) => {
    //       // Login bem-sucedido
    //       console.log('Login bem-sucedido!');
    //     },
    //     (error) => {
    //       // Erro no login
    //       console.log('Credenciais inválidas!');
    //       // Exibir mensagem de erro ou realizar outras ações
    //     }
  }
}

