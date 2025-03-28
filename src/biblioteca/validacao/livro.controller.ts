import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

class Livro {
  id: number;
  titulo: string;
  autor: string;
  anoPublicacao: number;
  genero: string;
  sinopse: string;
}

@Controller('livros')
export class LivroController {
  private livros: Livro[] = [];

  
  @Post()
  create(@Body() livro: Livro): Livro {
    this.livros.push(livro);
    return livro;
  }
  @Get()
  findAll(): Livro[] {
    return this.livros;
  }
  @Get(':id')
  findOne(@Param('id') id: string): Livro | string {
    
    const livro = this.livros.find(livro => livro.id === Number(id));
    if (!livro) {
      return 'Livro não encontrado'; 
    }
    return livro;
  }

  
  @Put(':id')
  update(@Param('id') id: string, @Body() livro: Livro): Livro | string {
    const index = this.livros.findIndex(l => l.id === Number(id));
    if (index === -1) {
      return 'Livro não encontrado'; 
    }
    this.livros[index] = livro;
    return this.livros[index];
  }

  
  @Delete(':id')
  remove(@Param('id') id: string): string {
    const index = this.livros.findIndex(livro => livro.id === Number(id));
    if (index > -1) {
      this.livros.splice(index, 1);
      return 'Livro deletado com sucesso';
    }
    return 'Livro não encontrado'; 
  }
}