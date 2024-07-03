// produto.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [];

  criarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  salvarProduto(produto: Produto): Observable<Produto> {
    // Lógica para salvar o produto, por exemplo:
    this.criarProduto(produto);
    return of(produto);
  }

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }
}
