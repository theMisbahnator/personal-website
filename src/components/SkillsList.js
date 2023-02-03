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

const m = {
    hidden: {scale: 0},
    show: {
        scale: 1,
        transition: {
            type: "spring",
        }
    }
}

const container = {
    hidden: {},
    show: {
        transition: {
            delay: 1.5,
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const SkillsList = ({languages, frameworks, tools, isVisible}) => {
  return (
    <motion.div className='grid-container'
        variants={container}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
    >
        <motion.div className='item' style={{textAlign: "left"}}
            variants={m} 
        >
            <p>languages</p>
            <List list={languages} key={langKey}/>
        </motion.div>

        <motion.div className='item' style={{textAlign: "center"}}
            variants={m} 
        >
            <p>frameworks and libraries</p>
            <List list={frameworks} key={frameKey}/>
        </motion.div>

        <motion.div className='item' style={{textAlign: "right"}}
            variants={m} 
        >
            <p>tools</p>
            <List list={tools} key={toolKey}/>
        </motion.div>
    </motion.div>
  )
}

export default SkillsList