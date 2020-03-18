import React from 'react';

import Frame from './frame'
import { LabelProvider } from '../../state/LabelContext'


const initialLabelState = {
    path: '', 
    valid: false,
    domain: '',
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