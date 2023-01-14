import React, { useState } from 'react'


const WorkCard = ({image, name, term, title, key, work, skills, show}) => {
    const [isShow, setShow] = useState(show); 
    const handleClick = () => {
        setShow(!isShow);
    }



    return (
        <span>
            { !isShow 
                ? <div className='work-img'>
                    <img src={image} onClick={handleClick} alt={name}/>      
                </div>
                : <div className='work-card' onClick={handleClick}>
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
            }
        </span>
    )
}

export default WorkCard