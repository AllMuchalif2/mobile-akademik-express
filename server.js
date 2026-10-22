import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import mahasiswaRoutes from './src/routes/mahasiswaRoutes.js';
import pegawaiRoutes   from './src/routes/pegawaiRoutes.js';
import barangRoutes    from './src/routes/barangRoutes.js';
import wargaRoutes     from './src/routes/wargaRoutes.js';

import errorHandler from './src/middleware/errorHandler.js';
import notFound     from './src/middleware/notFound.js';

const app  = express();
const PORT = process.env.PORT || 3000;

// ─── Global Middleware ────────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Akademik Express API is running 🚀',
    endpoints: [
      '/api/mahasiswa',
      '/api/pegawai',
      '/api/barang',
      '/api/warga',
    ],
  });
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api/mahasiswa', mahasiswaRoutes);
app.use('/api/pegawai',   pegawaiRoutes);
app.use('/api/barang',    barangRoutes);
app.use('/api/warga',     wargaRoutes);

// ─── Error Handling ───────────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  Server running on http://localhost:${PORT}`);
});
