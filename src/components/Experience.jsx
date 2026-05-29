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
                            placeholder='Business Inc.'
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
                            placeholder='Project manager'
                            value={experienceInfo.positionTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="responsibilities">Main Responsibilities</label>
                        <textarea
                            id='responsibilities'
                            name='responsibilities'
                            placeholder='I was responsible for a team of 5 people...'
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

            <div className='info-group'>
                <span className='info-label'>Company</span> 
                <p>{experienceInfo.companyName}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Position</span> 
                <p>{experienceInfo.positionTitle}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Responsibilities</span>
            </div>
            <p>{experienceInfo.responsibilities}</p>

            <div className='info-group'>
                <span className='info-label'>From</span> 
                <p>{experienceInfo.dateFrom}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Until</span> 
                <p>{experienceInfo.dateUntil}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default Experience;