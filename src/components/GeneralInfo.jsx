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
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id='name'
                            name='name'
                            value={generalInfo.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            value={generalInfo.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id='phone'
                            name='phone'
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

            <p>
                <strong>Name:</strong> {generalInfo.name}
            </p>

            <p>
                <strong>Email:</strong> {generalInfo.email}
            </p>

            <p>
                <strong>Phone:</strong> {generalInfo.phone}
            </p>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default GeneralInfo;