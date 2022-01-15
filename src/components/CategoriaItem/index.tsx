import React from 'react';

import { CategoriaView, CategoriaFoto, CategoriaTexto } from './styles';

const CategoriaItem = ({ foto, texto, key }) => {
  return (
    <CategoriaView key={key}>
      <CategoriaFoto
        source={{
          uri: foto.trim(),
          width: 98,
          height: 58,
        }}
      />
      <CategoriaTexto>{texto}</CategoriaTexto>
    </CategoriaView>
  );
};

export default CategoriaItem;
