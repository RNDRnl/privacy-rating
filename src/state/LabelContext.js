import React, { Component } from 'react'
import { HashToLabelState } from "./Logic"
const LabelContext = React.createContext()

class LabelProvider extends Component {
    // Context state
    state = {
      Label: null,
      LabelObject : null,
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
        Label: labelData.labelRender,
        LabelObject: labelData.labelObject
      });
    }
  
    render() {
      const { children } = this.props
      const { Label, LabelObject, openCategory } = this.state
      const { setLabelState, pupulateLabel } = this
      
      return (
        <LabelContext.Provider
          value={{
            Label,
            LabelObject,
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
