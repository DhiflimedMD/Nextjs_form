import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useRouter } from 'next/router'


const Login = () => {
    const router = useRouter();

    const schema = yup.object({
        FirstName: yup.string().required().max(30),
        Email: yup.string().required().max(30),
        Password: yup.string().required().max(30),
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = (data) => {
        fetch('/api/formdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert(`Welcome ${data.FirstName}`)
        router.push('/Welcome');
    
    }


return (
    <div className='form-container'>
        <h1>SIGN IN</h1>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>

            <input className='form-field'
                type='text'
                placeholder='First Name'
                name='FirstName'
                id='FirstName'
                {...register("FirstName")}

            />{errors.FirstName && (
                <span>First Name is required</span>
            )}
            <input className='form-field'
                type='text'
                placeholder='Email'
                name='Email'
                id='Email'
                {...register("Email")}
            />{errors.Email && (
                <span>Email is required</span>
            )}
            <input className='form-field'
                type='password'
                placeholder='Password'
                name='Password'
                id='Password'
                {...register("Password")}
            />{errors.Password && (
                <span>Password is required</span>
            )}
            <button className="form-field" type="submit">Submit</button>

        </form>
    </div>
)
}

export default Login

