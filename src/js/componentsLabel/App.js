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
                <div>{this.props.labelId}</div>
                <Label labelId={this.props.labelId} />
            </LabelProvider>
        );
    }
};

export default App;