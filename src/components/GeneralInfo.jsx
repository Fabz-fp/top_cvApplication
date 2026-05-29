import { useState } from 'react';

function GeneralInfo() {
    const [isEditing, setIsEditing] = useState(true);

    const [generalInfo, setGeneralInfo] = useState({
        name: '',
        email: '',
        phone: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    function handleEdit() {
        setIsEditing(true);
    }

    if (isEditing) {
        return (
            <section>
                <h2>General Information</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input 
                            type='text'
                            id='name'
                            name='name'
                            placeholder='John Doe'
                            value={generalInfo.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='john.d@email.com'
                            value={generalInfo.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='phone'>Phone Number</label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='555-555-5555'
                            value={generalInfo.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </section>
        );
    }

    return (
        <section>
            <h2>General Information</h2>

            <div className='info-group'>
                <span className='info-label'>Name</span>
                <p>{generalInfo.name}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Email</span>
                <p>{generalInfo.email}</p>
            </div>
            
            <div className='info-group'>
                <span className='info-label'>Phone</span>
                <p>{generalInfo.phone}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default GeneralInfo;