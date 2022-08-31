import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Formdata = () => {
    const { state } = useLocation({});
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(state.patientData.patient);
        console.log(state.patientData.patient);
    }, [])

    const toBack = () => {
        navigate('/');
    }

    const problem = {
        backgroundColor: '#f9f9f9',
        display: 'inline-block',
        padding: '1px 2px',
        fontSize: '13px',
        margin: '3px'
    }

    return (
        <div className='container'>
            <div className='card mt-3'>
                <div className='card-header text-center display-4'>Patient Details</div>

                {
                    data.map((item, index) => {
                        return (
                            <div key={index} className="card-body">
                                <table className="table-bordered">
                                    <tbody>
                                        <tr>
                                            <th>If you have problem with pain/aches, stiffness, weakness or functional problems, describe
                                                <br />
                                                this/these below. (List the symptoms in descending order with the most troublesome first)</th>
                                            <td>{item.problems}</td>
                                        </tr>
                                        <tr>
                                            <th>Have you been diagnosed with this problem?</th>
                                            <td>{item.problem}</td>
                                        </tr>
                                        <tr>
                                            <th>Did the problem start after a physical trauma?</th>
                                            <td>{item.physical}</td>
                                        </tr>
                                        <tr>
                                            <th>Did the problem start after a mental trauma?</th>
                                            <td>{item.mental}</td>
                                        </tr>
                                        <tr>
                                            <th>How often do you experience the problem?</th>
                                            <td>{item.experience}</td>
                                        </tr>
                                        <tr>
                                            <th>When do you experience the problem?</th>
                                            <td>
                                                <span style={problem}>{item.notRelevant}</span>
                                                <span style={problem}>{item.lyingdown}</span>
                                                <span style={problem}>{item.sitting}</span>
                                                <span style={problem}>{item.standing}</span>
                                                <span style={problem}>{item.standing}</span>
                                                <span style={problem}>{item.walking}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>How intense is the experience of the problem on avarage on a 0-10 scale?</th>
                                            <td>{item.problemScale}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p></p>
                            </div>
                        )
                    })
                }

                <div className='card-footer'>
                    <button className='btn btn-warning' onClick={toBack}>BACK</button>
                </div>

            </div>
        </div>
    )
}

export default Formdata