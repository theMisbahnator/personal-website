import React from 'react'
import { motion} from "framer-motion";

function Item({item}) {
    return <li style={{marginTop:"4px"}}>{item}</li>;
}

let langKey = 100;
let frameKey = 200;
let toolKey = 300; 


function List({list, key}) {
    return <ul className="list-skills">
        {list.map(item => <Item key={langKey++} item={item}/>)} 
    </ul>; 
}

const sect = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
        transition: {
            type: "spring",
        }
    },
}

const sect2 = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
        transition: {
            delay : .25,
            type: "spring",
        }
    },
}

const sect3 = {
    hidden: { scale: 0 },
    show: {
        scale: 1,
        transition: {
            delay : .5, 
            type: "spring",
        }
    },
}



const SkillsList = ({languages, frameworks, tools, isVisible}) => {
  return (
    <div className='grid-container'>
        <motion.div className='item' style={{textAlign: "left"}}
            variants={sect} 
            initial='hidden'
            animate={isVisible ? "show" : "hidden"}
        >
            <p>languages</p>
            <List list={languages} key={langKey}/>
        </motion.div>

        <motion.div className='item' style={{textAlign: "center"}}
            variants={sect3} 
            initial='hidden'
            animate={isVisible ? "show" : "hidden"}
        >
            <p>frameworks and libraries</p>
            <List list={frameworks} key={frameKey}/>
        </motion.div>

        <motion.div className='item' style={{textAlign: "right"}}
            variants={sect2} 
            initial='hidden'
            animate={isVisible ? "show" : "hidden"}
        >
            <p>tools</p>
            <List list={tools} key={toolKey}/>
        </motion.div>
    </div>
  )
}

export default SkillsList