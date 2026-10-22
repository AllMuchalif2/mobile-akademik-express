import supabase from '../config/supabase.js';

const TABLE = 'pegawai';
const PK    = 'nip';

// GET /api/pegawai
export const getAll = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// GET /api/pegawai/:nip
export const getById = async (req, res, next) => {
  try {
    const { nip } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq(PK, nip)
      .single();
    if (error || !data) {
      return res.status(404).json({ error: `No Data Found with nip ${nip}` });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// POST /api/pegawai
export const create = async (req, res, next) => {
  try {
    const { nip, nama, dinas, jabatan } = req.body;
    const { data, error } = await supabase
      .from(TABLE)
      .insert([{ nip, nama, dinas, jabatan }])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

// PUT /api/pegawai/:nip
export const update = async (req, res, next) => {
  try {
    const { nip } = req.params;
    const { nama, dinas, jabatan } = req.body;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nip)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `nip ${nip} tidak ditemukan` });
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update({ nama, dinas, jabatan })
      .eq(PK, nip)
      .select()
      .single();
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/pegawai/:nip
export const remove = async (req, res, next) => {
  try {
    const { nip } = req.params;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nip)
      .single();
    if (!existing) {
      return res.status(404).json({ error: `nip ${nip} tidak ditemukan` });
    }

    const { error } = await supabase.from(TABLE).delete().eq(PK, nip);
    if (error) throw error;
    res.status(200).json({ message: `nip ${nip} Deleted` });
  } catch (err) {
    next(err);
  }
};
