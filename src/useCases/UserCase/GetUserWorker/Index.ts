import { userRopsitory } from '../../../repositories/implementations/UserRepository'
import { GetUserWorker } from './GetUserWorker'
import { GetUserWorkerController } from './GetUserWorkerController'

const getuserworker = new GetUserWorker(userRopsitory)
const getUserControllerWorker = new GetUserWorkerController(getuserworker)

export { getUserControllerWorker }