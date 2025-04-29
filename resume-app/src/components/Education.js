import React, { useState } from 'react';
import '../styles/Education.css';

function Education(){
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({school: '', title: '', degree: ''})
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        if (editIndex !== null){
            const updated = [...entries];
            updated[editIndex] = form;
            setEntries(updated);
            setEditIndex(null);
        }
        else{
            setEntries([...entries, form]);
        }
        setForm({school: '', title: '', degree: ''});
    };

    return(
        <section className='section education'>
            <h2>Education</h2>
            <form className='form'>
                <input name="school" placeholder='School Name' value={form.school} onChange={handleChange}/>
                <input name="title" placeholder='Title of Study' value={form.title} onChange={handleChange}/>
                <input name="degree" placeholder='Degree' value={form.degree} onChange={handleChange}/>
                <button type="button" onClick={handleSubmit}>{editIndex !== null ? 'Update' : 'Add'}</button>
            </form>
            <div className='list'>
                {entries.map((entry, idx) =>(
                    <div key={idx} className='item'>
                        <p>
                            <strong>{entry.school}</strong> - {entry.title} ({entry.degree})
                        </p>
                        <button onClick={() => { setForm(entry); setEditIndex(idx); }}>
                            Edit
                        </button>
                        </div>
                ))}
            </div>
        </section>
    )
}

export default Education;