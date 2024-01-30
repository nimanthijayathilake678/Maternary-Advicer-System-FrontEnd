import React from 'react'
import planing from "./planing.module.css";
import image1 from './ResourceImage/image1.jpg'
import image2 from './ResourceImage/image2.jpg'
import image3 from './ResourceImage/image3.png'
import image4 from './ResourceImage/image4.jpg'
import image5 from './ResourceImage/image5.jpg'
import image6 from './ResourceImage/image6.jpg'
import image7 from './ResourceImage/image7.jpg'
import image8 from './ResourceImage/image8.jpg'
import image9 from './ResourceImage/image9.jpg'
import image10 from './ResourceImage/image10.png'
import image11 from './ResourceImage/multiVitaming.jpg'
import image12 from './ResourceImage/image12.jpg'

export default function Planing() {
  return (
    <div>
        <div className={planing.title}>
            <h1>
                Planing For Baby
            </h1>
        </div>
        <div className={planing.header}>
            <h2 className={planing.header2}>
                To Do Right Way
            </h2>
        </div>
        <div className={planing.container}>
            <div className={planing.section}>
                
                <div className={planing.careImage}>
                    <img src={image1} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Treat existing
                        medical condition
                        that may effect
                        pregnancy
                    </span>
                </div>
            </div>

            <div className={planing.section}>
                
                <div className={planing.careImage}>
                    <img src={image2} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Eat a balanced diet
                        including lean
                        protein,whole grains,
                        fruits,vegetables,nuts
                        and low fat dairy
                    </span>
                </div>
            </div>

            <div className={planing.section}>
                
                <div className={planing.careImage}>
                    <img src={image3} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        <b>MEN& WOMEN </b><br></br>
                        Stop using tobacco
                        and recreational trugs 
                    </span>
                </div>
            </div>

            <div className={planing.section}>
                
                <div className={planing.careImage}>
                    <img src={image4} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        <b>MEN& WOMEN </b><br></br>
                        Learn about family
                        history of problems
                        like heart defects,
                        cystic fibrosis,spina 
                        bifida and blood 
                        clotting condition 
                    </span>
                </div>
            </div>

        </div>

        <div className={planing.container}>
            <div className={planing.section2}>
                
                <div className={planing.careImage}>
                    <img src={image5} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Get up to date on 
                        health screening
                        and vaccines 
                    </span>
                </div>
            </div>

            <div className={planing.section2}>
                
                <div className={planing.careImage}>
                    <img src={image6} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Maintain good 
                        dental health 
                    </span>
                </div>
            </div>

            <div className={planing.section2}>
                
                <div className={planing.careImage}>
                    <img src={image7} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Start exercising
                        regularly 
                    </span>
                </div>
            </div>
        </div>

        <div className={planing.header}>
            <h2 className={planing.header2}>
                3-4 Month  Befor Trying To Conceive
            </h2>
        </div>

        <div className={planing.container}>
            <div className={planing.section3}>
                
                <div className={planing.careImage}>
                    <img src={image8} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Start tracking your
                        period using a 
                        smartphone app to
                        learn mor about
                        your cycle and when
                        you’re most fertile.
                    </span>
                </div>
            </div>

            <div className={planing.section3}>
                
                <div className={planing.careImage}>
                    <img src={image9} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Ask your doctor if 
                        your current
                        medications are safe
                        for pregnancy 
                    </span>
                </div>
            </div>
        </div>

        <div className={planing.header}>
            <h2 className={planing.header2}>
                0-3 Months Before Trying To Conceive
            </h2>
        </div>

        <div className={planing.container}>
            <div className={planing.section3}>
                
                <div className={planing.careImage}>
                    <img src={image10} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Stop taking birth
                        control, or have birth 
                        control devices
                        removed.
                    </span>
                </div>
            </div>

        </div>

        <div className={planing.header}>
            <h2 className={planing.header2}>
                After Stoping Birth Control
            </h2>
        </div>

        <div className={planing.container}>
            <div className={planing.section3}>
                
                <div className={planing.careImage}>
                    <img src={image12} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Stop using alcohol
                    </span>
                </div>
            </div>

            <div className={planing.section3}>
                
                <div className={planing.careImage}>
                    <img src={image11} alt={planing.careImage} className={planing.image}/>
                </div>
                <div className={planing.botomtxt}>
                    <span >
                        Start taking a daily
                        prenatal multivitamin
                        with at least 800
                        micrograms of  folic acid.
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}
