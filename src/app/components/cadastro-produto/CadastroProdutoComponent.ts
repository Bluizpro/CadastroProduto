import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../../service/ProdutoService.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule
  ],
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.scss'
})
export class CadastroProdutoComponent {
  produtoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService, private router: Router) {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      disponivel: [false]
    });
  }

  onSubmit() {
    // Salvar o produto

    this.produtoService['salvarProduto'](this.produtoForm.value)
      .subscribe(() => {
        this.router.navigate(['/lista-produtos']);
      });
  }
}
