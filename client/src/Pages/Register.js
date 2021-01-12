import React from 'react'

const Register = () => {
    return (
        <div>
                  <form>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name'/><br/><br/>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email'/><br/><br/>
            <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default Register
