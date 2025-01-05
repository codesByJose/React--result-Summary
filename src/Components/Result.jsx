import { Box, Text } from "@chakra-ui/react"
export default function Result({total, showResult}) {
    const resultText = "You scored higher than 65% of the people who have taken these tests";
    return <Box flexBasis={"50%"} bgGradient="linear(to-t,hsl(241, 81%, 54%), hsl(252, 100%, 67%))" p={5} borderTopRadius={{base : "0", md : "8", sm : "8"} }
    textAlign={"center"} borderBottomRadius={{base : "8", md : "8"}}>
        <Text color={" hsl(221, 100%, 96%)"} fontSize={"1.5em"} fontWeight={600}>Your Result</Text>
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} margin={"auto"} mt={4} p={0} height={"200px"} width={"200px"} 
        bgGradient="linear(to-t, hsl(252, 100%, 67%), hsl(241, 81%, 54%))" borderRadius={"50%"} >
            <Text fontSize={"5em"} lineHeight={"1em"} p={0} m={0} color="hsl(0, 0%, 100%)" fontWeight={600}>{total}</Text>
            <Text fontSize={"1em"} lineHeight={"1em"} p={0} m={0} color={"hsl(241, 100%, 89%)"} fontWeight={600}> of 100</Text>
        </Box>
        {showResult ? (
  <Box pt={5} color={"hsl(0, 0%, 100%)"}> 
    <Text fontWeight={600} fontSize={"2em"}>Great</Text> 
    <Text fontSize={"1.2em"} color={"hsl(241, 100%, 89%)"} mt={4}>You scored higher than 65% of the people who have taken these tests</Text> 
  </Box>
) : <Text color={"hsl(241, 100%, 89%)"} mt={6} fontSize={"1.5em"}> Click "Continue" to get your total score</Text>}

    </Box>
}