

export const verificaTroco = (valor:number):string =>{
    let nota1:number=0;
    let nota2:number=0;
    let nota3:number=0;
    let troco:string='';
    let show:boolean=false;
    while(valor>0){
    if(valor>=100){
        nota1 = Math.floor(valor/100);
        valor = valor-nota1*100;
            if(valor>=10 && valor<100){
                nota2 = Math.floor(valor/10);
                valor = valor-nota2*10;
                    if(valor>=1 && valor<10){
                        nota3 = valor/1;
                        valor = valor - nota3;
                    } 
            }
    }else 

    if(valor>=10 && valor<100){
        nota2 = Math.floor(valor/10);
        valor = valor-nota2*10;
            if(valor>=1 && valor<10){
                Math.floor(nota3 = valor/1);
                valor = valor - nota3;
            } 
    }else 

    if(valor>=1 && valor<10){
        nota3 = Math.floor(valor/1);
        valor = valor - nota3;
    } 
}

if(nota1 || nota2 || nota3){
troco = `Notas de 100R$: ${nota1}, Notas de 10R$: ${nota2}, Notas de 1R$: ${nota3}`;
}
    return troco;
}