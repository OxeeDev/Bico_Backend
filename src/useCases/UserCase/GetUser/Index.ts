import { userRopsitory } from '../../../repositories/implementations/UserRepository'
import { GetUser } from './GetUser'
import { GetUserController } from './GetUserController'

const getuser = new GetUser(userRopsitory)
const getUserController = new GetUserController(getuser)

export { getUserController }