export class ListaLivrosDTO{
    constructor(
        readonly id: string,
        readonly titulo: string,
        readonly autor: string,
        readonly anoPublicacao: number,
        readonly genero: string,
        readonly sinopse: string,
    
        //readonly assinatura: string,
        // readonly senha: string,
        // readonly foto: string,
    ){}
}