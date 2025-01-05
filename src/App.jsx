import Result from "./Components/Result"
import Summary from "./Components/Summary"
import { Box } from "@chakra-ui/react"
import { useState } from "react"
import data from "./data.json"


function App() {
  const [total, setTotal] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [myData] = useState(data);
  console.log(myData);
  
    

   return <Box display={"flex"} justifyContent="center" alignItems="center" height="100vh" bg={"hsl(0, 0%, 100%)"} p={0} >
    <Box display={ {base :"flex", md : "flex", sm: "flex"} } flexDirection={{base : "column", md: "row", sm : "column"}} bg={"white"} borderTopRadius={{base : "0", md : "8"}} maxW={{base : "800px", md : "800px",sm : "600px"}}  height={{base : "100vh", md : "500px", sm: "500px" }} m={0} boxShadow={"40px 30px 50px hsl(221, 100%, 96%)"}>
            <Result total={total} showResult={showResult}/>
            <Summary myData={data} total={total} setTotal={setTotal} setShowResult={setShowResult}/>
        </Box>
    </Box>

}

export default App
