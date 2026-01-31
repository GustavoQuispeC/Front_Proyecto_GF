import Sidebar from "../../components/sidebar/sidebar"
import { Box, Flex } from "@chakra-ui/react"

export default function DashboardLayout(props: { children: React.ReactNode }) {
    const { children } = props
    return (
        <Flex minH="100vh">
            <Sidebar />
            <Box flex="1" p={{ base: 4, md: 8 }}>
                {children}
            </Box>
        </Flex>
    )
}