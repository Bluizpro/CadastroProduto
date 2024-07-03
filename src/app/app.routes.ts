import { Routes } from '@angular/router';
import { CadastroProdutoComponent } from './components/cadastro-produto/CadastroProdutoComponent';
import { ListaProdutosComponent } from './components/lista-produto/lista-produto.component';

export const routes: Routes = [
  { path: 'cadastro-produto', component: CadastroProdutoComponent },
  { path: 'lista-produtos', component: ListaProdutosComponent },
  { path: '', redirectTo: '/cadastro-produto', pathMatch: 'full' }
];
