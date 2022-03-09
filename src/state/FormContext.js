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
        
        checklist_open: "1",
        domain_open: "0",
        instruction_open: "0",
        collection_open: "0",
        sharing_open: "0",
        control_open: "0",
        security_open: "0",

        form_order: [
          "checklist",
          "domain",
          "instruction",          
          "collection",
          "sharing",
          "control",
          "security"              
        ],

        sections: [
          "collection",
          "sharing",
          "control",
          "security"
        ],
        
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
        progress:{ variant:"primary", value:0, text:""},

        lastSender: null
      }      
    }

    checkMenuState = () => {
        var that = this;
        
        var lastSenderIndex = this.state.Form.form_order.indexOf(this.state.Form.lastSender)
        var count = 0

        // check if complete
        var runningSection = ""
        this.state.Form.form_order.forEach(function(val) {
            if(that.checkForm(`${val}_open`) == "1") {
              runningSection = val;
              count++ 
            }
        });

        var diff = count - lastSenderIndex

        if(diff == 1) {  // prevents leaking activations
            var openTarget = this.state.Form.form_order[count]        
            if(this.state.Form.sections.includes(openTarget)) {               
              if(openTarget == this.state.Form.sections[0] && this.state.Form.domainSubmit) {
                this.completeStep(openTarget)
              
              } else {
                var invalid = false
                for (let i in [0, 1, 2]) {
                    if(
                      (that.checkForm(`${runningSection}_${i}_a`) != null) && (that.checkForm(`${runningSection}_${i}_a`).rate != null) ||
                      (that.checkForm(`${runningSection}_${i}_a`) != null) && (that.checkForm(`${runningSection}_${i}_b`) != null)                     
                    ) {
                    } else {
                        invalid = true
                    }
                }
                  
                      if(!invalid) {
                        this.completeStep(openTarget)
                      }     
              }

            } else {                        
                  this.completeStep(openTarget)                
            }
      }
      
    }

    completeStep = (openTarget) => {
          console.log(`${openTarget}_open will be 1`)
          this.setState({ 
            Form : {
                ...this.state.Form,
                [`${openTarget}_open`]: "1"   
            }
          });
    }
    
    updateForm = (ref, value) => {
      console.log("update one");
      
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

    updateFormMultiple = (ref1, value1, ref2, value2, ref3, value3, checkHash = true) => {
      console.log("update multiple", ref1, value1, ref2, value2, ref3, value3, checkHash);
      let that = this;
      
      // exceptions ( max 2 )
      var ref4 = null
      var value4 = null
      var ref5 = null
      var value5 = null
      if(typeof value1.exceptions !== 'undefined') { // ?
        ref4 = value1.exceptions[0].label
        value4 = value1.exceptions[0].rating
        if(value1.exceptions.length > 1) {
          ref5 = value1.exceptions[1].label
          value5 = value1.exceptions[1].rating
        }
      }
    
      this.setState({ 
        Form : {
            ...this.state.Form,
            [ref1]: value1,
            [ref2]: value2,
            [ref3]: value3,
            [ref4]: value4,
            [ref5]: value5
        }
      }, function() {
          if(checkHash) {
            that.checkHash();
          }
      });
    }

    checkHash = () => {
      var hashData = FormStateToHash(this.state.Form)
      var hash = hashData.value;
      var progress = hashData.progress;
      var that = this;
      this.setState({
        Form: {
          ...this.state.Form,
          generatedHash: hash,
          progress: progress
        }
      }, function(params) {
        that.checkMenuState();
      })
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
