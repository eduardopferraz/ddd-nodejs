import { Answer } from "../../enterprise/entities/answer";

export interface AnswerSRepository {
    create(answer: Answer): Promise<void>
}