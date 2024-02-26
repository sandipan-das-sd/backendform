import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
export default function Form() {
  let [FormData,setFormData]=useState(
        {
          fname:'',
          lname:'',
          uname:'', 
          city:'',
          state:'',
          zip:'',
          index:'', 
        }
    )

    //get value is a function where user can type the value and we can get the value of all the input fields 
    //on chnage and event are adding for this  here to type
    let[userData,setuserData]=useState(
    [

    ]

    )
    let getValue=(event)=>{
      let oldData={...FormData}
      let inputName=event.target.name;   //fname
      let inputValue=event.target.value; //Sandipan
      oldData[inputName]=inputValue;      //[fname]=Sandipan
      // console.log(inputName);         //fname
      setFormData(oldData)
      // console.log('Form submitted:', FormData); 

      
      
    
  }

  let handelSubmit=(event)=>{
    let currentUserFormdata={
      fname:FormData.fname,
      lname:FormData.lname,
      uname:FormData.uname,
      city:FormData.city,
      state:FormData.state,
      zip:FormData.zip,
    }
    let oldUserData=[...userData,currentUserFormdata]; 
    setuserData(oldUserData)
    // To empty the input field after adding/getting the data
    setFormData(
      {
        fname:'',
        lname:'',
        uname:'', 
        city:'',
        state:'',
        zip:'',
        index:'', 
      }
    )
    event.preventDefault();
  }
  return (
      
    <div className='container-fluid'>
      <div className='heading' style={
        {
          fontSize: '35px',
          textAlign: 'center',
          textDecoration: 'underline',


        }}>
        Enquiry form UnIcOdE
        <i class="fa-regular fa-question"
        ></i>
      </div>
      <div className='box'
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }}
      >
        <form className="row g-3"
        onSubmit={handelSubmit}
        
          style={{
            marginTop: '25px',
          }}
        >
          <div className="col-md-4">
            <label htmlFor="validationServer01" className="form-label"
            style={{
              fontFamily:"monospace"
            }}>First name</label>
            <input
              type="text"
              onChange={getValue}
              class="form-control is-valid"
              id="validationServer01"
              placeholder='Mark'
              name="fname"

              value={FormData.fname}

              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServer02" className="form-label"
            style={{
              fontFamily:"monospace"
            }}>
            Last name</label>
            <input
              type="text"
              onChange={getValue}
              className="form-control is-valid"
              id="validationServer02"
              placeholder='Otto'
              name="lname"
              value={FormData.lname}
              required />
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationServerUsername" className="form-label"
            style={{
              fontFamily:"monospace"
            }}>
            Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text" id="inputGroupPrepend3">@</span>
              <input
                type="text"
                onChange={getValue}
                className="form-control is-invalid"
                id="validationServerUsername"
                aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                name='uname'
                value={FormData.username}
                placeholder='xyz_123'
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
            <label htmlFor="validationServer03" className="form-label"
            style={{
              fontFamily:"monospace"
            }}>City</label>
            <input
              type="text"
              onChange={getValue}
              className="form-control is-invalid"
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              name='city'
              placeholder='California'
              value={FormData.city}
              required />
            <div id="validationServer03Feedback" class="invalid-feedback"
            style={{
              fontFamily:"monospace"
            }}>
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3">
            <label htmlFor="validationServer04" className="form-label"
            style={{
              fontFamily:"monospace"
            }}>State</label>
            <select
              className="form-select is-invalid"
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              name='state'
              value={FormData.state}
              placeholder='MarryLand'
              onChange={getValue}
              required>
              <option selected disabled value="">-----Select your State------</option>

              <option>West Bengal</option>
              <option>State 2</option>
              <option>State 3</option>
              <option>State 4</option>
              <option>State 5</option>
              <option>State 6</option>

            </select>
            <div id="validationServer04Feedback" className="invalid-feedback"
            style={{
              fontFamily:"monospace"
            }}>
              Please select a valid state.
            </div>
          </div>
          <div className="col-md-3">
            <label htmlFor="validationServer05" className="form-label">Zip</label>
            <input
              type="text"
              onChange={getValue}
              className="form-control is-invalid"
              id="validationServer05"
              aria-describedby="validationServer05Feedback"
              name='zip'
              value={FormData.zip}
              required />
            <div id="validationServer05Feedback" className="invalid-feedback"
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
          <div className="col-12">
          {/*If all the fields are empty then we will show submit button else update button here index are represting the empty and full state if we put index =0/1/or any value in form data then we can see the update button is showing*/}
          {FormData.index === "" ? (
  <button className="btn btn-primary" type="submit">Submit</button>
) : (
  <span className='btn btn-success' style={{ marginLeft: '5px' }}>Update</span>
)}

          </div>
        </form>
        
      </div>

    <div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
      <th>City</th>
      <th>State</th>
      <th>Zip</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {userData.length >= 1 ? (
      userData.map((obj, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{obj.fname}</td>
          <td>{obj.lname}</td>
          <td>{obj.uname}</td>
          <td>{obj.city}</td>
          <td>{obj.state}</td>
          <td>{obj.zip}</td>
          <td>
            <button className="btn btn-success" type="submit">
              Update
            </button>
            <button className="btn btn-danger" type="submit">
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={8}>No data Found</td>
      </tr>
    )}
  </tbody>
</Table>

    </div>
    </div>
    
  )
}

