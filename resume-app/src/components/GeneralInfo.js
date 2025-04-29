import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo() {
    const [data, setData] = useState({ name: '', email: '', phone: '' });
    const [editMode, setEditMode] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    return (
        <section className='section general-info'>
            <h2>General Information</h2>
            {editMode ? (
                <form className='form'>
                    <input name='name' placeholder='Name' value={data.name} onChange={handleChange} />
                    <input name='email' placeholder='Email' value={data.email} onChange={handleChange} />
                    <input name='phone' placeholder='Phone' value={data.phone} onChange={handleChange} />
                    <button type='button' onClick={() => setEditMode(false)}>Submit</button>
                </form>
            ) : (
                <div className='display'>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Phone:</strong> {data.phone}</p>
                    <button onClick={() => setEditMode(true)}>Edit</button>
                </div>
            )}
        </section>
    )
}

export default GeneralInfo;