# Akademik Express API

REST API refactored from **CodeIgniter 4** to **Express.js + Supabase**.

## Resources

| Resource   | Primary Key | Fields                              |
| ---------- | ----------- | ----------------------------------- |
| Mahasiswa  | `nim`       | nim, nama, prodi, kelas             |
| Pegawai    | `nip`       | nip, nama, dinas, jabatan           |
| Barang     | `kode`      | kode, nama, harga, spesifikasi, merk|
| Warga      | `nik`       | nik, nama, jeniskelamin, alamat     |

## Project Structure

```
akademik-express/
├── src/
│   ├── config/
│   │   └── supabase.js          # Supabase client
│   ├── controllers/
│   │   ├── mahasiswaController.js
│   │   ├── pegawaiController.js
│   │   ├── barangController.js
│   │   └── wargaController.js
│   ├── routes/
│   │   ├── mahasiswaRoutes.js
│   │   ├── pegawaiRoutes.js
│   │   ├── barangRoutes.js
│   │   └── wargaRoutes.js
│   └── middleware/
│       ├── errorHandler.js
│       └── notFound.js
├── server.js
├── .env
└── package.json
```

## Setup

1. Clone/copy this folder.
2. Run `npm install`.
3. Fill in your `.env` file:
   ```env
   PORT=3000
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   ```
4. Run `npm run dev` (development) or `npm start` (production).

## Endpoints

### Mahasiswa `/api/mahasiswa`
| Method | Path                  | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/api/mahasiswa`      | Get all          |
| GET    | `/api/mahasiswa/:nim` | Get by NIM       |
| POST   | `/api/mahasiswa`      | Create           |
| PUT    | `/api/mahasiswa/:nim` | Update by NIM    |
| DELETE | `/api/mahasiswa/:nim` | Delete by NIM    |

### Pegawai `/api/pegawai`
| Method | Path                  | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/api/pegawai`        | Get all          |
| GET    | `/api/pegawai/:nip`   | Get by NIP       |
| POST   | `/api/pegawai`        | Create           |
| PUT    | `/api/pegawai/:nip`   | Update by NIP    |
| DELETE | `/api/pegawai/:nip`   | Delete by NIP    |

### Barang `/api/barang`
| Method | Path                  | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/api/barang`         | Get all          |
| GET    | `/api/barang/:kode`   | Get by Kode      |
| POST   | `/api/barang`         | Create           |
| PUT    | `/api/barang/:kode`   | Update by Kode   |
| DELETE | `/api/barang/:kode`   | Delete by Kode   |

### Warga `/api/warga`
| Method | Path                  | Description      |
| ------ | --------------------- | ---------------- |
| GET    | `/api/warga`          | Get all          |
| GET    | `/api/warga/:nik`     | Get by NIK       |
| POST   | `/api/warga`          | Create           |
| PUT    | `/api/warga/:nik`     | Update by NIK    |
| DELETE | `/api/warga/:nik`     | Delete by NIK    |
