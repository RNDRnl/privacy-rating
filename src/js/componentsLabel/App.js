import React, {Component} from 'react';
import Label from './Label'
import { LabelProvider } from '../../state/LabelContext'

class App extends Component {  
    constructor() {
        super()
    }

    render() {
        return (
            <LabelProvider>
                <Label labelId={this.props.labelId} domain={this.props.domain} />
            </LabelProvider>
        );
    }
};

export default App;