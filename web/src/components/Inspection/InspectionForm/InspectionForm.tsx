import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const InspectionForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    props.onSave(data, props?.inspection?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="gliderId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Glider id
        </Label>
        
          <NumberField
            name="gliderId"
            defaultValue={props.inspection?.gliderId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gliderId" className="rw-field-error" />

        <Label
          name="inspectorName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Inspector name
        </Label>
        
          <TextField
            name="inspectorName"
            defaultValue={props.inspection?.inspectorName}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="inspectorName" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default InspectionForm
