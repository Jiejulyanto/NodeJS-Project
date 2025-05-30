const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

// Static Files
app.use(express.static(path.join(__dirname, "/static")));

// Set Templating Engine
app
  .use(expressLayouts)
  .set("view engine", "ejs")
  .set("views", path.join(__dirname, "/content"));

app.get("/", (req, res) => {
  res.render("index", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/settings", (req, res) => {
  res.render("settings", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/authentication/forgot-password", (req, res) => {
  res.render("authentication/forgot-password", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/authentication/profile-lock", (req, res) => {
  res.render("authentication/profile-lock", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/authentication/sign-in", (req, res) => {
  res.render("authentication/sign-in", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/authentication/sign-up", (req, res) => {
  res.render("authentication/sign-up", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/authentication/reset-password", (req, res) => {
  res.render("authentication/reset-password", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/crud/products", (req, res) => {
  const products = require("./data/products.json");
  res.render("crud/products", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    products,
  });
});

app.get("/crud/users", (req, res) => {
  const users = require("./data/users.json");
  res.render("crud/users", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    users,
  });
});

// ======================= DATA DUMMY ==========================
const mahasiswaList = [
  { id: 1, nama: 'Andi', nim: '123456', jurusan: 'Informatika' },
  { id: 2, nama: 'Budi', nim: '234567', jurusan: 'Sistem Informasi' },
  { id: 3, nama: 'Citra', nim: '345678', jurusan: 'Teknik Komputer' },
];

const dosenList = [
  { id: 1, nama: 'Dr. Susi', nip: '111222', fakultas: 'Teknik' },
  { id: 2, nama: 'Prof. Budi', nip: '333444', fakultas: 'Ilmu Komputer' },
];
// =============================================================


// ======================= MAHASISWA ==========================

// INDEX
app.get("/mahasiswa/index", (req, res) => {
  res.render("mahasiswa/index", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    mahasiswa: mahasiswaList,
  });
});

// CREATE FORM
app.get("/mahasiswa/create", (req, res) => {
  res.render("mahasiswa/create", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
  });
});

// EDIT FORM
app.get("/mahasiswa/edit/:id", (req, res) => {
  const data = mahasiswaList.find(m => m.id == req.params.id);
  res.render("mahasiswa/edit", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    data,
  });
});

// DETAIL
app.get("/mahasiswa/detail/:id", (req, res) => {
  const mhs = mahasiswaList.find(m => m.id == req.params.id);
  res.render("mahasiswa/detail", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    mahasiswa: mhs,
  });
});


// ========================= DOSEN ============================

// INDEX
app.get("/dosen/index", (req, res) => {
  res.render("dosen/index", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    dosen: dosenList,
  });
});

// CREATE FORM
app.get("/dosen/create", (req, res) => {
  res.render("dosen/create", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
  });
});

// EDIT FORM
app.get("/dosen/edit/:id", (req, res) => {
  const data = dosenList.find(d => d.id == req.params.id);
  res.render("dosen/edit", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: false,
    data,
  });
});


app.get("/layouts/stacked", (req, res) => {
  res.render("layouts/stacked", {
    layout: path.join(__dirname, "/layouts/stacked-layout"),
    footer: true,
  });
});

app.get("/layouts/sidebar", (req, res) => {
  res.render("layouts/sidebar", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/pages/404", (req, res) => {
  res.render("pages/404", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/pages/500", (req, res) => {
  res.render("pages/500", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/pages/maintenance", (req, res) => {
  res.render("pages/maintenance", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: false,
    footer: false,
  });
});

app.get("/pages/pricing", (req, res) => {
  res.render("pages/pricing", {
    layout: path.join(__dirname, "/layouts/main"),
    navigation: true,
    footer: false,
  });
});

app.get("/playground/sidebar", (req, res) => {
  res.render("playground/sidebar", {
    layout: path.join(__dirname, "/layouts/dashboard"),
    footer: true,
  });
});

app.get("/playground/stacked", (req, res) => {
  res.render("playground/stacked", {
    layout: path.join(__dirname, "/layouts/stacked-layout"),
    footer: true,
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
