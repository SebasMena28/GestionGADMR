import { supabase } from "../API/config";

export const listDocs = async () => {
  try {
    const { data, error } = await supabase.storage.listBuckets();
    if (error) throw new Error("No existen registros");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createDocs = async (name) => {
  //console.log(name);
  try {
    const { data, error } = await supabase.storage.createBucket(name.slice(0,15), {
      public: true, // default: false
    });
    if (error) throw error;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getBucket = async (name) => {
  try {
    const { data, error } = await supabase.storage.getBucket(name);
    if (error) throw new Error("Algo salio, mal, hablar con Sebastian Mena");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteBucket = async (id) => {
  try {
    const { data, error } = await supabase.storage.deleteBucket(id);
    if (error) throw new Error("Algo salio, mal al borrar el registro");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFiles = async (name) => {
  try {
    const { data, error } = await supabase.storage.from(name).list();
    if (error) throw new Error("Hay un problema al cargar los archivos :(");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const downloadFile = async (name, path) => {
  try {
    const { data, error } = await supabase.storage.from(name).download(path);
    if (error) throw new Error("Hay un problema al descargar el archivo :(");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const urlFile = async (name, path) => {
  try {
    const { data, error } = await supabase.storage
      .from(name)
      .createSignedUrl(path, 180);
    if (error) throw new Error("Hay un problema :(");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFiletoBucket = async (name, path, file) => {
  console.log(name, path, file)
  try {
    const { data, error } = await supabase.storage
      .from(name)
      .upload(path, file);
    if (error) throw new Error("Hay un problema al subir el archivo :(");
    return data;
  } catch (error) {
    console.log(error);
  }
};
