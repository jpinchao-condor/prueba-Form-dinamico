import React from 'react';
import { ConditionField } from '../conditionField/ConditionField';
import { FragmentFormArray } from '../fragmentForm/FragmentFormArray';
import TextField from 'emerald-ui/lib/TextField';

export const Renderizador = ({element}) => {

    const validateElement = (item)=>{

        switch (item.type) {
            case "input":
                return <TextField label={item.label} value={item.value} />
            case "condition":
                return <ConditionField />
            case "FragmentArray":
                return <FragmentFormArray partToRender={item.children} />
            default:
                break;
        }

    }

  return validateElement(element)
};
