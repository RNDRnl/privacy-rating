import React, { Component } from 'react'

const LabelContext = React.createContext()

class LabelProvider extends Component {
    // Context state
    state = {
      label: {
        domain: 'bol.com'
      }      
    }
    
    // Method to update state
    setLabel = label => {
      this.setState(prevState => ({ label }))
    }
  
    render() {

      const { children } = this.props
      const { label } = this.state
      const { setLabel } = this

  
      return (
          
        <LabelContext.Provider
          value={{
            label,
            setLabel,
          }}
        >
          {children}
        </LabelContext.Provider>
      )
    }
  }
  
export default LabelContext

export { LabelProvider }
