import React from "react";

export const ModalEditar = (body) => {
  return (
    <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
      {bodyEditar}
    </Modal>
  );
};
