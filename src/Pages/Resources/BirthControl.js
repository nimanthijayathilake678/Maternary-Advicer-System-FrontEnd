import React from 'react'
import birthControl from "./BirthControl.module.css"
import ring from './ResourceImage/ring.jpg'
import implant from './ResourceImage/implant.jpg'
import shot from './ResourceImage/shot.jpg'
import iud from './ResourceImage/iud.jpg'
import patch from './ResourceImage/patch.jpg'
import pill from './ResourceImage/pill.jpg'
import condom from './ResourceImage/comdom.jpg'
import internal from './ResourceImage/internal.jpg'

export default function BirthControl() {
  return (
    <div>

        <div className={birthControl.title}>
            <span className={birthControl.title1}>Birth Control</span>
        </div>

        <div className={birthControl.title2}>
            <span className={birthControl.title3    }>        </span>
        </div>

         <div className={birthControl.container}>
        
        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control
                Implante
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={implant} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  99% Effective <br/>
                  Can cost $0 to $1300<br/>
                  Lasts up to 5 years<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  LOW MAINTENANCE
                </span>
            </div>
        </div>

        
        <div className={birthControl.section}>
        <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                IUD
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={iud} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  99% Effective <br/>
                  Can cost $0 to $1300<br/>
                  Lasts up to 3-12 years<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  LOW MAINTENANCE
                </span>
            </div>
        </div>

        
        <div className={birthControl.section}>
        <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control
                Shot
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={shot} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  96% Effective <br/>
                  Can cost $0 to $150<br/>
                  get evry 3 months<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USED ON A SCHEDULE
                </span>
            </div>
        </div>

        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control
                Vaginal Ring
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={ring} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  93% Effective <br/>
                  Can cost $0 to $200<br/>
                  Put in an take out once a month<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USED ON A SCHEDULE
                </span>
            </div>
        </div>

     </div>

     <div className={birthControl.container}>
        
        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control
                Patch
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={patch} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  93% Effective <br/>
                  Can cost $0 to $150<br/>
                  Replace weekly<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USED ON A SCHEDULE
                </span>
            </div>
        </div>

        
        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control  Pill
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={pill} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  93% Effective <br/>
                  Can cost $0 to $50<br/>
                  Take daily<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USED ON A SCHEDULE
                </span>
            </div>
        </div>

        
        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Condom
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={condom} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  87% Effective <br/>
                  Can cost $0 to $2<br/>
                  Use wvry time<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USE EVRY TIME
                </span>
            </div>
        </div>

        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Internal Condom
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={internal} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
               <span className={birthControl.text}>
                  79% Effective <br/>
                  Can cost $0 to $3<br/>
                  Use wvry time<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USE EVRY TIME
                </span>
            </div>
        </div>

     </div>

     <div className={birthControl.container}>
        
        <div className={birthControl.section}>
            <div className={birthControl.header}>
              <span className={birthControl.headertxt}>
                Birth Control
                Patch
              </span>
            </div>
            <div className={birthControl.careImage}>
                <img src={patch} alt={birthControl.careImage}/>
            </div>
            <div className={birthControl.botomtxt}>
                <span className={birthControl.text}>
                  93% Effective <br/>
                  Can cost $0 to $150<br/>
                  Replace weekly<br/><br/>
                </span>
                <span className={birthControl.text1}>
                  USED ON A SCHEDULE
                </span>
            </div>
        </div>
      </div>


    </div>
  )
}
