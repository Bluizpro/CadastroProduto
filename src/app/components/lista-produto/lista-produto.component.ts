import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../service/ProdutoService.service';
import { Produto } from '../../models/Produto';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produto.component.html',
  styleUrl: './lista-produto.component.scss'
})
export class ListaProdutosComponent implements OnInit  {
  produtos: Produto[];

  constructor(private produtoService: ProdutoService,private router: Router) {
    this.produtos = [];
  }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos()
      .subscribe(produtos => this.produtos = produtos.sort((a, b) => a.valor - b.valor));
  }

  onNovoProduto() {
    this.router.navigate(['/cadastro-produto']);

  }
}

