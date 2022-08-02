// * Importando o metodo ROUTER do express
import { Router } from "express";
import { AuthenticateVerify } from "./middlewares/AuthenticateVerify";


import multer from "multer";
import { config } from "./middlewares/multer";

// ! Codigos
import { createUserController } from "./useCases/UserCase/CreateUser";
import { getUserController } from "./useCases/UserCase/GetUser/Index";
import { loginAuthenticationsController } from './useCases/UserCase/LoginAuthentication/Index';
import { recoveryPasswordController } from './useCases/UserCase/RecoveryPasword/Index';
import { saveInfosController } from "./useCases/UserCase/SaveInfos/Index";

const router = Router(); // variavel com as rotas

// * ROTAS
// ? Rota de Criação de usuario
router.post('/user', async (req, res) => {
  return await createUserController.handle(req, res)
})
router.post('/user/saveImage', AuthenticateVerify, multer(config).single('file'), async (req, res) => {
  return res.json({ image: `http://localhost:4444/${req.file.filename}` })

})
router.post('/user/saveinfos', AuthenticateVerify, async (req, res) => {
  return await saveInfosController.handle(req, res)
})

router.put('/recovery',async (req, res)=>{
  return await recoveryPasswordController.handle(req, res)
})
router.post('/authentication', async (req,res) =>{
  return await loginAuthenticationsController.handle(req,res)
})
router.get('/user', AuthenticateVerify, async (req, res) => {
  return await getUserController.handle(req, res)
})

// ! Exportando as rotas para o app
export { router }