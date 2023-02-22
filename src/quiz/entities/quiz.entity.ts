import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("quizes")

export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:String
    @Column()
    type:String
    

}