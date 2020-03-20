import React, { Component } from 'react'
import { FormStateToHash, HashToLabelState } from "./Logic"
const FormContext = React.createContext()

class FormProvider extends Component {
    
    state = {
      Form: {
        loaded: true,
        domain: null,
        domainSubmit: null,
        validUrl: false,
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
        
        generatedHash:null,
        progress:{ variant:"primary", value:0, text:""}
      }      
    }
    
    updateForm = (ref, value) => {
      let that = this;
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref]: value   
        }
      }, function() {
        that.checkHash()
        console.log("state", that.state);
      });
    }

    updateFormMultiple = (ref1, value1, ref2, value2) => {
      let that = this;
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref1]: value1,
            [ref2]: value2
        }
      }, function() {
        that.checkHash()
      });
    }

    checkHash = () => {
      var hashData = FormStateToHash(this.state.Form)
      var hash = hashData.value;
      var progress = hashData.progress;
      console.log(progress);
      this.setState({
        Form: {
          ...this.state.Form,
          generatedHash: hash,
          progress: progress
        }
      })
    }

    componentDidUpdate() {
    }

    checkForm = (ref) => {
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
