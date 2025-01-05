import { Box, Text, Image, Button } from '@chakra-ui/react'
import reaction from '../assets/images/icon-reaction.svg'
import memory from '../assets/images/icon-memory.svg'
import verbal from '../assets/images/icon-verbal.svg'
import visual from '../assets/images/icon-visual.svg'
export default function Summary({myData, total, setTotal, setShowResult}) {
    let reactionScore, memoryScore, verbalScore, visualScore;
    myData.forEach((item) => {
        if(item.category === "Reaction") {
            reactionScore = item.score;
        } else if(item.category === "Memory") {
            memoryScore = item.score;
        } else if(item.category === "Verbal") {
            verbalScore = item.score;
        } else if(item.category === "Visual") {
            visualScore = item.score;
        }
    })
    function getResult(){
        total = reactionScore + memoryScore + verbalScore + visualScore;
        setTotal(Math.floor(total / 4));
        setShowResult(true);
        console.log(total);
        
    }

    return <Box flexBasis={"50%"}   p={5}>
        <Text fontSize={"1.5em"} fontWeight={900} color={"hsla(241, 72%, 15%, 1)"}>Summary</Text>
        <Box display={"flex"} flexDirection={"column"} mt={4}  w={"100%"} >
            {/* reaction */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"100%"} p={5}  borderRadius={"10"}   bg={"hsla(0, 100%, 95%, 1)"} >
                <Box  display={"flex"} alignItems={"center"}  w={"100%"}  fontSize={"1.2em"} >
                    <Image src={reaction} w={"20px"}/> 
                    <Text ml={3} color={"hsla(0, 100%, 67%)"}  >Reaction</Text>
                </Box>
                <Box display={"flex"} fontSize={"1em"} >
                   <Text color={"hsl(224, 30%, 27%)"} lineHeight={"1em"} fontWeight={600}>{reactionScore}</Text>
                   <Text lineHeight={"1em"} color={"hsl(241, 100%, 89%)"} pl={1}>/100</Text>
                </Box>
            </Box>
            {/* Memory */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={5}  mt={5} w={"100%"} bg={"hsla(39,100%,95%,1)"}>
                <Box display={"flex"} alignItems={"center"}  w={"100%"} fontSize={"1.2em"}>
                    <Image src={memory} w={"20px"}/> 
                    <Text ml={3} color={"hsl(39, 100%, 56%)"}  >Memory</Text>
                </Box>
                <Box fontSize={"1em"} display={"flex"} >
                   <Text color={"hsl(224, 30%, 27%)"} lineHeight={"1em"} fontWeight={600}>{memoryScore}</Text>
                   <Text lineHeight={"1em"} color={"hsl(241, 100%, 89%)"} pl={1}>/100</Text>
                </Box>
            </Box>
            {/* Verbal */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={5}  mt={5} w={"100%"} bg={"hsla(166, 70%, 90%, 1)"}>
                <Box display={"flex"} alignItems={"center"}  w={"100%"}  fontSize={"1.2em"}>
                    <Image src={verbal} w={"20px"} /> 
                    <Text lineHeight={"1em"} color={"hsl(166, 100%, 37%)"} ml={3} >Verbal</Text>
                </Box>
                <Box fontSize={"1em"} display={"flex"} >
                   <Text color={"hsl(224, 30%, 27%)"} lineHeight={"1em"} fontWeight={600}>{verbalScore}</Text>
                   <Text lineHeight={"1em"} color={"hsl(241, 100%, 89%)"} pl={1}>/100</Text>
                </Box>
            </Box>
            {/* Visual */}
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} p={5} mt={5} w={"100%"} bg={"hsla(234,65%,95%,1)"} >
                <Box display={"flex"} alignItems={"center"}  w={"100%"}  fontSize={"1.2em"}>
                    <Image src={visual} w={"20px"}/> 
                    <Text  lineHeight={"1em"} color={"hsl(234, 85%, 45%)"} ml={3} >Visual</Text>
                </Box>
                <Box fontSize={"1em"} display={"flex"} >
                   <Text color={"hsl(224, 30%, 27%)"} lineHeight={"1em"} fontWeight={600}>{visualScore}</Text>
                   <Text lineHeight={"1em"} color={"hsl(241, 100%, 89%)"} pl={1}>/100</Text>
                </Box>
            </Box>
        </Box>
        <Box textAlign={"center"} mt={5}  h={"60px"}> 
            <Button onClick={getResult} w={"100%"} h={"100%"} borderRadius={"50px"} bg={"hsl(224, 30%, 27%)"} color={"white"} border={"none"} fontSize={"1.2em"} letterSpacing={"0.1em"} _hover={{ bgGradient : "linear(to-t,hsl(241, 81%, 54%), hsl(252, 100%, 67%))", cursor: "pointer" } }> Continue</Button>
        </Box>
    </Box>
}