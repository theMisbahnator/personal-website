import { React, useState } from 'react'
import Nordstrom from '../images/nord.png'
import Gray_Nord from '../images/nordstrom.png'
import { motion } from "framer-motion";

export const WorkPlaces = ({ paycom, ibm, atlassian, nordstrom, placeHolder, isJob, setJob, isVisible }) => {

    const handleClick = (company) => {
        if (isJob === company) {
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
            setJob(placeHolder);
        } else if (company === paycom) {
            setJob(paycom);
            setPaycomGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company === ibm) {
            setJob(ibm);
            setibmGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company === atlassian) {
            setJob(atlassian);
            setatlGray("grayscale(0)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else {
            setJob(nordstrom);
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Nordstrom;
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
    const logos = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                type: "spring",
            }
        },
    }

    const expand = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .75,
                duration: 2,
                type: "spring",
                damping: 25
            }
        },
        exit: {
            scale: 0,
            opacity: 0,
        }
    }

    const [paycomGray, setPaycomGray] = useState("grayscale(100%)");
    const [ibmGray, setibmGray] = useState("grayscale(100%)");
    const [atlGray, setatlGray] = useState("grayscale(100%)");

    return (
        <div className='select-cont' style={{ display: "grid", gridTemplateRows: "1f 1f" }}>
            <motion.p style={{ fontSize: "18px", textAlign: "center" }}
                variants={expand}
                initial='hidden'
                animate={isVisible ? "visible" : "exit"}
            >press me!</motion.p>
            <motion.div className='jobs' style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                variants={container}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
            >
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img className="logo" src={paycom.image} alt={"paycom"} variants={logos} style={{ filter: paycomGray }} onClick={() => { handleClick(paycom) }} />
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img className="logo" src={ibm.image} alt={"ibm"} variants={logos} style={{ filter: ibmGray }} onClick={() => { handleClick(ibm) }} />
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img className="logo" src={nordstrom.image} alt={"nordstrom"} variants={logos} onClick={() => { handleClick(nordstrom) }} />
                </motion.div>

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img className="logo" src={atlassian.image} alt={"atlassian"} variants={logos} style={{ filter: atlGray }} onClick={() => { handleClick(atlassian) }} />
                </motion.div>


            </motion.div>
        </div>
    )
}
