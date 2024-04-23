import React from "react";
import planingStyles from "./planing.module.css";
import { Grid } from "@mui/material";
import Nav from "../../Components/Nav";
import Lottie from "lottie-react";
import babyAnimation from "../../Assest/Lottie/HappyFamily.json";

// Importing images
import image1 from "./ResourceImage/image1.jpg";
import image2 from "./ResourceImage/image2.jpg";
import image3 from "./ResourceImage/image3.png";
import image4 from "./ResourceImage/image4.jpg";
import image5 from "./ResourceImage/image5.jpg";
import image6 from "./ResourceImage/image6.jpg";
import image7 from "./ResourceImage/image7.jpg";
import image8 from "./ResourceImage/image8.jpg";
import image9 from "./ResourceImage/image9.jpg";
import image10 from "./ResourceImage/image10.png";
import image11 from "./ResourceImage/multiVitaming.jpg";
import image12 from "./ResourceImage/image12.jpg";

export default function Planing() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: "50px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <Lottie style={{ height: 200 }} animationData={babyAnimation} />
          </Grid>

          <Grid item xs={12} sm={10}>
            <div
              className={planingStyles.title}
              style={{
                fontFamily: "Garamond",
                color: "#2A777C",
                paddingTop: "100px",
                fontSize: "32px",
              }}
            >
              <span
                className="title"
                style={{
                  fontFamily: "Garamond",
                  color: "#2A777C",
                  paddingTop: "100px",
                  fontSize: "32px",
                  paddingRight: "100px",
                }}
              >
                A Detailed Expedition into Preparing for Your Little Miracle,
                Every Step of the Way
              </span>
            </div>
          </Grid>
        </Grid>

        <div className={planingStyles.container}>
          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image1} alt="image1" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Treat existing medical condition that may affect pregnancy
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image2} alt="image2" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Eat a balanced diet including lean protein, whole grains,
                fruits, vegetables, nuts and low fat dairy
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image3} alt="image3" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                <b>MEN & WOMEN</b>
                <br></br>
                Stop using tobacco and recreational drugs
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image4} alt="image4" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                <b>MEN & WOMEN</b>
                <br></br>
                Learn about family history of problems like heart defects,
                cystic fibrosis, spina bifida and blood clotting condition
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image5} alt="image5" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Get up to date on health screening and vaccines
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image6} alt="image6" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Maintain good dental health
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image7} alt="image7" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Start exercising regularly
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image8} alt="image8" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Start tracking your period using a smartphone app to learn more
                about your cycle and when you’re most fertile.
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img src={image9} alt="image9" className={planingStyles.image} />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Ask your doctor if your current medications are safe for
                pregnancy
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img
                src={image10}
                alt="image10"
                className={planingStyles.image}
              />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Stop taking birth control, or have birth control devices
                removed.
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img
                src={image12}
                alt="image12"
                className={planingStyles.image}
              />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Stop using alcohol
              </span>
            </div>
          </div>

          <div className={planingStyles.section}>
            <div className={planingStyles.careImage}>
              <img
                src={image11}
                alt="image11"
                className={planingStyles.image}
              />
            </div>
            <div className={planingStyles.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Start taking a daily prenatal multivitamin with at least 800
                micrograms of folic acid.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
