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
import { useRouter } from 'next/navigation'
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  LogOut,
  UserCircle,
  ShieldCheck,
} from 'lucide-react'

const NAV_ITEMS = [
  { name: 'Dashboard', icon: Home },
  { name: 'Estadísticas', icon: BarChart3 },
  { name: 'Usuarios', icon: Users },
  { name: 'Configuración', icon: Settings },
]

// --- COMPONENTE EXTRAÍDO FUERA DEL RENDER PRINCIPAL ---
interface SidebarContentProps {
  active: string;
  setActive: (name: string) => void;
  onClose?: () => void;
  isMobile?: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

const SidebarContent = ({
  active,
  setActive,
  onClose,
  isMobile,
  collapsed,
  onToggleCollapse,
}: SidebarContentProps) => {
  const router = useRouter()
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <Flex
      direction="column"
      w={isMobile ? "full" : collapsed ? "80px" : "260px"}
      bg="white"
      borderRight="1px solid"
      borderColor="gray.200"
      h="100vh"
      p={4}
      transition="width 0.2s ease"
    >
      {/* Logo + Toggle */}
      <Flex
        mb={10}
        px={2}
        alignItems="center"
        justify={collapsed ? "center" : "space-between"}
      >
        <Flex align="center">
          <Box bg="blue.600" p={2} borderRadius="lg" mr={collapsed ? 0 : 3}>
            <Box w={4} h={4} bg="white" borderRadius="sm" />
          </Box>
          {!collapsed && (
            <Text fontSize="xl" fontWeight="bold" letterSpacing="tight">
              ADMIN<Text as="span" color="blue.600">PANEL</Text>
            </Text>
          )}
        </Flex>
        {!isMobile && (
          <IconButton
            aria-label="Toggle sidebar"
            size="sm"
            variant="ghost"
            onClick={onToggleCollapse}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        )}
      </Flex>

      {/* Navigation */}
      <Stack gap={2} flex="1">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.name
          return (
            <Flex
              key={item.name}
              align="center"
              justify={collapsed ? "center" : "flex-start"}
              px={collapsed ? 2 : 4}
              py={3}
              cursor="pointer"
              borderRadius="xl"
              transition="all 0.2s ease-in-out"
              bg={isActive ? 'blue.50' : 'transparent'}
              color={isActive ? 'blue.600' : 'gray.500'}
              position="relative"
              _hover={{ 
                transform: collapsed ? 'scale(1.05)' : 'scale(1.0) translateX(5px)',
                color: 'blue.500',
                bg: 'gray.50'
              }}
              onClick={() => {
                setActive(item.name)
                if (onClose) onClose()
              }}
            >
              <Icon as={item.icon} fontSize="20px" mr={collapsed ? 0 : 4} />
              {!collapsed && (
                <Text fontWeight={isActive ? 'bold' : 'medium'}>
                  {item.name}
                </Text>
              )}

              {/* Subrayado vertical para el activo */}
              {isActive && (
                <Box
                  position="absolute"
                  left={collapsed ? "0" : "0"}
                  w={collapsed ? "3px" : "4px"}
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
        <Flex
          align="center"
          justify={collapsed ? "center" : "flex-start"}
          p={2}
          borderRadius="lg"
          _hover={{ bg: 'gray.50' }}
          cursor="pointer"
          onClick={() => setUserMenuOpen((prev) => !prev)}
        >
          <Box
            w={10}
            h={10}
            borderRadius="full"
            bg="blue.100"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr={collapsed ? 0 : 3}
          >
            <Icon as={UserCircle} fontSize="22px" color="blue.600" />
          </Box>
          {!collapsed && (
            <Box>
              <Text fontSize="sm" fontWeight="bold">John Doe</Text>
              <Text fontSize="xs" color="gray.500">Admin</Text>
            </Box>
          )}
        </Flex>

        {/* User Menu */}
        {userMenuOpen && (
          <Stack gap={1} mt={2}>
            <Flex
              align="center"
              px={collapsed ? 2 : 3}
              py={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
            >
              <Icon as={Users} fontSize="18px" mr={collapsed ? 0 : 3} />
              {!collapsed && <Text fontSize="sm">Mi perfil</Text>}
            </Flex>
            <Flex
              align="center"
              px={collapsed ? 2 : 3}
              py={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
            >
              <Icon as={ShieldCheck} fontSize="18px" mr={collapsed ? 0 : 3} />
              {!collapsed && <Text fontSize="sm">Seguridad</Text>}
            </Flex>
            <Flex
              align="center"
              px={collapsed ? 2 : 3}
              py={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: 'gray.50' }}
            >
              <Icon as={Settings} fontSize="18px" mr={collapsed ? 0 : 3} />
              {!collapsed && <Text fontSize="sm">Configuración</Text>}
            </Flex>
            <Flex
              align="center"
              px={collapsed ? 2 : 3}
              py={2}
              borderRadius="md"
              cursor="pointer"
              _hover={{ bg: 'red.50', color: 'red.600' }}
              onClick={() => router.push('/')}
            >
              <Icon as={LogOut} fontSize="18px" mr={collapsed ? 0 : 3} />
              {!collapsed && <Text fontSize="sm">Cerrar sesión</Text>}
            </Flex>
          </Stack>
        )}
      </Box>
    </Flex>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function Sidebar() {
  const [active, setActive] = useState('Dashboard')
  const [open, setOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Botón Mobile */}
      <IconButton
        aria-label="Menu"
        display={{ base: 'flex', md: 'none' }}
        onClick={() => setOpen(true)}
        position="absolute"
        top={6}
        left={4}
        variant="outline"
        zIndex={20}
        bg="white"
      >
        <Menu />
      </IconButton>

      {/* Render Escritorio */}
      <Box display={{ base: 'none', md: 'block' }} position="sticky" top={0} h="100vh">
        <SidebarContent
          active={active}
          setActive={setActive}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />
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
              collapsed={false}
              onToggleCollapse={() => setCollapsed((prev) => !prev)}
            />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </>
  )
}