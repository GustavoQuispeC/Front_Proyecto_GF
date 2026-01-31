'use client'
import Sidebar from "../../components/sidebar/sidebar"
import { Box, Flex, Button, HStack } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { HiOutlineLogout } from "react-icons/hi"

export default function DashboardLayout(props: { children: React.ReactNode }) {
    const { children } = props
    const router = useRouter()

    const handleLogout = () => {
        // Aquí puedes agregar lógica de logout (limpiar tokens, etc.)
        router.push("/")
    }

    return (
        <Flex minH="100vh" bg="gray.100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <Flex direction="column" flex="1" overflow="auto">
                {/* Top Bar with Logout */}
                <HStack
                    justify="flex-end"
                    p={4}
                    bg="white"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                    <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={handleLogout}
                        rightIcon={<HiOutlineLogout />}
                    >
                        Cerrar Sesión
                    </Button>
                </HStack>

                {/* Page Content */}
                <Box flex="1" p={{ base: 4, md: 8 }} overflow="auto">
                    {children}
                </Box>
            </Flex>
        </Flex>
    )
}