import { Provider } from "../components/ui/provider"
import Navbar from "../components/navbar/navbar"
import Sidebar from "../components/sidebar/sidebar"
import Footer from "../components/footer/footer"
import { Box, Flex } from "@chakra-ui/react"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Navbar />
          <Flex minH="100vh">
            <Sidebar />
            <Box flex="1" bg="gray.50" overflow="auto">
              <Box p={{ base: 4, md: 8 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </Flex>
        </Provider>
      </body>
    </html>
  )
}