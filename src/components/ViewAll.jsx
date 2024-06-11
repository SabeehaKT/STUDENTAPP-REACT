import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">NAME</th>
                                                <th scope="col">ADM NO.</th>
                                                <th scope="col">ROLL NO.</th>
                                                <th scope="col">PARENT NAME</th>
                                                <th scope="col">COLLEGE</th>
                                                <th scope="col">DOB</th>
                                                <th scope="col">EMAIL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td>{value.name}</td>
                                                        <td>{value.admno}</td>
                                                        <td>{value.rollno}</td>
                                                        <td>{value.pname}</td>
                                                        <td>{value.college}</td>
                                                        <td>{value.dob}</td>
                                                        <td>{value.email}</td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll