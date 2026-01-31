"use client";
import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseTrigger,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inicio");

  const menuItems = ["Inicio", "Servicios", "Acerca de"];

  const NavItem = ({
    item,
    isMobile = false,
  }: {
    item: string;
    isMobile?: boolean;
  }) => {
    const isActive = activeTab === item;

    return (
      <Button
        variant="ghost"
        onClick={() => {
          setActiveTab(item);
          if (isMobile) setIsOpen(false);
        }}
        // Efecto de aumento al pasar el mouse
        _hover={{
          transform: "scale(1.1)",
          bg: "transparent",
          color: "blue.500",
        }}
        // Estilo cuando está seleccionado
        color={isActive ? "blue.600" : "gray.600"}
        borderBottom={isActive ? "2px solid" : "2px solid transparent"}
        //borderColor={isActive ? 'blue.600' : 'transparent'}
        borderRadius="none"
        transition="all 0.2s ease-in-out"
        fontWeight={isActive ? "bold" : "medium"}
        px={2}
        w={isMobile ? "full" : "auto"}
        justifyContent={isMobile ? "flex-start" : "center"}
      >
        {item}
      </Button>
    );
  };

  return (
    <Box bg="white" px={{ base: 16, md: 6 }} shadow="md" position="sticky" top={0} zIndex={10}>
      <Flex
        h={20}
        alignItems="center"
        justifyContent="space-between"
        maxW="7xl"
        mx="auto"
      >
        {/* Logo con un toque más moderno */}
        <Box
          fontWeight="black"
          fontSize="2xl"
          color="blue.600"
          letterSpacing="tight"
          cursor="pointer"
        >
          MI{" "}
          <Box as="span" color="gray.800">
            APP
          </Box>
        </Box>

        {/* Desktop Menu */}
        <Stack
          direction="row"
          gap={8}
          display={{ base: "none", md: "flex" }}
          alignItems="center"
        >
          {menuItems.map((item) => (
            <NavItem key={item} item={item} />
          ))}
          <Button
            bg="blue.600"
            color="white"
            _hover={{ bg: "blue.700", transform: "translateY(-2px)" }}
            boxShadow="sm"
            rounded="lg"
            px={6}
          >
            Contacto
          </Button>
        </Stack>

        {/* Mobile Menu Button */}
        <IconButton
          aria-label="Abrir menú"
          display={{ base: "flex", md: "none" }}
          onClick={() => setIsOpen(true)}
          variant="subtle"
          colorPalette="blue"
        >
          <HiMenu size="24px" />
        </IconButton>
      </Flex>

      {/* Mobile Drawer */}
      <DrawerRoot
        open={isOpen}
        onOpenChange={(e) => setIsOpen(e.open)}
        placement="end"
      >
        <DrawerBackdrop />
        <DrawerContent bg="white">
          <DrawerHeader borderBottomWidth="1px">
            Menú de Navegación
            <DrawerCloseTrigger />
          </DrawerHeader>
          <DrawerBody py={6}>
            <Stack gap={6}>
              {menuItems.map((item) => (
                <NavItem key={item} item={item} isMobile />
              ))}
              <Button colorPalette="blue" variant="solid" w="full" mt={4}>
                Contacto
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
}
