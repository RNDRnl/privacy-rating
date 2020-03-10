import React from 'react';

import Frame from './frame'
import { LabelProvider } from '../../state/LabelContext'


const initialLabelState = {
    path: '123456789', 
    valid: true,
    domain: 'bol.com',
    openCategory: null
}

const App = () => {
    return (
        <LabelProvider>
            <Frame init={initialLabelState} />
        </LabelProvider>
    );
};

export default App;