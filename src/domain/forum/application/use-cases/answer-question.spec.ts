import { AnswerQuestionUseCase } from "./answer-question"
import { InMemoryAnswersRepository } 
  from 'test/repositories/in-memory-answers-repository'
  
  let inMemoryRepository: InMemoryAnswersRepository
  let sut: AnswerQuestionUseCase

describe('Create Answer', () => {

  beforeEach(() => {
    inMemoryRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryRepository)
  })  
 
  it('should be able to create an answer', async () => {
    const answer = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteúdo da resposta',
    })
    expect(answer.content).toEqual('Conteúdo da resposta')
    expect(inMemoryRepository.items[0].id).toEqual(answer.id)
  })
})