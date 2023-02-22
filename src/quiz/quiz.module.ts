import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './entities/quiz.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
  imports: [TypeOrmModule.forFeature([Quiz])],
})
export class QuizModule {}
