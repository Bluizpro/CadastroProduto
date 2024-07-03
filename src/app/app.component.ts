import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroProdutoComponent } from './components/cadastro-produto/CadastroProdutoComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CadastroProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'testeProva';
}
