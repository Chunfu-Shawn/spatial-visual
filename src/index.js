import React from 'react';
import { Vitessce } from 'vitessce';
import myViewConfig from './vi-config.json';
import 'vitessce/dist/es/production/static/css/index.css';
import './index.css';
import * as ReactDOM from "react-dom";


export default function MyApp() {
    return (
        <Vitessce
            config={myViewConfig}
            height={600}
            theme="light"
        />
    );
}

// ========================================

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);



