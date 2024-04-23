import React from "react";
import pregnany from "./pregnancy.module.css";
import careImage from "./ResourceImage/care.jpg";
import deitImage from "./ResourceImage/deit.jpg";
import exerciseImage from "./ResourceImage/exercise.jpg";
import educateImage from "./ResourceImage/educate.jpg";
import stressImage from "./ResourceImage/stress.jpg";
import avoidImage from "./ResourceImage/avoid.jpg";
import vitaminImage from "./ResourceImage/vitamin.jpg";
import restImage from "./ResourceImage/rest.jpg";
import baby from "../../Assest/Lottie/pregnant.json";
import Lottie from "lottie-react";
import { Box, Grid, IconButton } from "@mui/material";
import Nav from "../../Components/Nav";
//const careImage = new URL("../ResourceImage/care.jpg",import.meta.url)

export default function Pregnancy() {
  return (
    <>
      <Nav />
      <div style={{ paddingTop: "80px" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Lottie style={{ height: 200 }} animationData={baby} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <div
              className="pregnancy"
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
                }}
              >
                {" "}
                A Comprehensive Guide to Pregnancy
              </span>
            </div>
          </Grid>
        </Grid>

        <div className={pregnany.container}>
          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Prenatal Care
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={careImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Regular checkups, proper nutrition, and lifestyle choices
                contribute to the well-being of both mother and baby.
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Healthy Diet
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={deitImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Eat a balanced diet rich in fruits, vegetables, whole grains,
                lean proteins, and dairy. Ensure you're getting enough folic
                acid, iron, calcium, and other essential nutrients.
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Exercise
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={exerciseImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Stay active with exercises approved by your healthcare provider.
                Prenatal yoga, walking, and swimming are generally safe and
                beneficial
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Educate Yourself
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={educateImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Learn about childbirth, parenting, and newborn care. Consider
                childbirth education classes to prepare for labor and delivery.
              </span>
            </div>
          </div>
        </div>

        <div className={pregnany.container}>
          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Manage Stress
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={stressImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Practice relaxation techniques like meditation, deep breathing,
                or prenatal yoga. Surround yourself with supportive friends and
                family
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Get Enough Rest
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={restImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Pregnancy can be tiring, so listen to your body and rest when
                needed. Sleep on your side, especially in the third trimester.
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Avoid Certain Food
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={avoidImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Certain foods like raw fish, unpasteurized dairy, and
                undercooked meats can pose risks during pregnancy due to the
                potential for foodborne illnesses.
              </span>
            </div>
          </div>

          <div className={pregnany.section}>
            <div className={pregnany.header}>
              <span
                className={pregnany.preHeder}
                style={{ color: "#2A777C", fontFamily: "Courier New" }}
              >
                Take Prenatal Vitamins
              </span>
            </div>
            <div className={pregnany.careImage}>
              <img
                src={vitaminImage}
                alt={pregnany.careImage}
                className={pregnany.image}
              />
            </div>
            <div className={pregnany.botomtxt}>
              <span style={{ fontFamily: "Monaco", color: "#2A777C" }}>
                Your doctor may recommend prenatal vitamins containing folic
                acid, iron, calcium, and other nutrients crucial for you and
                your baby's health
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
