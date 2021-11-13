export class Afd{
    static elemento: string = '';
    static posicao: number = 0;
    static retorno: any = {};
    static troco: number = 0;
    static valorProduto: number = 0;
    
    static main (valor: number, elemento: string) {

        this.posicao = valor;
        this.elemento = elemento;

        if(this.elemento === ""){ this.valorProduto = 0; this.troco = 0}
        if(this.elemento === "a"){ this.valorProduto = 6;}
        if(this.elemento === "b"){ this.valorProduto = 7;}
        if(this.elemento === "c"){ this.valorProduto = 8;}

        if(this.posicao === 0){ this.posicao;}
        else if(this.posicao === 1){ this.posicao;}
        else if(this.posicao === 2){ this.posicao;}
        else if(this.posicao === 3){ this.posicao;}
        else if(this.posicao === 4){ this.posicao;}
        else if(this.posicao === 5){ this.posicao;}
        else if(this.posicao === 6){ this.posicao;}
        else if(this.posicao === 7){ 
            this.posicao;
            this.troco = this.posicao - this.valorProduto;
        }
        else if(this.posicao === 8){ 
            this.posicao;
            this.troco = this.posicao - this.valorProduto;
        }
        else if(this.posicao === 9){ 
            this.posicao;
            this.troco = this.posicao - this.valorProduto;
        }
        else if(this.posicao > 9){
            this.posicao;
            this.troco = this.posicao - this.valorProduto;
        }
    }
    
}
