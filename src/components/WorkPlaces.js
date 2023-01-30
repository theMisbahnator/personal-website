import {React, useState } from 'react'
import Nordstrom from '../images/nord.png'
import Gray_Nord from '../images/nordstrom.png'

export const WorkPlaces = ({paycom, ibm, atlassian, nordstrom, placeHolder, isJob, setJob, setReload}) => {
    
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

    const [paycomGray, setPaycomGray] = useState("grayscale(100%)");
    const [ibmGray, setibmGray] = useState("grayscale(100%)");
    const [atlGray, setatlGray] = useState("grayscale(100%)");

  return (
    <div className='select-cont' style={{display:"grid", gridTemplateRows:"1f 1f"}}>
        <p style={{fontSize:"18px", textAlign:"center"}}>press me!</p>
        <div className='jobs' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img className="logo" src={paycom.image} alt={"paycom"} style={{ filter: paycomGray }} onClick={() => { handleClick(paycom) } } />
            <img className="logo" src={ibm.image} alt={"ibm"} style={{ filter: ibmGray }} onClick={() => { handleClick(ibm) }} />
            <img className="logo" src={nordstrom.image} alt={"nordstrom"} onClick={() => { handleClick(nordstrom) }} />
            <img className="logo" src={atlassian.image} alt={"atlassian"} style={{ filter: atlGray }} onClick={() => { handleClick(atlassian) }} />
        </div>
    </div>
  )
}
