import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get()
 async getAll(@Body() createQuizDto: CreateQuizDto) :Promise<Quiz[]>{
   return await this.quizService.findAll();
  }
  
  @Post()
  async create( @Body() createDto:CreateQuizDto):Promise<Quiz>{
    return await this.quizService.create(createDto)
  }

 
}
