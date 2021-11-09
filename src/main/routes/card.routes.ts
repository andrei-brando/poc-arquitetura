import { Router } from 'express';
import { CreateCardUseCase } from '../../domain/usecases';
import { CardRepository } from '../../infra/repositories';
import { Controller } from '../../presentation/contracts';
import { CreateCardController } from '../../presentation/controllers';

const createCardController = (): CreateCardController => {
  const cardRepository = new CardRepository();
  const createCardUseCase = new CreateCardUseCase(cardRepository);

  console.log('usecase', createCardUseCase);

  return new CreateCardController(createCardUseCase);
};

export class CardRoutes {
  public init(router: Router): Router {
    router.post('/cards', createCardController().handle);

    return router;
  }
}
