import React from 'react'
import Landing_css from "./Landing.module.css"
import new1 from './ResourceImage/new1.png'
import birthcontrol from './ResourceImage/birthControl.png'
import pregnancy from './ResourceImage/pregnancy.png'
import babyCare from './ResourceImage/babyCare.png'
import planingBaby from './ResourceImage/planingBaby.png'
import { NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
        
        <div className={Landing_css.container} >
            
                <h1 className={Landing_css.header}>MATERNITY ADVISOR <br/>SYSTEM</h1>
                <p className={Landing_css.heade3}>
                    Explore our Maternal and Baby Care System – your all-in-one solution for personalized guidance, health tracking, and a supportive <br/>
                    community. Join us on this comprehensive journey for you and your little one
                </p>
                
           
        </div>

        <div className={Landing_css.header1}>
                <span className ={Landing_css.header2}>Resources You’ll Love...</span>
        </div>
        
        <div className={Landing_css.container1}>
        <NavLink to="/birthcontrol">
            <div className={Landing_css.section}>
                <div className={Landing_css.image}>
                    <img src={birthcontrol} alt={Landing_css.image} className={Landing_css.image}/>
                </div>
               
                <div className={Landing_css.title}>
                    <span className={Landing_css.text}>
                        Birth Control
                    </span>
                </div>
            </div>
            </NavLink>
            <NavLink to="/planingbaby">
            <div className={Landing_css.section}>
                <div className={Landing_css.image}>
                    <img src={planingBaby} alt={Landing_css.image} className={Landing_css.image}/>
                </div>
               
                <div className={Landing_css.title}>
                    <span className={Landing_css.text}>
                         Planning for a baby
                    </span>
                </div>
            </div>
            </NavLink>
            <NavLink to="/pregnancy">
            <div className={Landing_css.section}>
                <div className={Landing_css.image}>
                    <img src={pregnancy} alt={Landing_css.image} className={Landing_css.image}/>
                </div>
               
                <div className={Landing_css.title}>
                    <span className={Landing_css.text}>
                        Pregnancy
                    </span>
                </div>
            </div>
            </NavLink>
            <NavLink to="/babycare">
            <div className={Landing_css.section}>
                <div className={Landing_css.image}>
                    <img src={babyCare} alt={Landing_css.image} className={Landing_css.image}/>
                </div>
               
                <div className={Landing_css.title}>
                    <span className={Landing_css.text}>
                        Baby care
                    </span>
                </div>
            </div>
            </NavLink>
        </div>

    </div>
  )
}
