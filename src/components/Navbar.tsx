import {
  Box,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react';


function Navbar() {
  return (
    <Box bg='red.300' px='100px'>
      <Flex h={16} justifyContent='space-between' alignItems={'center'} px='1'>
        <Box>
          Logo
        </Box>
        <HStack
          as={'nav'}
          spacing={32}
          display={{ base: 'none', md: 'flex' }}>
          <Link>Home</Link>
          <Link>Features</Link>
          <Link>Pricing</Link>
        </HStack>
        <Link>Log in</Link>
      </Flex>
    </Box>

  )
}

export default Navbar