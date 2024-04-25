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
function createData(name, wife, husband,midwifeRemark,mohDoctor) {
  return { name, wife , husband, midwifeRemark,mohDoctor };
}

const rows = [
  createData("Regular Monthly Period",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Number of days having period",'7'),
  createData("Vaginal bleeding between periods",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Suffering from severe abdominal pain during periods",<DoneSharpIcon sx={{color:'green'}}/>),
  createData("Unusual colored or foul-smelling discharge from the vagina"),
  createData("Abortion"),
  createData("Stillbirths"),
  createData("Infant mortality"),
  createData("Tubal Pregnancy (Ectopic)"),
  createData("Itching in or around genitals"),
  createData("Any surgery on reproductive organs"),
  createData("Reproductive organs"),
  createData("Have any problems with sex "),
  createData("Satisfied with the sexual relationship"),
  createData("Breast self-exmination once a month"),
  createData('Have any family planning system'),
  createData('Family Planning Method'),
  createData('Delay first child'),
  createData('Time take to delay first child')
];

export default function ProfileSexualAndReproductiveHealth(id) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sexualData,setSexualData] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  console.log("ID " + id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/sexualAndReproductiveHealthInfo/" + id);
        console.log("Sexual Information " + response.data);
        setSexualData(response?.data);
        
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

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
                backgroundColor: hoveredRow === 0? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 0? 'bold' : 'normal'  }}>
                Regular Monthly Period
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{check(sexualData?.w_regularMonthlyPeriod)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 1? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 1? 'bold' : 'normal'  }}>
              Number of days having period
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{sexualData?.w_noOfPeriodDays}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>


            <TableRow
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 2 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 2? 'bold' : 'normal'  }}>
              Vaginal bleeding between periods
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{check(sexualData?. w_vaginaBleeding)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 3? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 3? 'bold' : 'normal'  }}>
              Suffering from severe abdominal pain during periods
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{check(sexualData?.w_abdominalPain)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 4 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow ===4? 'bold' : 'normal'  }}>
              Unusual colored or foul-smelling discharge from the vagina
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{check(sexualData?.w_unusualColorFoulSmelling)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 5 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 5? 'bold' : 'normal'  }}>
              Abortion
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{check(sexualData?.w_abortionHistory)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 5 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border:0  },
                backgroundColor: hoveredRow === 6 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 6? 'bold' : 'normal'  }}>
              Stillbirths
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{check(sexualData?.w_stillBirthHistory)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 6 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(7)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 7? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 7? 'bold' : 'normal'  }}>
              Infant mortality
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{check(sexualData?.w_infantMortalityHistory)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 7 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(8)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 8? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 8? 'bold' : 'normal'  }}>
              Tubal Pregnancy (Ectopic)
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{check(sexualData?. w_tubalPregnancyHistory)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 8 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(9)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow ===9 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 9? 'bold' : 'normal'  }}>
              Itching in or around genitals
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{check(sexualData?.w_isItching)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{check(sexualData?.h_isItching)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 9 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(10)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 10? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 10? 'bold' : 'normal'  }}>
              Any surgery on reproductive organs
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{check(sexualData?.w_reproductiveOrganSurgery)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{check(sexualData?.h_reproductiveOrganSurgery)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 10 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter (11)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 11? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 11? 'bold' : 'normal'  }}>
              Reproductive organs
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11? 'bold' : 'normal'  }}>{sexualData?.w_reproductiveOrganSurgeryDetails}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{sexualData?.h_reproductiveOrganSurgeryDetails}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 11? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 11 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(12)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 12 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 12? 'bold' : 'normal'  }}>
              Have any problems with sex
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{check(sexualData?.w_sexualProblems)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{check(sexualData?.h_sexualProblems)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 12 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(13)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 13? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 13? 'bold' : 'normal'  }}>
              Satisfied with the sexual relationship
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{check(sexualData?.w_satisfiedSexualRelationship)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{check(sexualData?.h_satisfiedSexualRelationship)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 13 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(14)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 14 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 14? 'bold' : 'normal'  }}>
              Breast self-exmination once a month
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{check(sexualData?.w_breastSelfExam)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{check(sexualData?.h_breastSelfExam)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 14 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(15)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 15 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 15? 'bold' : 'normal'  }}>
              Have any family planning system
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 15? 'bold' : 'normal'  }}>{check(sexualData?.familyPlanning)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 15 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow ===15 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 15 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>
            <TableRow
              onMouseEnter={() => handleMouseEnter(16)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 16? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 16? 'bold' : 'normal'  }}>
              Family Planning Method
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow ===16 ? 'bold' : 'normal'  }}>{sexualData?.familyPlanningDetails}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow ===16 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 16 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 16 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>
            <TableRow
              onMouseEnter={() => handleMouseEnter(17)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 17 ? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 17? 'bold' : 'normal'  }}>
              Delay first child
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow ===17 ? 'bold' : 'normal'  }}>{check(sexualData?.delayingFirstChild)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 17 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 17 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 17 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>
            <TableRow
              onMouseEnter={() => handleMouseEnter(18)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 18? "#E4FEFF" : "inherit",
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 18? 'bold' : 'normal'  }}>
              Time take to delay first child
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 18 ? 'bold' : 'normal'  }}>{check(sexualData?.delayingTimePeriod)}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 18 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 18 ? 'bold' : 'normal'  }}>{""}</TableCell>
              <TableCell align="left"sx={{ fontWeight: hoveredRow === 18 ? 'bold' : 'normal'  }}>{""}</TableCell>
              
            </TableRow>
          

        </TableBody>
      </Table>
    </TableContainer>
  );
}
