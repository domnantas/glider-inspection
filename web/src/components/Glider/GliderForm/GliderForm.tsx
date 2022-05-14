import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'



const GliderForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    props.onSave(data, props?.glider?.id)
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
          name="gliderTypeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Glider type id
        </Label>
        
          <NumberField
            name="gliderTypeId"
            defaultValue={props.glider?.gliderTypeId}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="gliderTypeId" className="rw-field-error" />

        <Label
          name="callsign"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Callsign
        </Label>
        
          <TextField
            name="callsign"
            defaultValue={props.glider?.callsign}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="callsign" className="rw-field-error" />

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

export default GliderForm
