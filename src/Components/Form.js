import React from 'react'

export default function Form() {
  return (
    <div className='container-fluid'>
      <div className='heading' style={
        {
          fontSize: '35px',
          textAlign: 'center',
          textDecoration: 'underline',


        }}>
        Enquiry form UnIcOdE
        <i class="fa-regular fa-question"></i>
      </div>
      <div className='box'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }}
      >
        <form className="row g-3"
          style={{
            marginTop: '25px',
          }}
        >
          <div className="col-md-4">
            <label htmlFor="validationServer01" class="form-label"
            style={{
              fontFamily:"monospace"
            }}>First name</label>
            <input
              type="text"
              class="form-control is-valid"
              id="validationServer01"
              value="Mark"
              name="fname"

              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServer02" class="form-label"
            style={{
              fontFamily:"monospace"
            }}>
            Last name</label>
            <input
              type="text"
              class="form-control is-valid"
              id="validationServer02"
              value="Otto"
              name="lname"
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServerUsername" class="form-label"
            style={{
              fontFamily:"monospace"
            }}>
            Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">@</span>
              <input
                type="text"
                class="form-control is-invalid"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                name='uname'
                required />
              <div id="validationServerUsernameFeedback" class="invalid-feedback"
              style={{
              fontFamily:"monospace"
            }}>
                Please choose a username.
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationServer03" class="form-label"
            style={{
              fontFamily:"monospace"
            }}>City</label>
            <input
              type="text"
              class="form-control is-invalid"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              name='city'
              required />
            <div id="validationServer03Feedback" class="invalid-feedback"
            style={{
              fontFamily:"monospace"
            }}>
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3">
            <label htmlFor="validationServer04" class="form-label"
            style={{
              fontFamily:"monospace"
            }}>State</label>
            <select
              className="form-select is-invalid"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              name='state'
              required>
              <option selected disabled value="">-----Select your State------</option>

              <option>West Bengal</option>
              <option>State 2</option>
              <option>State 3</option>
              <option>State 4</option>
              <option>State 5</option>
              <option>State 6</option>

            </select>
            <div id="validationServer04Feedback" class="invalid-feedback"
            style={{
              fontFamily:"monospace"
            }}>
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3">
            <label htmlFor="validationServer05" class="form-label">Zip</label>
            <input
              type="text"
              class="form-control is-invalid"
              id="validationServer05"
              aria-describedby="validationServer05Feedback"
              name='zip'
              required />
            <div id="validationServer05Feedback" class="invalid-feedback"
            style={{
              fontFamily:"monospace"
            }}>
              Please provide a valid zip.
            </div>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input is-invalid"
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required />
              <label class="form-check-label" for="invalidCheck3"
              style={{
              fontFamily:"monospace"
            }}>
                Agree to terms and conditions
              </label>
              <div id="invalidCheck3Feedback" class="invalid-feedback"
              style={{
              fontFamily:"monospace"
            }}>
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary"
              type="submit"

            >Submit form</button>
            <span className='btn btn-success'
              style={{
                marginLeft: '5px'
              }}> Update </span>
          </div>
        </form>
      </div>


    </div>
  )
}

