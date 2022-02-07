import React from 'react';
import { Renderizador } from '../renderizadorElementos/Renderizador';
import IconButton from 'emerald-ui/lib/IconButton';

export const FragmentFormArray = ({partToRender}) => {
  return (
    <fieldset>
        {
            partToRender.map((item,index) =>(
                <Renderizador key={item.key} element={item} />
            ))
        }
         <IconButton className='bright'  color='success' ariaLabel="Remove" icon="add_circle" title="removeItem" />
    </fieldset>
    );
};
