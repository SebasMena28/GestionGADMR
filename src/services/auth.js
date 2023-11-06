import { supabase } from "../API/config";

export const login = async (data) => {
  const { usuario, password } = data;
  //console.log(usuario, password)
  let result;
  try {
    result = await supabase.auth.signInWithPassword({
      email: usuario,
      password: password,
    });
    //console.log(result);
    return result;
  } catch (error) {
    //console.log(error);
  }
  return result;
};

export const logout = async () => {
  await supabase.auth.signOut();
};

