import { useState } from 'react';

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [educationInfo, setEducationInfo] = useState({
        school: '',
        studyTitle: '',
        startYear: '',
        graduationYear: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setEducationInfo({
            ...educationInfo,
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
                <h2>Educational Experience</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='school'>School Name</label>
                        <input 
                            type='text'
                            id='school'
                            name='school'
                            placeholder='University of Chicago'
                            value={educationInfo.school}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='studyTitle'>Title of Study</label>
                        <input
                            type='text'
                            id='studyTitle'
                            name='studyTitle'
                            placeholder='Business Administration'
                            value={educationInfo.studyTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='startYear'>Start Year</label>
                        <input
                            type='number'
                            id='startYear'
                            name='startYear'
                            placeholder='2020'
                            min={1950}
                            max={2026}
                            value={educationInfo.startYear}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='graduationYear'>Graduation Year</label>
                        <input
                            type='number'
                            id='graduationYear'
                            name='graduationYear'
                            placeholder='2025'
                            min={1950}
                            max={2026}
                            value={educationInfo.graduationYear}
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
            <h2>Educational Experience</h2>

            <div className='info-group'>
                <span className='info-label'>School</span>
                <p>{educationInfo.school}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Title of Study</span>
                <p>{educationInfo.studyTitle}</p>
            </div>

            <div className='info-group'>
                <span className='info-label'>Years Attended</span>
                <p>
                    {educationInfo.startYear
                        ? `${educationInfo.startYear} - ${educationInfo.graduationYear}`
                        : educationInfo.graduationYear}
                </p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );
}

export default Education;