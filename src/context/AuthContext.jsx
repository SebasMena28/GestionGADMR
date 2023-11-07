import { createContext, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../API/config";
import { createDocs, deleteBucket } from "../services/storage";

const AuthContext = createContext({
  user: null,
});

export const PACContext = createContext();

export const PACProvider = ({ children }) => {
  const navigate = useNavigate();
  const [pacs, setPacs] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const getPacs = async (user) => {
    const { error, data } = await supabase.from("actividades").select().eq("usuario", user).order("fechacreacion", {ascending: false});
    //const result = await supabase.from("actividades").select().eq("columna", "dato").eq("columna", "dato").order("id", {ascending: true})
    if (error) throw error;
    setPacs(data);
  };

  const getUsuario = async (id) => {
    const { error, data } = await supabase.from("persona").select().eq("auth", id);
    if (error) throw error;
    //console.log(data)
    setUsuario(data);
  }

  const searchPacs = async (text, user) => {
    console.log(text)
    const { error, data } = await supabase.from("actividades").select().like("detalle", '%'+text+'%').eq("usuario", user);
    if (error) throw error;
    console.log(data)
    setPacs(data);
  };

  const getPacsbyId = async (id) => {
    const { error, data } = await supabase
      .from("actividades")
      .select()
      .eq("idactividad", id);
    //const result = await supabase.from("actividades").select().eq("columna", "dato").eq("columna", "dato").order("id", {ascending: true})
    if (error) throw error;
    console.log(data);
    navigate(`/PAC/editar/:${data[0].idactividad}`);
  };

  const obtenerbyId = async (id) => {
    const { error, data } = await supabase
      .from("actividades")
      .select()
      .eq("idactividad", id);
    if (error) throw error;
    console.log(data)
    setPacs(data);
    //setPacs(pacs.filter((pac) => pac.idactividad === id));
    console.log(pacs)
  };

  const deletePacs = async (id, name) => {
    const { error, data } = await supabase
      .from("actividades")
      .delete()
      .eq("idactividad", id);
    if (error) throw error;
    borrarBucket(name)
    setPacs(pacs.filter((pac) => pac.idactividad !== id));
  };

  const borrarBucket = async (name) => {
    await deleteBucket(name)
  }

  const editPacs = async (id, formValues) => {
    try{
      const {
        idproyecto,
        idtecnico = 1,
        iddireccion = 1,
        idtipocompra,
        idunidad,
        idperiodos,
        idproceso = 1,
        idfondobid,
        idtipopresupuesto,
        idregimen,
        idtipoproducto,
        anio,
        partidapresupuestaria,
        cpc,
        detalle,
        cantidad,
        costounitario,
        subtotal = cantidad * costounitario,
        catalogoelectronico,
        fechacreacion,
      } = formValues;
      const { error, data } = await supabase
        .from("actividades")
        .update({
          idproyecto: idproyecto,
          idtecnico: idtecnico,
          iddireccion: iddireccion,
          idtipocompra: idtipocompra,
          idunidad: idunidad,
          idperiodos: idperiodos,
          idproceso: idproceso,
          idfondobid: idfondobid,
          idtipopresupuesto: idtipopresupuesto,
          idregimen: idregimen,
          idtipoproducto: idtipoproducto,
          anio: anio,
          partidapresupuestaria: partidapresupuestaria,
          cpc: cpc,
          detalle: detalle,
          cantidad: cantidad,
          costounitario: costounitario,
          subtotal: cantidad * costounitario,
          catalogoelectronico: catalogoelectronico,
          fechacreacion: fechacreacion,
        })
        .eq("idactividad", id);
  ;
  
      if (error) throw error;
      console.log(data);
      navigate("/PAC", { replace: true });
    }
    catch (error){
      console.log(error)
    }
    
  };

  function generarCodigoAleatorio() {
    const codigo = Math.floor(100000 + Math.random() * 900000);
    return codigo;
  }

  function procesoSugerido(tipocompra, normalizado, catalogo, subtotal, fondoBID) {
  if (fondoBID == "1") {
    switch (tipocompra) {
      case "1":
        switch (normalizado) {
          case "1":
            if (catalogo == "SI") return 3
            else {
              if (subtotal <= 6300.57) return 1
              else return 2;
            }
          case "2":
            if (subtotal < 63005.73) return 4
            else if (subtotal >= 63005.73 && subtotal <= 472542.98) return 5
            else return 6
        }
      break;
      case "2":
        switch (normalizado) {
          case "1":
            if (catalogo == "SI") return 3
            else {
              if (subtotal <= 6300.57) return 1
              else return 2
            }
          case "2":
            if (subtotal < 63005.73) return 4
            else if (subtotal >= 63005.73 && subtotal <= 472542.98) return 5
            else return 6
        }
      break;
      case "4":
        if (subtotal < 220520.06) return 4
        else if (subtotal >= 220520.06 && subtotal <= 945085.97) {
          return 5
        }
        else return 6
      case "3":
        if (subtotal <= 220520.06) return 7
        else if (subtotal > 63005.73 && subtotal < 472542.98) return 8
        else return 9
    }
  } else {
    switch (tipocompra) {
      case "1":
        switch (normalizado) {
          case "1":
            return 2
          case "2":
            if (subtotal < 63005.73) return 4
            else return 5
        }
      break;

      case "2":
        switch (normalizado) {
          case "1":
            return 2
          case "2":
            if (subtotal < 63005.73) return 4
            else return 5
        }
      break;

      case "4":
        if (subtotal>945085.97) return 6
        else if (subtotal>= 220520.06 && subtotal <= 945085.97) return 5
        else return 4

      case "5":
        if (subtotal <= 63005.73) return 7
        else return 8
    }
  }
}

  const addPacs = async (formValues, id) => {

    const {
      idproyecto,
      idtecnico,
      iddireccion,
      idtipocompra,
      idunidad,
      idperiodos,
      idproceso,
      idfondobid,
      idtipopresupuesto,
      idregimen,
      idtipoproducto,
      anio,
      partidapresupuestaria,
      cpc,
      detalle,
      cantidad,
      costounitario,
      subtotal = cantidad * costounitario,
      catalogoelectronico,
      fechacreacion,
    } = formValues;
    console.log(cantidad*costounitario)
    try {
      const { error, data } = await supabase.from("actividades").insert({
        idactividad: generarCodigoAleatorio(),
        idproyecto: idproyecto,
        idtecnico: 1,
        iddireccion: 1,
        idtipocompra: idtipocompra,
        idunidad: idunidad,
        idperiodos: idperiodos,
        idproceso: procesoSugerido(idtipocompra, idtipoproducto, catalogoelectronico, cantidad*costounitario, idfondobid),
        idfondobid: 1,
        idtipopresupuesto: idtipopresupuesto,
        idregimen: idregimen,
        idtipoproducto: idtipoproducto,
        anio: anio,
        partidapresupuestaria: partidapresupuestaria,
        cpc: cpc,
        detalle: detalle,
        cantidad: cantidad,
        costounitario: costounitario,
        subtotal: cantidad * costounitario,
        catalogoelectronico: catalogoelectronico,
        usuario: id
      });

      if (error) throw error;
      await createDocs(detalle);
      navigate("/PAC", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PACContext.Provider
      value={{
        pacs,
        usuario,
        getPacs,
        addPacs,
        editPacs,
        deletePacs,
        getPacsbyId,
        obtenerbyId,
        searchPacs,
        getUsuario
      }}
    >
      {" "}
      {children}
    </PACContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export const usePAC = () => useContext(PACContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    //const link = "/PAC/editar/:"+pac.idactividad
    let tipo;
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
        /*tipo = (tipoUsuario(session.user.id));
        console.log("Departamento: ", tipoUsuario(session.user.id))*/
        //tipoUsuario(session.user.id)
        navigate("/inicio", { replace: true });
      } else navigate("/", { replace: true });
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const tipoUsuario = async (id) => {
    const { error, data } = await supabase
      .from("persona")
      .select()
      .eq("auth", id);
    if (error) throw error;
    console.log(data[0])
    if (data[0].iddepartamento == 2) navigate("/inicio/:"+id, { replace: true });
    else navigate("/inicio-eva", { replace: true });
  } 

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
