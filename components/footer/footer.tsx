// components/Footer.tsx
'use client'
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  SimpleGrid,
  Separator,
} from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700">
      <Container maxW="7xl" py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={8}>
          <Stack gap={2}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Empresa
            </Text>
            <Link href="#">Acerca de</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Carreras</Link>
          </Stack>

          <Stack gap={2}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Soporte
            </Text>
            <Link href="#">Centro de ayuda</Link>
            <Link href="#">Contacto</Link>
            <Link href="#">FAQ</Link>
          </Stack>

          <Stack gap={2}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Legal
            </Text>
            <Link href="#">Privacidad</Link>
            <Link href="#">Términos</Link>
            <Link href="#">Cookies</Link>
          </Stack>

          <Stack gap={2}>
            <Text fontWeight="bold" fontSize="lg" mb={2}>
              Social
            </Text>
            <Link href="#">Twitter</Link>
            <Link href="#">LinkedIn</Link>
            <Link href="#">GitHub</Link>
          </Stack>
        </SimpleGrid>

        <Separator my={8} />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          gap={4}
        >
          <Text fontSize="sm">© 2024 Mi Empresa. Todos los derechos reservados.</Text>
          <Stack direction="row" gap={6}>
            <Link href="#" fontSize="sm">Términos</Link>
            <Link href="#" fontSize="sm">Privacidad</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}