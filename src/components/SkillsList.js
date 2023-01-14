import React from 'react'

function Item({item}) {
    return <li>{item}</li>;
}

let langKey = 1;
let frameKey = 1;
let toolKey = 1; 

function List({list, key}) {
    return <ul className='skills-list'>
        {list.map(item => <Item key={langKey++} item={item}/>)} 
    </ul>; 
}



const SkillsList = ({languages, frameworks, tools}) => {
  return (
    <div className='grid-container'>
        <div className='item'>
            <p>languages</p>
            <List list={languages} key={langKey}/>
        </div>

        <div className='item'>
            <p>frameworks and libraries</p>
            <List list={frameworks} key={frameKey}/>
        </div>

        <div className='item'>
            <p>tools</p>
            <List list={tools} key={toolKey}/>
        </div>
    </div>
  )
}

export default SkillsList