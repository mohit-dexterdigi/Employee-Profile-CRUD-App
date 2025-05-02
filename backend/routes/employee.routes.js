const express = require('express');
const multer = require('multer');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

router.post('/', upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'profileImage', maxCount: 1 }
]), employeeController.createEmployee);

router.get('/', employeeController.getAllEmployees);

module.exports = router;
