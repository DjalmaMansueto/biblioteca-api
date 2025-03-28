import { Module } from '@nestjs/common';
import { LivroModule } from './biblioteca/validacao/livro.module';


@Module({
  imports: [LivroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}