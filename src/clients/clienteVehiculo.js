import axios from "axios";

const guardar = async (bodyVehiculo) => {
  
    const response = await axios.post(
      `http://localhost:8081/API/v1.0/Consesionario/vehiculos`,
      bodyVehiculo
    );
    console.log(response.data);
    return response.data;
 
};

const buscarPorPlaca = async (placa) => {
 
    const response = await axios.get(
      `http://localhost:8081/API/v1.0/Consesionario/vehiculos/${placa}`
    );
    console.log(response.data);
    return response.data;
 
};

const buscarTodos = async () => {
  
    const response = await axios.get(
      `http://localhost:8081/API/v1.0/Consesionario/vehiculos`
    );
    console.log(response.data);
    return response.data;
 
};

const eliminar = async (id) => {
  
    const response = await axios.delete(
      `http://localhost:8081/API/v1.0/Consesionario/vehiculos/${id}`
    );
    console.log(response.data);
    return response.data;

};

export const guardarFachada = async (bodyVehiculo) => {
  return await guardar(bodyVehiculo);
};

export const buscarPorPlacaFachada = async (placa) => {
  return await buscarPorPlaca(placa);
};

export const buscarTodosFachada = async () => {
  return await buscarTodos();
};

export const eliminarFachada = async (id) => {
  return await eliminar(id);
};
