'use client'
import {
  Box,
  Card,
  Grid,
  Image,
  Text,
  Button,
  Icon,
  Badge,
  Flex,
  Stack,
} from '@chakra-ui/react'
import { HiOutlineShoppingCart, HiOutlineHeart } from 'react-icons/hi'

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    category: 'Electrónica',
    rating: 4.5,
    inStock: true,
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    category: 'Audio',
    rating: 4.8,
    inStock: true,
  },
  {
    id: 3,
    name: 'Smartphone X',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1511707267537-b85faf00021e?w=400&h=400&fit=crop',
    category: 'Móviles',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 4,
    name: 'Tablet Ultra',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop',
    category: 'Tablets',
    rating: 4.4,
    inStock: false,
  },
  {
    id: 5,
    name: 'Monitor 4K',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    category: 'Monitores',
    rating: 4.6,
    inStock: true,
  },
  {
    id: 6,
    name: 'Teclado Mecánico',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1587829191301-4ca6f6af3b60?w=400&h=400&fit=crop',
    category: 'Periféricos',
    rating: 4.9,
    inStock: true,
  },
  {
    id: 7,
    name: 'Cámara Digital',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=400&fit=crop',
    category: 'Cámaras',
    rating: 4.7,
    inStock: true,
  },
  {
    id: 8,
    name: 'Smartwatch Pro',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    category: 'Wearables',
    rating: 4.5,
    inStock: true,
  },
]

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card.Root
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'lg',
      }}
      cursor="pointer"
      bg="white"
    >
      {/* Image Container */}
      <Box position="relative" overflow="hidden" h="250px" bg="gray.100">
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="full"
          objectFit="cover"
          transition="transform 0.3s ease"
          _groupHover={{
            transform: 'scale(1.1)',
          }}
        />
        {!product.inStock && (
          <Box
            position="absolute"
            inset="0"
            bg="blackAlpha.600"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="white" fontWeight="bold" fontSize="lg">
              Agotado
            </Text>
          </Box>
        )}
      </Box>

      {/* Content */}
      <Card.Body p={4}>
        <Stack gap={3}>
          {/* Category Badge */}
          <Badge colorScheme="blue" w="fit-content" fontSize="xs">
            {product.category}
          </Badge>

          {/* Title */}
          <Text fontSize="lg" fontWeight="bold" lineClamp={2}>
            {product.name}
          </Text>

          {/* Rating */}
          <Flex align="center" gap={1}>
            <Text fontSize="sm" color="gray.600">
              ⭐ {product.rating}
            </Text>
          </Flex>

          {/* Price */}
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            ${product.price.toFixed(2)}
          </Text>
        </Stack>
      </Card.Body>

      {/* Footer */}
      <Card.Footer p={4} gap={2}>
        <Button
          flex={1}
          colorScheme="blue"
          disabled={!product.inStock}
        >
          <Flex align="center" gap={2}>
            <Icon as={HiOutlineShoppingCart} fontSize="18px" />
            <Text>Comprar</Text>
          </Flex>
        </Button>
        <Button
          size="lg"
          disabled={!product.inStock}
          variant="ghost"
          colorScheme="red"
        >
          <HiOutlineHeart />
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default function Home() {
  return (
    <Box w="full">
      {/* Header */}
      <Box mb={12}>
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Tienda Online
        </Text>
        <Text fontSize="lg" color="gray.600">
          Descubre nuestros productos de última tecnología
        </Text>
      </Box>

      {/* Products Grid */}
      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={6}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  )
}
