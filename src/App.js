import React from 'react';
//import { FormGenerate } from './formGenerate/formGenerate';
import { Lienzo } from './formGenerateV2/Lienzo';

export const App = () => {

      const test =[{
        "type":"FragmentArray",
        "key":"one",
        "children":[
            {
                "type":"input",
                "label":"success",
                "key": "success",
                "value": ""
            },
            {
                "type":"condition",
                "key":"one-one",
            },
            {
                "type":"input",
                "label":"position_source",
                "key": "position_source",
                "value": ""
            }
        ]
    }
    ]

    // const test =[
    //     {
    //         "type":"containerElement",
    //         "key":"one-one",
    //         "baseObject":[
    //             {
    //                 "type":"input",
    //                 "label":"source",
    //                 "key": "source",
    //                 "value": ""
    //             },
    //             {
    //                 "type":"input",
    //                 "label":"operator",
    //                 "key": "operator",
    //                 "value": ""
    //             },
    //             {
    //                 "type":"input",
    //                 "label":"objective",
    //                 "key": "objective",
    //                 "value": ""
    //             }
    //         ]
    //     },
    //     {
    //         "type":"containerElement",
    //         "key":"one-one",
    //         "baseObject":[
    //             {
    //                 "type":"input",
    //                 "label":"source",
    //                 "key": "source",
    //                 "value": ""
    //             },
    //             {
    //                 "type":"input",
    //                 "label":"operator",
    //                 "key": "operator",
    //                 "value": ""
    //             },
    //             {
    //                 "type":"input",
    //                 "label":"objective",
    //                 "key": "objective",
    //                 "value": ""
    //             }
    //         ]
    //     }
    // ]

    //const jsonForm = {};

  return (
      <>
      <h1>test</h1>
        <Lienzo pJsonForm={test} />
      </>
  );
};
