import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizModule } from './quiz/quiz.module';
import { QuizRepository } from './quiz/Repository/quiz.repository';
import { Quiz } from './quiz/entities/quiz.entity';

@Module({
  imports: [
    QuizRepository,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:[".local.env"]

    }),
    TypeOrmModule.forRoot({
      type: 'postgres'
      ,
      host:'localhost',
      port: 5432

      

      , username: 'postgres'
      ,
      password: "niteg"
      ,
      database: "name"
      ,
      
      entities: [Quiz],
      synchronize:true      
    }),
    QuizModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
