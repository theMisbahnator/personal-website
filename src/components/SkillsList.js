import React from 'react'

function Item({item}) {
    return <li style={{marginTop:"4px"}}>{item}</li>;
}

let langKey = 100;
let frameKey = 200;
let toolKey = 300; 

function setPos(val) {
    if (val === 100) {
        return "left"; 
    } else if (val === 200){
        return "center";
    }
    return "right";
}


function List({list, key}) {
    return <ul className="list-skills">
        {list.map(item => <Item key={key++} item={item}/>)} 
    </ul>; 
}



const SkillsList = ({languages, frameworks, tools}) => {
  return (
    <div className='grid-container'>
        <div className='item' style={{textAlign: setPos(langKey)}}>
            <p>languages</p>
            <List list={languages} key={langKey}/>
        </div>

        <div className='item' style={{textAlign: setPos(frameKey)}}>
            <p>frameworks and libraries</p>
            <List list={frameworks} key={frameKey}/>
        </div>

        <div className='item' style={{textAlign: setPos(toolKey)}}>
            <p>tools</p>
            <List list={tools} key={toolKey}/>
        </div>
    </div>
  )
}

export default SkillsList