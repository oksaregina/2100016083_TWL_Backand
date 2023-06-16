const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  Nim: {
    type: Number,
    required: true
  },

  Nama: {
    type: String,
    required: true
  },

  Email: {
    type: String,
    required: true
  },

  Alamat: {
    type: String,
    required: true
  }
});

const MahasiswaModel = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = MahasiswaModel;
