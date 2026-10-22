import supabase from '../config/supabase.js';

const TABLE = 'barang';
const PK    = 'kode';

// GET /api/barang
export const getAll = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// GET /api/barang/:kode
export const getById = async (req, res, next) => {
  try {
    const { kode } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq(PK, kode)
      .single();
    if (error || !data) {
      return res.status(404).json({ error: `No Data Found with kode ${kode}` });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// POST /api/barang
export const create = async (req, res, next) => {
  try {
    const { kode, nama, harga, spesifikasi, merk } = req.body;
    const { data, error } = await supabase
      .from(TABLE)
      .insert([{ kode, nama, harga, spesifikasi, merk }])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

// PUT /api/barang/:kode
export const update = async (req, res, next) => {
  try {
    const { kode } = req.params;
    const { nama, harga, spesifikasi, merk } = req.body;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, kode)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `kode ${kode} tidak ditemukan` });
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update({ nama, harga, spesifikasi, merk })
      .eq(PK, kode)
      .select()
      .single();
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/barang/:kode
export const remove = async (req, res, next) => {
  try {
    const { kode } = req.params;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, kode)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `kode ${kode} tidak ditemukan` });
    }

    const { error } = await supabase.from(TABLE).delete().eq(PK, kode);
    if (error) throw error;
    res.status(200).json({ message: `kode ${kode} Deleted` });
  } catch (err) {
    next(err);
  }
};
