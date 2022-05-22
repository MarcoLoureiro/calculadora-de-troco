import { verificaTroco } from "../models/Compra";


describe('testing verificaTroco function',() =>{
    test('Verificar troco em notas', () =>{
        expect(verificaTroco(931)).toBe('Notas de 100R$: 9, Notas de 10R$: 3, Notas de 1R$: 1');
    });
});