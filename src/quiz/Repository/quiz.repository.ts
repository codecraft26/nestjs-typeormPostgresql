import { Quiz } from "src/quiz/entities/quiz.entity";
import {  EntityRepository, Repository } from "typeorm";
import { deprecate } from "util";


EntityRepository(Quiz)

export class QuizRepository extends Repository<Quiz>{
    
}