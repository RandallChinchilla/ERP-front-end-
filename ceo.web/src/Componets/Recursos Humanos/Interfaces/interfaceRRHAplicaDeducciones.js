import { MenuItem, Select } from "@mui/material";
import { useGetData } from "../../../Hooks/useGetData";
import { SelectCross } from "../../Listas/SelectCross";
import { RRHSelectTipoDeduccion } from "../Components/RRHSelectTipoDeduccion";

export const columnsRRHAplicaDeducciones = [
  { field: "RrhMaestro.Nombre", title: "Nombre Empleado", editable: "never" },
  {
    field: "CodigoTipoDeduccion",
    title: "Tipo Deducción",
    editComponent: (props) => {
      return (
        <RRHSelectTipoDeduccion
          name="CodigoTipoDeduccion"
          field="Descripcion"
          value={props.value}
          onChange={props.onChange}
        />
      );
    },
  },
  { field: "Monto", title: "Monto" },
  { field: "Descripcion", title: "Descripción" },
];

export const routesRRHAplicaDeducciones = {
  get: "RrhDeduccionEmpleado/GetRrhDeduccionEmpleados",
  post: "RrhDeduccionEmpleado/PostRrhAplicaAccionesPersonales",
  update: "RrhDeduccionEmpleado/PutRrhDeduccionEmpleado",
  delete: "RrhDeduccionEmpleado/DeleteRrhDeduccionEmpleado",
};
