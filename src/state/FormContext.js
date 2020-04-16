import React, { Component } from 'react'
import { FormStateToHash, HashToLabelState } from "./Logic"
const FormContext = React.createContext()
import Rating from "./Rating"

class FormProvider extends Component {
    
    state = {
      Form: {
        loaded: true,
        domain: null,
        domainSubmit: null,
        validUrl: false,
        declare: null,
        
        scrollTarget: 0,
        
        instruction_open: "1",
        domain_open: "0",
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
        that.checkHash();
      });
    }

    updateFormMultiple = (ref1, value1, ref2, value2, ref3, value3) => {
      let that = this;
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref1]: value1,
            [ref2]: value2,
            [ref3]: value3
        }
      }, function() {
        that.checkHash();
      });
    }

    checkHash = () => {
      var hashData = FormStateToHash(this.state.Form)
      var hash = hashData.value;
      var progress = hashData.progress;
      
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
      if(Array.isArray(ref)) {
        var boolean = null;
        if(ref.length == 1) {
          boolean = this.state.Form[ref[0]]
        } else if(ref.length == 2) {
          if(this.state.Form[ref[0]] == null && this.state.Form[ref[1]] == null) {
            boolean = null;
          }
          if(this.state.Form[ref[0]] instanceof Rating) {
            if(this.state.Form[ref[0]].rate != null) {
                boolean = true
            }
          }
          if(this.state.Form[ref[1]] instanceof Rating) {
            if(this.state.Form[ref[1]].rate != null) {
                boolean = true
            }
          }
        }
        return boolean;
      } else {
        return this.state.Form[ref];
      }
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
