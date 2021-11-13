import { Component, OnInit } from '@angular/core';
import { Afd } from 'afd/afd';

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
  desabilitaA: boolean = false;
  desabilitaB: boolean = false;
  desabilitaC: boolean = false;

  constructor() { }

  ngOnInit(): void {
    // Afd.main();
    console.log(Afd.posicao)
  }

  habilitaObjetos(): void {
    if(this.valorTotal > 8){
      this.desabilitaA = true;
      this.desabilitaB = true;
      this.desabilitaC = true;
    }else{
      this.desabilitaA = false;
      this.desabilitaB = false;
      this.desabilitaC = false;
    }
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
    Afd.main(this.valorTotal, "");
    this.habilitaObjetos();
    this.verificaValoresSoma();
  }

  adicionaDois(): void {
    this.valorTotal += 2;
    Afd.main(this.valorTotal, "");
    this.habilitaObjetos();
    this.verificaValoresSoma();
  }

  adicionaCinco(): void {
    this.valorTotal += 5;
    Afd.main(this.valorTotal, "");
    this.habilitaObjetos();
    this.verificaValoresSoma();
  }

  verificaValoresSoma(): void{
    if((this.valorTotal + 1) > 9){
      this.desabilitaA = true;
    }
    if((this.valorTotal + 2) > 9){
      this.desabilitaB = true;
    }
    if((this.valorTotal + 5) > 9){
      this.desabilitaC = true;
    }
  }

  recuperaDoceA(): void {
    Afd.main(this.valorTotal, "a");
    this.valorTotal = Afd.troco;
    if(this.valorTotal === 0){
      alert("Você recuperou o Doce A. Não há valor de troco");
    }
    else{
      alert("Você recuperou o Doce A. Seu troco é de: R$ " + this.valorTotal + ",00");
    }
    this.valorTotal = 0;
    this.habilitaObjetos();
    console.log(this.valorTotal)
  }

  recuperaDoceB(): void {
    Afd.main(this.valorTotal, "b");
    this.valorTotal = Afd.troco;
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
    Afd.main(this.valorTotal, "c");
    this.valorTotal = Afd.troco;
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
