// app.js
const express = require("express");
const cors = require("cors");
const router = express.Router();

// Middleware untuk parsing body dari request
router.use(cors());
router.use(express.json());

// Routing untuk endpoint "/api"
router.get("/", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        nama: "Farhan Naufal",
        provinsi: "Jawa Barat",
        kota: "Kota Bandung",
        kecamatan: "Bandung",
        desa: "Bandung",
      },
      {
        id: 2,
        nama: "Luh Komang Devi Savitri",
        provinsi: "Jawa Barat",
        kota: "Kab. Bandung",
        kecamatan: "Bojongsoang",
        desa: "Bojongsoang",
      },
      {
        id: 3,
        nama: "Fitriandhiny Dhafa Harwi",
        provinsi: "Jawa Barat",
        kota: "Kab. Bandung",
        kecamatan: "Bojongsoang",
        desa: "Bojongsoang",
      },
      {
        id: 4,
        nama: "Defanti Amelia W",
        provinsi: "Jawa Barat",
        kota: "Kab. Bandung",
        kecamatan: "Bojongsoang",
        desa: "Bojongsoang",
      },
    ],
  });
});

module.exports = router;
