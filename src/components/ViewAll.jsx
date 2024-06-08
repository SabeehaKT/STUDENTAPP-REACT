import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "name": "Aju", "Admno": 101, "RollNo": 1 },
            { "name": "Akash", "Admno": 102, "RollNo": 2 },
            { "name": "Abijit", "Admno": 103, "RollNo": 3 },
            { "name":"Abhay", "Admno":104, "RollNo":4}
        ]
    )
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHZ7W7EQzAXlDElt-UavraguMz7vr-I3uOA&s" height="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">Roll.No {value.RollNo}</p>
                                                <p class="card-text">Adm.No {value.Admno}</p>
                                                <a href="#" class="btn btn-primary">View Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll