import { Request,Response } from "express";
import { verificaTroco } from "../models/Compra";


export const compra = (req:Request,res:Response) =>{
    let valorPago:number = parseInt(req.query.valorPago as string);
    let valor:number = parseInt(req.query.valor as string);
    let troco:string = '';
    troco = verificaTroco((valorPago-valor));
    let show:boolean = false;

if(troco!='' && valor!=0){
    show=true
}

res.render('pages/home',{
    show,
    troco,
    valor
});

} 