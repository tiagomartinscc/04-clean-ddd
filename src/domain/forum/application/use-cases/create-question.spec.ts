import { InMemoryQuestionsRepository } from "test/repositories/in-memory-questions-repository"
import { CreateQuestionUseCase } from "./create-question"

let inMemoryRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {

  beforeEach(() => {
    inMemoryRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryRepository)
  })

  test('create a question', async () => {
    const {question} = await sut.execute({
      authorId: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta',
    })
    expect(question.id).toBeTruthy()
    expect(inMemoryRepository.items[0].id).toEqual(question.id)
  })
})

