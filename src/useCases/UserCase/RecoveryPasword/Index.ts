import { mailtrapmailprovider } from '../../../providers/implementations'
import { userRopsitory } from '../../../repositories/implementations/UserRepository'
import { RecoveryPassoword } from './RecoveryPassoword'
import { RecoveryPasswordController } from './RecoveryPasswordController'

const recoverypassoword = new RecoveryPassoword(userRopsitory,mailtrapmailprovider)
const recoveryPasswordController = new RecoveryPasswordController(recoverypassoword)

export { recoveryPasswordController }