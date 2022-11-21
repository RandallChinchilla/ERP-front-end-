import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readAllAction } from "../../Actions/Index";
import { helpHttp } from "../../Helpers/HelpHttp";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography } from "@mui/material";
import { datagridSx } from "./Styles/crossStylesComponent.js";
import { Addrow } from "./Addrow";
import { Editrow } from "./Editrow";
import { Deleterow } from "./Deleterow";

export const CrudTableFormNew = ({ columns, apiRoutes, field, title }) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;
  const [data, setData] = useState([]);

  /**
   * Realizamos la peticion GET al Api y asignamos los datos al state Data
   */

  let url = `${baseUrl}${apiRoutes.get}`;
  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (res.err) return null;
        console.log(res);
        setData(res);
        //dispatch(readAllAction(res));
      });
  }, [url, useDispatch]);

  console.log(columns);
  console.log(field);

  return (
    <Box
      sx={{
        height: 600,
        with: "100%",
      }}
    >
      <Grid item xs={12} container justifyContent="center" mt={5} mb={5}>
        <Typography component="h1" variant="h6" noWrap>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="left" mt={5} mb={5}>
        <Addrow routeRedirect={apiRoutes.navigation} />
      </Grid>
      <DataGrid
        sx={datagridSx}
        title={title}
        rows={data}
        //columns={columns}
        columns={columns.concat([
          {
            headerName: "Acciones",
            field: "actions",
            type: "actions",
            width: 80,
            renderCell: (params) => [
              <Editrow
                key={`edit-${params.row[field]}`}
                rowUpdate={params.row}
                navigation={apiRoutes.navigation}
              />,
              <Deleterow
                key={`delete-${params.row[field]}`}
                rowDelete={params.row}
                deleteApi={apiRoutes.delete}
                field={field}
                setData={setData}
                data={data}
              />,
            ],
          },
        ])}
        getRowId={(data) => data[field]}
        pageSize={50}
        rowsPerPageOptions={[50]}
        experimentalFeatures={{ newEditingApi: true }}
        setData={setData}
      />
    </Box>
  );
};
