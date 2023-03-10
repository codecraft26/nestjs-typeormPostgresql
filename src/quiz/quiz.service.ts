import { Injectable } from '@nestjs/common';


import { InjectRepository } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizService {

  constructor(@InjectRepository(Quiz) private employeeRepo: Repository<Quiz>) {}
  findAll(): Promise<Quiz[]> {
    return this.employeeRepo.find();
  }

  create(createDto:CreateQuizDto):Promise<Quiz>{
    return this.employeeRepo.save(createDto)
  }
  delete(id:number):string{

    this.employeeRepo.delete(id)

return `id${id } delete successfully`

  }

  findById(id:number):Promise<Quiz>{
    return this.employeeRepo.findOneById(id);
  }

  
}
