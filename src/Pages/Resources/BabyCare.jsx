import React from 'react'
import babyCare from './BabyCare.module.css'
import holdBaby from './ResourceImage/HoldBaby.jpg'
import sleeping from './ResourceImage/sleeping.png'
import masaj from './ResourceImage/masaj.jpg'
import cream from './ResourceImage/cream.jpg'
import bath from './ResourceImage/bath.jpg'
import Breastfeed from './ResourceImage/Breastfeed.jpg'
import sanitizer from './ResourceImage/sanitizer.jpg'
import diaper from './ResourceImage/deeper.jpg'





export default function BabyCare() {
  return (
    <div>
        <div className={babyCare.title}>
            <span className={babyCare.title1}>Baby Care</span>
        </div>


       <div className={babyCare.container}>
        
        <div className={babyCare.section}>

            <div className={babyCare.careImage}>
                <img src={holdBaby} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Hold your
                    baby with
                    care 
                </span>
            </div>
        </div>

        
        <div className={babyCare.section}>
            
            <div className={babyCare.careImage}>
                <img src={sleeping} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Make 
                    the baby
                    sleeping on 
                    the back
                </span>
                
            </div>
        </div>

        
        <div className={babyCare.section}>
       
            <div className={babyCare.careImage}>
                <img src={masaj} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Give 
                    full body 
                    massages
                </span>
                
            </div>
        </div>

        <div className={babyCare.section}>
           
            <div className={babyCare.careImage}>
                <img src={cream } alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Apply
                    moisturizer
                </span>
               
            </div>
        </div>

     </div> 

     <div className={babyCare.container}>
        
        <div className={babyCare.section}>

            <div className={babyCare.careImage}>
                <img src={bath} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Give only
                    sponge
                    baths in the 
                    beginning 
                </span>
            </div>
        </div>

        
        <div className={babyCare.section}>
            
            <div className={babyCare.careImage}>
                <img src={Breastfeed} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Breastfeed
                    on time
                </span>
                
            </div>
        </div>

        
        <div className={babyCare.section}>
       
            <div className={babyCare.careImage}>
                <img src={sanitizer} alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Keep 
                    hand
                    sanitizer
                    handy
                </span>
                
            </div>
        </div>

        <div className={babyCare.section}>
           
            <div className={babyCare.careImage}>
                <img src={diaper } alt={babyCare.careImage}/>
            </div>
            <div className={babyCare.botomtxt}>
                <span className={babyCare.text}>
                    Do
                    diaper
                    change on
                    time
                </span>
               
            </div>
        </div>

     </div> 

    </div>
  )
}
