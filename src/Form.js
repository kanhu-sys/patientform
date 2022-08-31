import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'


import { useNavigate } from 'react-router-dom';

import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect, useState } from 'react';



function Form() {

  const navigate = useNavigate();

  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const { append, fields, remove } = useFieldArray({
    control,
    name: 'patient'
  })

  const [input, setInput] = useState({});

  const inputFields = {
    problems: '',
    problem: '',
    physical: '',
    mental: '',
    experience: '',
    notRelevant: '',
    lyingdown: '',
    sitting: '',
    standing: '',
    walking: '',
    problemScale: ''
  }


  useEffect((input) => {
    append(input);
  }, [])


  const addForm = () => {
    setInput(inputFields);
    append(input)
  }

  const onSubmit = (patientData) => {
    console.log(patientData);
    navigate('form-data', {
      state: {
        patientData
      }
    });
  }




  return (
    <div className='container mb-3'>
      <div className="text-primary pt-3">
        <h3 className="text-center display-6 fw-bold">Pain & Functional Description</h3>
      </div>

      <div className='text-center fw-bold'>
        <p>
          The description of the current situation gives your Optimum
          <br />
          Trainer a picture of and clues to the underlying causes of your problems
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} id="patient-form">

        {
          fields.map((item, index) => (
            <div className='card mb-3' key={item.id}>
              <div className='card-body'>
                <div className='mb-3'>
                  <label className='fw-normal mt-3 mb-1 form-label'>
                    If you have problem with pain/aches, stiffness, weakness or functional problems, describe
                    <br />
                    this/these below. (List the symptoms in descending order with the most troublesome first)
                  </label>
                  <textarea {...register(`patient.${index}.problems`, { required: true })} className='form-control' defaultValue={item.value}></textarea>

                  {errors.problems && errors.problems.type === 'required' && <span>Can not be empty</span>}

                </div>


                <div className='mt-3'>
                  <div className="row">
                    <div className="col">
                      <label>Have you been diagnosed with this problem?</label>
                    </div>
                    <div className='col'>
                      &nbsp;<input type="radio" {...register(`patient.${index}.problem`)} value="Not relevant" /> Not relevant
                      &nbsp;<input type="radio" {...register(`patient.${index}.problem`)} value="Yes" /> Yes
                      &nbsp;<input type="radio" {...register(`patient.${index}.problem`)} value="No" /> No
                    </div>
                  </div>
                </div>

                <div className='mt-3'>
                  <div className="row">
                    <div className="col">
                      <label>Did the problem start after a physical trauma?</label>
                    </div>
                    <div className='col'>
                      &nbsp;<input type="radio" {...register(`patient.${index}.physical`)} value="Not relevant" /> Not relevant
                      &nbsp;<input type="radio" {...register(`patient.${index}.physical`)} value="Yes" /> Yes
                      &nbsp;<input type="radio" {...register(`patient.${index}.physical`)} value="No" /> No
                    </div>
                  </div>
                </div>


                <div className='mt-3'>
                  <div className="row">
                    <div className="col">
                      <label>Did the problem start after a mental trauma?</label>
                    </div>
                    <div className='col'>
                      &nbsp;<input type="radio" {...register(`patient.${index}.mental`)} value='Not relevant' /> Not relevant
                      &nbsp;<input type="radio" {...register(`patient.${index}.mental`)} value='Yes' /> Yes
                      &nbsp;<input type="radio" {...register(`patient.${index}.mental`)} value='No' /> No
                    </div>
                  </div>
                </div>

                <div className='mt-3'>
                  <div className='row'>
                    <div className='col'>
                      <label>How often do you experience the problem?</label>
                      <br />
                      <input type="radio" {...register(`patient.${index}.experience`)} value="Not relevant" /> &nbsp;Not relevant &nbsp;
                      <input type="radio" {...register(`patient.${index}.experience`)} value="Daily" /> &nbsp;Daily &nbsp;
                      <input type="radio" {...register(`patient.${index}.experience`)} value="Several times/week" /> &nbsp;Several times/week &nbsp;
                      <input type="radio" {...register(`patient.${index}.experience`)} value="A few times/month" /> &nbsp;A few times/month &nbsp;
                    </div>
                  </div>
                </div>

                <div className='mt-3'>
                  <div className='row'>
                    <div className='col'>
                      <label>When do you experience the problem?</label>
                      <br />
                      <input type="checkbox" {...register(`patient.${index}.notRelevant`)} value="Not relevant" /> &nbsp;Not relevant
                      <br />
                      <input type="checkbox" {...register(`patient.${index}.lyingdown`)} value="When lying down" /> &nbsp;When lying down
                      <br />
                      <input type="checkbox" {...register(`patient.${index}.sitting`)} value="When Sitting" /> &nbsp;When Sitting
                      <br />
                      <input type="checkbox" {...register(`patient.${index}.standing`)} value="Under standing" /> &nbsp;Under standing
                      <br />
                      <input type="checkbox" {...register(`patient.${index}.walking`)} value="In walking" /> &nbsp;In walking
                    </div>
                    <div className="col">
                      <div className='otherBox-container'>
                        <div className="otherBox">
                          Other? For example in rotations, side bends, wing stairs, when<br />
                          working with the arms above the head.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-3'>
                  <div className='row'>
                    <div className='col'>
                      <label>
                        How intense is the experience of the problem on avarage on a 0-10 scale?
                      </label>
                      <br />
                      <table className=''>
                        <thead>
                          <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="1" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="2" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="3" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="4" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="5" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="6" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="7" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="8" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="9" /></td>
                            <td><input type="radio" {...register(`patient.${index}.problemScale`)} value="10" /></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {
                  (index === 0) ? "" : <div className="row mt-3" id="remove" style={{ paddingBottom: '35px', paddingTop: '30px' }}>
                    <div className="col">
                      <span id="addButton" title="Remove above description">
                        <button className='submitBtn' onClick={() => remove(index)} title="Remove above description">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                        </button>
                      </span>
                    </div>
                  </div>
                }
              </div>
            </div>
          ))
        }


      </form>
      <div className="row mt-3" style={{ paddingBottom: '35px', paddingTop: '30px' }}>
        <div className="col addButton-container">
          <span id="addButton">
            <button className='submitBtn' onClick={addForm}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="blue" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </button>
          </span>
        </div>
      </div>
      <div className='row mt-3'>
        <div className="col btn-container">
          <button className='button1'>BACK</button>
          <button className='button2' type="submit" form='patient-form'>NEXT</button>
        </div>
      </div>
    </div>
  );
}

export default Form;