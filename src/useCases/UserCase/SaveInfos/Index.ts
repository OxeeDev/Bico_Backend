import { mailtrapmailprovider } from '../../../providers/implementations'
import { userRopsitory } from '../../../repositories/implementations/UserRepository'
import { SaveInfos } from './SaveInfos'
import { SaveInfosController } from './SaveInfosController'

const saveInfos = new SaveInfos(userRopsitory)
const saveInfosController = new SaveInfosController(saveInfos)

export { saveInfosController, saveInfos }