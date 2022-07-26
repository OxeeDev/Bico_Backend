import { userRopsitory } from '../../../repositories/implementations/UserRepository'
import { LoginAuthentication } from '../LoginAuthentication/LoginAuthentication'
import { LoginAuthenticationsController } from '../LoginAuthentication/LoginAuthenticationsController'

const loginAuthentication = new LoginAuthentication(userRopsitory)
const loginAuthenticationsController = new LoginAuthenticationsController(loginAuthentication)

export { loginAuthenticationsController }