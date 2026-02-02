'use client'
import Sidebar from "../../components/sidebar/sidebar"
import { Box, Flex, HStack } from "@chakra-ui/react"


export default function DashboardLayout(props: { children: React.ReactNode }) {
    const { children } = props
   


    return (
        <Flex minH="100vh" bg="gray.100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <Flex direction="column" flex="1" overflow="auto">
                {/* Top Bar with Logout */}
                <HStack
                    justify="flex-end"
                   
                    bg="white"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                  
                </HStack>

                {/* Page Content */}
                <Box flex="1" p={{ base: 4, md: 8 }} overflow="auto">
                    {children}
                </Box>
            </Flex>
        </Flex>
    )
}