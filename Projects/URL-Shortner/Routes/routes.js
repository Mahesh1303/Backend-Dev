const express=require('express')

const{HandleGenerateShortURL,RedirectOrgURL,HandlegetAnalyticsCount}=require('../controllers/controller')


const router=express.Router()


router.post('/',HandleGenerateShortURL)

router.get('/:id',RedirectOrgURL)

router.get('/analytics/:id',HandlegetAnalyticsCount)


module.exports=router