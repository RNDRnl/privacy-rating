import React, { Component } from 'react'
import { HashToLabelState } from "./Logic"
const LabelContext = React.createContext()

class LabelProvider extends Component {
    // Context state
    state = {
      Label: null,
      openCategory: null
    }
    
    // Method to update state
    setLabelState = (newState) => {
      this.setState({
          openCategory: newState
       })
    }

    pupulateLabel = (labelHash) => {
      var labelData = HashToLabelState(labelHash);
      this.setState({
        Label: labelData
      });
    }
  
    render() {
      const { children } = this.props
      const { Label, openCategory } = this.state
      const { setLabelState, pupulateLabel } = this
      
      return (
        <LabelContext.Provider
          value={{
            Label,
            openCategory,
            setLabelState,
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
