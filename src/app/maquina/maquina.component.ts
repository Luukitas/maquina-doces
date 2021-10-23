import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.css']
})
export class MaquinaComponent implements OnInit {

  valorTotal: number = 0;
  abrirObjetoA: boolean = false;
  abrirObjetoB: boolean = false;
  abrirObjetoC: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  habilitaObjetos(): void {
    this.abrirObjetoA= false;
    this.abrirObjetoB = false;
    this.abrirObjetoC = false;
    if(this.valorTotal >= 6){
      this.abrirObjetoA = true;
    }
    if(this.valorTotal >= 7){
      this.abrirObjetoB = true;
    }
    if(this.valorTotal >= 8){
      this.abrirObjetoC = true;
    }
  }

  adicionaUm(): void {
    this.valorTotal += 1;
    this.habilitaObjetos();
  }

  adicionaDois(): void {
    this.valorTotal += 2;
    this.habilitaObjetos();
  }

  adicionaCinco(): void {
    this.valorTotal += 5;
    this.habilitaObjetos();
  }

  recuperaDoceA(): void {
    this.valorTotal -= 6;
    if(this.valorTotal === 0){
      alert("Você recuperou o Doce A. Não há valor de troco");
    }
    else{
      alert("Você recuperou o Doce A. Seu troco é de: R$ " + this.valorTotal + ",00");
    }
    this.valorTotal = 0;
    this.habilitaObjetos();

  }

  recuperaDoceB(): void {
    this.valorTotal -= 7;
    if(this.valorTotal === 0){
      alert("Você recuperou o Doce B. Não há valor de troco");
    }
    else{
      alert("Você recuperou o Doce B. Seu troco é de: R$ " + this.valorTotal + ",00");
    }
    this.valorTotal = 0;
    this.habilitaObjetos();
    
  }

  recuperaDoceC(): void {
    this.valorTotal -= 8;
    if(this.valorTotal === 0){
      alert("Você recuperou o Doce C. Não há valor de troco");
    }
    else{
      alert("Você recuperou o Doce C. Seu troco é de: R$ " + this.valorTotal + ",00");
    }
    this.valorTotal = 0;
    this.habilitaObjetos();
    
  }

}
