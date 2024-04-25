import {useState,useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { apiClient } from "../../API/ApiServer";

export default function ProfilePersonalInformation({id,data}) {
   const [hoveredRow, setHoveredRow] = useState(null);
   const [personalInfo,setPersonalInfo]=useState(null);

  const handleMouseEnter = (index) => {
    setHoveredRow(index);
  };

  const handleMouseLeave = () => {
    setHoveredRow(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/personalInfo/" + id);
        setPersonalInfo(response?.data);
        console.log("Personal Information " + response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  },[id]);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left" sx={{ color: '#00A9BB' }}>Wife</TableCell>
            <TableCell align="left" sx={{ color: '#00A9BB' }}>Husband</TableCell>
            <TableCell align="left" sx={{ color: '#00A9BB' }}>Remark Done By Midwife</TableCell>
            <TableCell align="left" sx={{ color: '#00A9BB' }}>Remark Done By MOH Doctor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 0 ? "#E4FEFF" : "inherit"
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal'  }}>{data}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal' }}>{personalInfo?.h_name}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal' }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 0 ? 'bold' : 'normal' }}>{""}</TableCell>
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 1 ? "#E4FEFF" : "inherit"
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>
                Date of Birth
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal'  }}>{personalInfo?.w_dob}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal' }}>{personalInfo?.h_dob}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal' }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 1 ? 'bold' : 'normal' }}>{""}</TableCell>
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 2 ? "#E4FEFF" : "inherit"
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>
                Educational Level
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal'  }}>{personalInfo?.w_educationalLevel}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal' }}>{personalInfo?.h_educationalLevel}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal' }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 2 ? 'bold' : 'normal' }}>{""}</TableCell>
            </TableRow>

            <TableRow
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 3 ? "#E4FEFF" : "inherit"
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>
                Occupation
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal'  }}>{personalInfo?.w_occupation}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal' }}>{personalInfo?.h_occupation}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal' }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 3 ? 'bold' : 'normal' }}>{""}</TableCell>
            </TableRow>

            
            <TableRow
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                backgroundColor: hoveredRow === 4 ? "#E4FEFF" : "inherit"
              }}
            >
              <TableCell component="th" scope="row" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>
                Married Date
              </TableCell>
              <TableCell align="left" colSpan={2} sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal'  }}>{personalInfo?.marriedDate}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal' }}>{""}</TableCell>
              <TableCell align="left" sx={{ fontWeight: hoveredRow === 4 ? 'bold' : 'normal' }}>{""}</TableCell>
            </TableRow>


        </TableBody>
      </Table>
    </TableContainer>
  );
}
