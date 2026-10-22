import supabase from '../config/supabase.js';

const TABLE = 'warga';
const PK    = 'nik';

// GET /api/warga
export const getAll = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// GET /api/warga/:nik
export const getById = async (req, res, next) => {
  try {
    const { nik } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq(PK, nik)
      .single();
    if (error || !data) {
      return res.status(404).json({ error: `No Data Found with nik ${nik}` });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// POST /api/warga
export const create = async (req, res, next) => {
  try {
    const { nik, nama, jeniskelamin, alamat } = req.body;
    const { data, error } = await supabase
      .from(TABLE)
      .insert([{ nik, nama, jeniskelamin, alamat }])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

// PUT /api/warga/:nik
export const update = async (req, res, next) => {
  try {
    const { nik } = req.params;
    const { nama, jeniskelamin, alamat } = req.body;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nik)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `nik ${nik} tidak ditemukan` });
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update({ nama, jeniskelamin, alamat })
      .eq(PK, nik)
      .select()
      .single();
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/warga/:nik
export const remove = async (req, res, next) => {
  try {
    const { nik } = req.params;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nik)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `nik ${nik} tidak ditemukan` });
    }

    const { error } = await supabase.from(TABLE).delete().eq(PK, nik);
    if (error) throw error;
    res.status(200).json({ message: `nik ${nik} Deleted` });
  } catch (err) {
    next(err);
  }
};
