const bcryptHelper = require("../helper/bcryptHelper");
const jwtHelper = require("../helper/jwtHelper");
const validateEmail = require("../helper/validation/emailHelper");
const { Users } = require("../models/index");

const userController = {
  addUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          message: "Tolong isi semua input!",
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          message: "Email tidak valid!",
        });
      }

      const isUser = await Users.findOne({
        where: { email: email },
      });

      if (isUser) {
        return res.status(409).json({
          message: "Email sudah terdaftar!",
        });
      }

      const newPassword = await bcryptHelper.encrypt(password);

      const user = await Users.create({
        name,
        email,
        password: newPassword,
      });

      return res.json({
        status: 200,
        message: "Akun berhasil dibuat",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Terjadi kesalahan server!",
        error,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          message: "Tolong isi semua input!",
        });
      }

      if (!validateEmail(email)) {
        return res.status(400).json({
          message: "Email tidak valid!",
        });
      }

      const isUser = await Users.findOne({
        where: { email: email },
      });

      if (!isUser) {
        return res.status(401).json({
          message: "Akun anda belum terdaftar!",
        });
      }

      const comparePassword = await bcryptHelper.compare(
        password,
        isUser.password
      );

      if (!comparePassword) {
        return res.status(401).json({
          message: "Password salah!",
        });
      }

      const token = jwtHelper.signIn({
        id: isUser.id,
      });

      return res.status(200).json({
        message: "Berhasil Login!",
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Terjadi kesalahan server!",
        error,
      });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const users = await Users.findAll();

      return res.json({
        status: 200,
        message: "Berhasil mendapatkan semua pengguna",
        data: users,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Terjadi kesalahan server!",
        error,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const userId = req.params.id; 
  
      const user = await Users.findOne({
        where: { id: userId },
      });
  
      if (!user) {
        return res.status(404).json({
          message: "User tidak ditemukan",
        });
      }
  
      return res.json({
        status: 200,
        message: "Berhasil mendapatkan pengguna berdasarkan Id",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
        error,
      });
    }
  }
};

module.exports = userController;
