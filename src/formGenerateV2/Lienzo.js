import React from 'react';
import { Renderizador } from './renderizadorElementos/Renderizador';
import Button from 'emerald-ui/lib/Button';

export const Lienzo = ({ pJsonForm }) => {
  return(
    <>
        {
            pJsonForm.map((item,index) =>(
                <Renderizador key={item.key} element={item} />
            ))
        }
        <Button className='bright' color='info'>Submit</Button>
    </>
  );
};
