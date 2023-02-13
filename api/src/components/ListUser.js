import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';


const ListUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .then(() => setLoading(false))
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>email</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map(el =>
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td>{el.address.street}</td>
                        </tr>

                    )
                    }
                </tbody>
            </Table>


        </div>
    )
}

export default ListUser