import React, { Component } from 'react'
import { HashToLabelState } from "./Logic"
const LabelContext = React.createContext()

class LabelProvider extends Component {
    // Context state
    state = {
      label: {
        path: '', 
        valid: false,
        domain: '',
        openCategory: null
      }      
    }
    
    // Method to update state
    setLabel = label => {
      this.setState(prevState => ({ label }))
    }

    pupulateLabel = (labelHash) => {
      var labelState = HashToLabelState(labelHash);
      console.log("got a label for you", labelState);
    }
  
    render() {

      const { children } = this.props
      const { label } = this.state
      const { setLabel, pupulateLabel } = this
  
      return (
        <LabelContext.Provider
          value={{
            label,
            setLabel,
            pupulateLabel
          }}
        >
          {children}
        </LabelContext.Provider>
      )
    }
  }
  
export default LabelContext

export { LabelProvider }
