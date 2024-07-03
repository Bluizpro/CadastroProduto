import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../service/ProdutoService.service';
import { Produto } from '../../models/Produto';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from 'express';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
  produtoForm: FormGroup;

  constructor(private router: Router, private produtoService: ProdutoService) {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      disponivel: [false]
    });
  }

  onSubmit() {
    // Salvar o produto
    // Salvar o produto
    this.produtoService['salvarProduto'](this.produtoForm.value)
      .subscribe(() => {
        this.router.navigate(['/lista-produtos']);
      });
  }
}


