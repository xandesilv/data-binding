import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training';
  cursoAngular: boolean = true ;
  urlImagem = 'https://picsum.photos/id/237/200/300';
  valorAtual: string = '';
  valorSalvo: string = '';
  isShown =  false;
  isMouseOver = false;

  nomeDoCurso = 'Angular';

  valorInicial = 15;

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
    this.isShown = true;
    setTimeout( () => {
      this.isShown = false;}
      , 3000 ,  );
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
