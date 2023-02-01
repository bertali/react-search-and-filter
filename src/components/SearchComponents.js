import React, {useState, useEffect} from "react";

const SearchComponent = () => {
    /*setear los hooks userStore*/
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState([""])
 
    /* function para traer los datos de la API */
    const UserURL = 'https://jsonplaceholder.typicode.com/users'

    const showData = async () => {
        const response = await fetch(UserURL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }
    


    /* metodo de filtros */

    /* funcion de busqueda */

    useEffect( ()=> {
        showData([])
    },)


    /* renderizamos la vista del componente */ 
 
return (
        <div>
            <table className="table table-striped table-hover mt-5 shadow-lg">
                <thead>
                    <tr className="bg-curso text-white">
                        <th>NAME</th>
                        <th>USER NAME</th>
                    </tr>
                </thead>
                <tbody>
                    { users.map ( (user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default SearchComponent