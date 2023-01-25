const WorkCard = ({ image, name, term, title, key, work, skills, show }) => {
    return (
        <div className='work-card'>
            <div className="work-card-content" style={{marginTop:"15px"}}>
                <div className="center">
                    <span className='work-title'>{name}</span>
                    <span className='work-title'> | {title}</span>
                    <p className='work-term'>{term}</p>
                </div>
                <div className='work-detail'>
                    <p className='work-text'>{work}</p>
                </div>
                <div className="center">
                    <p className='work-skill'>{skills}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard