import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function AllUser() {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/allUser"
        , {
            headers: {
                token: localStorage.getItem("token"),
            }
        }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error)
            }
            else {
                setListOfUser(response.data)
                console.log(response.data);

            }

        });
    });

    return (
        <div>
            {listOfUser.map((value, key) => {
                return (
                    <div>
                        {value.email}
                        {value.name}
                        {value.city}
                    </div>
                )
            })}

        </div>
    )
}
