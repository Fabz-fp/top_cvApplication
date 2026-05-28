import { useState } from 'react';

function Education() {
    const [isEditing, setIsEditing] = useState(true);

    const [educationInfo, setEducationInfo] = useState({
        school: '',
        studyTitle: '',
        studyDate: ''
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
                            value={educationInfo.studyTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='studyDate'>Date of Study</label>
                        <input
                            type='date'
                            id='studyDate'
                            name='studyDate'
                            value={educationInfo.studyDate}
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

            <p>
                <strong>School:</strong> {educationInfo.school}
            </p>

            <p>
                <strong>Title of Study:</strong> {educationInfo.studyTitle}
            </p>

            <p>
                <strong>Date:</strong> {educationInfo.studyDate}
            </p>

            <button onClick={handleEdit}>Edit</button>
        </section>
    );

}

export default Education;