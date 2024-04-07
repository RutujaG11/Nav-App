import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({})

    const navigate = useNavigate()

    const handleData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log(formData);

    }
    const addUser = (e) => {
        e.preventDefault()
        const userData = localStorage.getItem('gfg')
        const data = JSON.parse(userData)
        console.log(data);

        if(data.uname === formData.uname && data.email === formData.email)
        localStorage.setItem('token', true)
        { navigate('/UserDetails')}

        
    }

    return (
        <div className='container'>
            
            <hr/>
            <form onSubmit={addUser}>

            <div className='card'>
                    <div className='card-body'>
                    <div className="card-header">
                        <h4>Login</h4>
                    </div>   
                    <br/> 

                <input className='form-control' type='text' placeholder='Enter Username' name='uname'
                    onChange={handleData}/>
                    <br/>

                <input className='form-control' type='email' placeholder='Enter Email' name='email'
                    onChange={handleData}/>
                    <br/>
                <button>Login</button>


                </div>
                </div>
            </form>
            
        </div>
    );
}

export default Register;



