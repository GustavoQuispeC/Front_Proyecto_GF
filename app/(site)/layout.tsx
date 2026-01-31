import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import { Box, Flex } from "@chakra-ui/react"

export default function SiteLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <>
      <Navbar />
      <Flex minH="100vh" direction="column">
        <Box flex="1" p={{ base: 4, md: 8 }}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  )
}
