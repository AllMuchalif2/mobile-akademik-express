import supabase from '../config/supabase.js';

const TABLE = 'mahasiswa';
const PK    = 'nim';

// GET /api/mahasiswa
export const getAll = async (req, res, next) => {
  try {
    const { data, error } = await supabase.from(TABLE).select('*');
    if (error) throw error;
    res.status(200).json({ status: 200, data });
  } catch (err) {
    next(err);
  }
};

// GET /api/mahasiswa/:nim
export const getById = async (req, res, next) => {
  try {
    const { nim } = req.params;
    const { data, error } = await supabase
      .from(TABLE)
      .select('*')
      .eq(PK, nim)
      .single();
    if (error || !data) {
      return res.status(404).json({ status: 404, error: `No Data Found with nim ${nim}` });
    }
    res.status(200).json({ status: 200, data });
  } catch (err) {
    next(err);
  }
};

// POST /api/mahasiswa
export const create = async (req, res, next) => {
  try {
    const { nim, nama, prodi } = req.body;
    const { data, error } = await supabase
      .from(TABLE)
      .insert([{ nim, nama, prodi }])
      .select()
      .single();
    if (error) throw error;
    res.status(201).json({ status: 201, messages: { success: 'Data Saved' }, data });
  } catch (err) {
    next(err);
  }
};

// PUT /api/mahasiswa/:nim
export const update = async (req, res, next) => {
  try {
    const { nim } = req.params;
    const { nama, prodi } = req.body;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nim)
      .single();
    if (!existing) {
      return res.status(404).json({ status: 404, error: `nim ${nim} tidak ditemukan` });
    }

    const { data, error } = await supabase
      .from(TABLE)
      .update({ nama, prodi })
      .eq(PK, nim)
      .select()
      .single();
    if (error) throw error;
    res.status(200).json({ status: 200, messages: { success: 'Data Updated' }, data });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/mahasiswa/:nim
export const remove = async (req, res, next) => {
  try {
    const { nim } = req.params;

    // Check existence
    const { data: existing } = await supabase
      .from(TABLE)
      .select(PK)
      .eq(PK, nim)
      .single();
    if (!existing) {
      return res.status(404).json({ status: 404, error: `nim ${nim} tidak ditemukan` });
    }

    const { error } = await supabase.from(TABLE).delete().eq(PK, nim);
    if (error) throw error;
    res.status(200).json({ status: 200, messages: { success: `nim ${nim} Deleted` } });
  } catch (err) {
    next(err);
  }
};
