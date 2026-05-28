import { useState } from 'react';

function Experience() {
    const [isEditing, setIsEditing] = useState(true);

    const [experienceInfo, setExperienceInfo] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateForm: '',
        dateUntil: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setExperienceInfo({
            ...experienceInfo,
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
                <h2>Practical Experience</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='companyName'>Company Name</label>
                        <input
                            type='text'
                            id='companyName'
                            name='companyName'
                            value={experienceInfo.companyName}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="positionTitle">Position Title</label>
                        <input
                            type='positionTitle'
                            id='positionTitle'
                            name='positionTitle'
                            value={experienceInfo.positionTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="responsibilities">Main Responsibilities</label>
                        <textarea
                            id='responsibilities'
                            name='responsibilities'
                            value={experienceInfo.responsibilities}
                            onChange={handleChange}
                            rows='5'
                        />
                    </div>

                    <div>
                        <label htmlFor="dateFrom">From</label>
                        <input
                            type='date'
                            id='dateFrom'
                            name='dateFrom'
                            value={experienceInfo.dateFrom}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="dateUntil">Until</label>
                        <input
                            type='date'
                            id='dateUntil'
                            name='dateUntil'
                            value={experienceInfo.dateUntil}
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
            <h2>Practical Experience</h2>

            <p>
                <strong>Company:</strong> {experienceInfo.companyName}
            </p>

            <p>
                <strong>Position:</strong> {experienceInfo.positionTitle}
            </p>

            <p>
                <strong>Responsibilities:</strong>
            </p>
            <p>{experienceInfo.responsibilities}</p>

            <p>
                <strong>From:</strong> {experienceInfo.dateFrom}
            </p>

            <p>
                <strong>Until:</strong> {experienceInfo.dateUntil}
            </p>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default Experience;