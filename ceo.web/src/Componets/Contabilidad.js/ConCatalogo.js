import * as React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { useGetData } from "../../Hooks/useGetData";
import { dividerClasses } from "@mui/material";

export default function ConCatalogo() {
  const userData = JSON.parse(localStorage.getItem("userLogged"));

  const { Data, Error, setData } = useGetData(
    `ConCatalogo/GetConCatalogos?codEmpresa=${userData.codigoEmpresa}`
  );

  if (Error) return null;
  if (!Data) return null;

  let arbol = Data;
  // let optionsPadre = Data.filter((item) => item.Nivel == 0);
  // let optionsHijos = Data.filter((item) => item.Nivel == 1);

  console.log(arbol);
  // console.log(optionsHijos);

  const project = () => {
    let component;
    arbol.map((itempadre) => {
      // component = (
      //   <TreeItem
      //     key={itempadre.Value}
      //     nodeId={itempadre.Nivel}
      //     label={itempadre.Text}
      //   ></TreeItem>
      // );

      switch (itempadre.Nivel) {
        case 0:
          component = (
            <TreeItem
              key={itempadre.Value}
              nodeId={itempadre.Nivel}
              label={itempadre.Text}
            ></TreeItem>
          );
          break;
        case "1":
          return <div />;
        case "2":
          return <div />;
        case "3":
          return <div />;
        default:
          return <h1>No project match</h1>;
      }
    });
    return component;
  };

  //return <div className="mt-5">{project()}</div>;
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {/* {project()} */}
      {Data &&
        arbol.map(
          (item) =>
            item.Nivel == 0 && (
              <TreeItem
                key={item.Cuenta}
                nodeId={item.Nivel}
                label={item.Nombre}
              >
                {item.ChildrenNode1 && (
                  <TreeItem
                    key={item.ChildrenNode1.Cuenta}
                    nodeId={item.ChildrenNode1.Cuenta}
                    label={item.ChildrenNode1.Nombre}
                  >
                    {item.ChildrenNode1.ChildrenNode1 && (
                      <TreeItem
                        key={item.ChildrenNode1.ChildrenNode1.Cuenta}
                        nodeId={item.ChildrenNode1.ChildrenNode1.Cuenta}
                        label={item.ChildrenNode1.ChildrenNode1.Nombre}
                      ></TreeItem>
                    )}
                  </TreeItem>
                )}
              </TreeItem>
            )
        )}
      {/* <TreeItem nodeId="1" label="Applications">
        <TreeItem nodeId="2" label="Calendar" />
      </TreeItem>
      <TreeItem nodeId="5" label="Documents">
        <TreeItem nodeId="10" label="OSS" />
        <TreeItem nodeId="6" label="MUI">
          <TreeItem nodeId="8" label="index.js" />
        </TreeItem>
      </TreeItem> */}
    </TreeView>
  );
}
