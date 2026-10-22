-- ============================================================
--  Supabase Migration — akademik
--  Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- ─── 1. MAHASISWA ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS mahasiswa (
  nim   VARCHAR(20)  NOT NULL PRIMARY KEY,
  nama  VARCHAR(50)  NOT NULL,
  prodi VARCHAR(30)  NOT NULL
);

-- ─── 2. PEGAWAI ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS pegawai (
  nip     VARCHAR(20)  NOT NULL PRIMARY KEY,
  nama    VARCHAR(50)  NOT NULL,
  dinas   VARCHAR(50)  NOT NULL,
  jabatan VARCHAR(50)  NOT NULL
);

-- ─── 3. BARANG ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS barang (
  kode        VARCHAR(20)   NOT NULL PRIMARY KEY,
  nama        VARCHAR(100)  NOT NULL,
  harga       NUMERIC(15,2) NOT NULL DEFAULT 0,
  spesifikasi TEXT,
  merk        VARCHAR(50)
);

-- ─── 4. WARGA ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS warga (
  nik          VARCHAR(20)  NOT NULL PRIMARY KEY,
  nama         VARCHAR(50)  NOT NULL,
  jeniskelamin VARCHAR(10)  NOT NULL,
  alamat       TEXT
);

-- ============================================================
--  SEED DATA — existing rows from local MySQL
-- ============================================================
INSERT INTO mahasiswa (nim, nama, prodi) VALUES
  ('23.230.0025', 'Arnama', 'sistem informasi'),
  ('23.230.0026', 'Ayu',    'sistem informasi')
ON CONFLICT (nim) DO NOTHING;
