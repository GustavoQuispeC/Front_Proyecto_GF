'use client'
import {
  Box,
  Flex,
  Stack,
  Text,
  Icon,
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  IconButton,
} from '@chakra-ui/react'
import { useState } from 'react'
import { 
  HiOutlineHome, 
  HiOutlineChartBar, 
  HiOutlineUser, 
  HiOutlineCog, 
  HiMenuAlt2 
} from 'react-icons/hi'

const NAV_ITEMS = [
  { name: 'Dashboard', icon: HiOutlineHome },
  { name: 'Estadísticas', icon: HiOutlineChartBar },
  { name: 'Usuarios', icon: HiOutlineUser },
  { name: 'Configuración', icon: HiOutlineCog },
]

// --- COMPONENTE EXTRAÍDO FUERA DEL RENDER PRINCIPAL ---
interface SidebarContentProps {
  active: string;
  setActive: (name: string) => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const SidebarContent = ({ active, setActive, onClose, isMobile }: SidebarContentProps) => (
  <Flex
    direction="column"
    w={isMobile ? "full" : "260px"}
    bg="white"
    borderRight="1px solid"
    borderColor="gray.200"
    h="100vh"
    p={4}
  >
    {/* Logo */}
    <Flex mb={10} px={2} alignItems="center">
      <Box bg="blue.600" p={2} borderRadius="lg" mr={3}>
        <Box w={4} h={4} bg="white" borderRadius="sm" />
      </Box>
      <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
        ADMIN<Text as="span" color="blue.600">PANEL</Text>
      </Text>
    </Flex>

    {/* Navigation */}
    <Stack gap={2} flex="1">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.name
        return (
          <Flex
            key={item.name}
            align="center"
            px={4}
            py={3}
            cursor="pointer"
            borderRadius="xl"
            transition="all 0.2s ease-in-out"
            bg={isActive ? 'blue.50' : 'transparent'}
            color={isActive ? 'blue.600' : 'gray.500'}
            position="relative"
            // Efecto de aumento y desplazamiento
            _hover={{ 
              transform: 'scale(1.0) translateX(5px)',
              color: 'blue.500',
              bg: 'gray.50'
            }}
            onClick={() => {
              setActive(item.name)
              if (onClose) onClose()
            }}
          >
            <Icon as={item.icon} fontSize="20px" mr={4} />
            <Text fontWeight={isActive ? 'bold' : 'medium'}>
              {item.name}
            </Text>

            {/* Subrayado vertical para el activo */}
            {isActive && (
              <Box
                position="absolute"
                left="0"
                w="4px"
                h="24px"
                bg="blue.600"
                borderRadius="full"
              />
            )}
          </Flex>
        )
      })}
    </Stack>

    {/* User Section */}
    <Box borderTop="1px solid" borderColor="gray.100" pt={4}>
      <Flex align="center" p={2} borderRadius="lg" _hover={{ bg: 'gray.50' }} cursor="pointer">
        <Box w={10} h={10} borderRadius="full" bg="blue.100" display="flex" alignItems="center" justifyContent="center" mr={3}>
          <Text fontWeight="bold" color="blue.600">JD</Text>
        </Box>
        <Box>
          <Text fontSize="sm" fontWeight="bold">John Doe</Text>
          <Text fontSize="xs" color="gray.500">Admin</Text>
        </Box>
      </Flex>
    </Box>
  </Flex>
)

// --- COMPONENTE PRINCIPAL ---
export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón Mobile */}
      <IconButton
        aria-label="Menu"
        display={{ base: 'flex', md: 'none' }}
        onClick={() => setOpen(true)}
        position="fixed"
        top={4}
        left={4}
        variant="outline"
      >
        <HiMenuAlt2 />
      </IconButton>

      {/* Render Escritorio */}
      <Box display={{ base: 'none', md: 'block' }}>
        <SidebarContent active={active} setActive={setActive} />
      </Box>

      {/* Render Móvil con Drawer */}
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement="start">
        <DrawerBackdrop />
        <DrawerContent w="280px">
          <DrawerBody p={0}>
            <SidebarContent 
              active={active} 
              setActive={setActive} 
              onClose={() => setOpen(false)} 
              isMobile 
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  )
}