import React, { Component } from 'react'

const FormContext = React.createContext()

class FormProvider extends Component {
    
    state = {
      Form: {
        loaded: true,
        domain: null,
        domainSubmit: null,
        declare: null,
        
        domain_open: "1",
        declare_open: "0",
        collection_open: "0",
        sharing_open: "0",
        control_open: "0",
        security_open: "0",
        
        collection_0_a:null,
        collection_0_b:null,
        collection_1_a:null,
        collection_1_b:null,
        collection_2_a:null,
        collection_2_b:null,
        
        sharing_0_a:null,
        sharing_0_b:null,
        sharing_1_a:null,
        sharing_1_b:null,
        sharing_2_a:null,
        sharing_2_b:null,
        
        control_0_a:null,
        control_0_b:null,
        control_1_a:null,
        control_1_b:null,
        control_2_a:null,
        control_2_b:null,
        
        security_0_a:null,
        security_0_b:null,
        security_1_a:null,
        security_1_b:null,
        security_2_a:null,
        security_2_b:null,
        
      }      
    }
    
    updateForm = (ref, value) => {
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref]: value   
        }
      });
    }

    updateFormMultiple = (ref1, value1, ref2, value2) => {
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref1]: value1,
            [ref2]: value2
        }
      });
    }

    checkForm = (ref) => {
      console.log(ref);
      console.log("img gonne rturn",this.state.Form[ref] )
      return this.state.Form[ref];
    }
  
    render() {

      const { children } = this.props
      const { Form } = this.state
      const { updateForm, checkForm, updateFormMultiple } = this
  
      return (
        <FormContext.Provider
          value={{
            Form,
            updateForm,
            checkForm,
            updateFormMultiple
          }}
        >
          {children}
        </FormContext.Provider>
      )
    }
  }
  
export default FormContext

export { FormProvider }
