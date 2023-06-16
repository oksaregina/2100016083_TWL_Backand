const express = require('express');
const router = express.Router();
const { loggerMiddleware } = require('./middleware');
const {
  getAllMahasiswa,
  createMahasiswa,
  deleteMahasiswa,
  editMahasiswa,
} = require('./controllers/mahasiswaController');

// Middleware
router.use(loggerMiddleware);


// Mahasiswa routes
router.get('/mahasiswa', getAllMahasiswa);
router.post('/mahasiswa', createMahasiswa);
router.delete('/mahasiswa/:id', deleteMahasiswa);
router.put('/mahasiswa/:id', editMahasiswa);


module.exports = router;
