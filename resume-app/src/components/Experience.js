import React, { useState } from 'react';
import '../styles/Experience.css';

export default function Experience() {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({
        company: '',
        position: '',
        responsibilities: '',
        from: '',
        to: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (editIndex !== null) {
            const updated = [...entries];
            updated[editIndex] = form;
            setEntries(updated);
            setEditIndex(null);
        } else {
            setEntries([...entries, form]);
        }
        setForm({
            company: '',
            position: '',
            responsibilities: '',
            from: '',
            to: ''
        });
    };

    return (
        <section className="section experience">
            <h2>Experience</h2>
            <form className="form">
                <input
                    name="company"
                    placeholder="Company Name"
                    value={form.company}
                    onChange={handleChange}
                />
                <input
                    name="position"
                    placeholder="Position Title"
                    value={form.position}
                    onChange={handleChange}
                />
                <textarea
                    name="responsibilities"
                    placeholder="Main Responsibilities"
                    value={form.responsibilities}
                    onChange={handleChange}
                />
                <input
                    name="from"
                    placeholder="From"
                    value={form.from}
                    onChange={handleChange}
                />
                <input
                    name="to"
                    placeholder="To"
                    value={form.to}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleSubmit}>
                    {editIndex !== null ? 'Update' : 'Add'}
                </button>
            </form>

            <div className="list">
                {entries.map((entry, idx) => (
                    <div key={idx} className="item">
                        <p>
                            <strong>{entry.company}</strong> — {entry.position} ({entry.from}–{entry.to})
                        </p>
                        <p>{entry.responsibilities}</p>
                        <button onClick={() => { setForm(entry); setEditIndex(idx); }}>
                            Edit
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
