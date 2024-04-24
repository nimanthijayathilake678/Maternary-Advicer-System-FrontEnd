import {useState,useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import {apiClient} from "../../API/ApiServer";


// const rows = [
//   // createData("Long term medications"),
//   // createData("Take folic acid tablet daily"),
//   // createData("Marrage based on blood relation"),
// ];

export default function PersonalMedicalCondition({id}) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [medicalInfo,setMedicalInfo] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/CoupleMedicalConditions/" + id);
        console.log("Medical Information " + response.data);
        setMedicalInfo(response?.data)
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [id]);

  const check = (data)=>{
    if(data){
      return <DoneSharpIcon sx={{color:'green'}}/>
    }
    else{
      return <ClearSharpIcon sx={{color:'red'}}/>
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Wife</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Husband</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By Midwife</TableCell>
            <TableCell align="left" sx={{color:'#00A9BB'}}>Remark Done By MOH Doctor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
             
              
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 0 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>
              Blood Deficiency
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_anemia)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_anemia)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 1 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>
              Heart Diseases - Congenital
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_congenital)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_congenital)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 2 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>
              Heart Diseases - Rheumatic Heart Diseases
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_rheumaticHeartDisease)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_rheumaticHeartDisease)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>


            <TableRow
             
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 3 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>
              Diabetes Mellitus
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_diabetesMellitus)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_diabetesMellitus)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 4 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>
              Hypertension
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_hypertension)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_hypertension)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 5 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>
              Hypercholesterolemia
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_hypercholesterolemia)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_hypercholesterolemia)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>


            <TableRow
             
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 6 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>
              Asthma
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_asthma)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_asthma)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 7 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>
              Thyroid diseases (Goiter)
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_thyroid )}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_thyroid)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 8 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>
              Untrated decayed teeth
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_untratedDecayedTeeth)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_untratedDecayedTeeth)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 9 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>
              Conditions such as tooth decay and bleeding from the gums
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_toothDecayBleedingGums)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_toothDecayBleedingGums)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(10)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 10 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>
              Mental Illnesses
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_mentalIllnesses)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_mentalIllnesses)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>


            <TableRow
             
              onMouseEnter={() => handleMouseEnter(11)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 11 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>
              Rheumatic Fever
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_rheumaticFever)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_rheumaticFever)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(12)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 12 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>
              Epilepsy
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_epilepsy)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_epilepsy)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(13)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 13 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>
              Allergies - Food
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_foodAllergies)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_foodAllergies)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>

            <TableRow
             
              onMouseEnter={() => handleMouseEnter(14)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 14 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>
              Allergies - Drugs
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{check(medicalInfo?.w_drugsAllergies)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{check(medicalInfo?.h_drugsAllergies)}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{""}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
