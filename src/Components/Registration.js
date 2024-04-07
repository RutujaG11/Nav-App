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
        const data = JSON.stringify(formData)
        localStorage.setItem('gfg', data)
        navigate('/Login')
    }

    return (
        <div className='container'>
            
            <hr/>
               <form onSubmit={addUser}>
                <div className='card'>
                    <div className='card-body'>
                    <div className="card-header">
                        <h4>Register</h4>
                    </div>
                    <br/>
                       
                <input class="form-control" type='text' placeholder='Enter Username' name='uname'
                    onChange={handleData}/>
                    <br/>
                <input class="form-control" type='email' placeholder='Enter Email' name='email'
                    onChange={handleData}/>
                    <br/>
                <button>Register</button>
                
               
                </div>
                </div>
                
            </form>
            
        </div>
    );
}

export default Register;




