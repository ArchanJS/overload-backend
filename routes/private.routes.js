const router=require('express').Router();
const {protect}=require('../middlewares/protect');
const {addVehicle,searchVehicle,searchAllVehicles}=require('../controllers/private.cons');

// Add vehicle
router.post('/addvehicle',protect,addVehicle);

// Search vehicle
router.get('/searchvehicle/:vehicleNo',protect,searchVehicle);

// Search all vehicles
router.get('/search',protect,searchAllVehicles);

module.exports=router;