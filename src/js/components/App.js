import React from 'react';

import Frame from './frame'
import { UserProvider } from '../../state/LabelContext'


const App = () => {
    const globalState = { 
        path: '123456789', 
        valid: true,
        domain: 'bol.com'
    }

    return (
        <UserProvider value={globalState}>
            <Frame />
        </UserProvider>        
    );
};

export default App;