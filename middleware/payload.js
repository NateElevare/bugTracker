var router = require('express').Router()

router.use(function(req,res,next){
	req.payload = {
		errors: []
	}
	next()
})

module.exports = router