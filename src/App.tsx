import * as React from "react"
import {
  ChakraProvider,
  Box,  
  theme,
} from "@chakra-ui/react"



import Navbar from "./components/Navbar"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Navbar/>
  
    </Box>
  </ChakraProvider>
)
