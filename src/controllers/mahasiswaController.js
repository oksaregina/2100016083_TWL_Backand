const MahasiswaModel = require('../models/mahasiswaModel');

exports.getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswaList = await MahasiswaModel.find();
    res.json(mahasiswaList);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving mahasiswa' });
  }
};

exports.createMahasiswa = async (req, res) => {
  const { Nim, Nama, Email, Alamat } = req.body;

  try {
    const newMahasiswa = new MahasiswaModel({ Nim, Nama, Email, Alamat });
    const savedMahasiswa = await newMahasiswa.save();
    res.status(201).json(savedMahasiswa);
  } catch (error) {
    res.status(500).json({ message: 'Error creating mahasiswa' });
  }
};

exports.deleteMahasiswa = async (req, res) => {
  const { id } = req.params;

  try {
    await MahasiswaModel.findByIdAndDelete(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting mahasiswa' });
  }
};

exports.editMahasiswa = async (req, res) => {
  const { id } = req.params;
  const { Nim, Nama, Email, Alamat } = req.body;

  try {
    const updatedMahasiswa = await MahasiswaModel.findByIdAndUpdate(
      id,
      { Nim, Nama, Email, Alamat },
      { new: true }
    );
    res.json(updatedMahasiswa);
  } catch (error) {
    res.status(500).json({ message: 'Error editing mahasiswa' });
  }
};
