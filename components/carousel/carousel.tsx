'use client'
import type { IconButtonProps } from "@chakra-ui/react"
import { AspectRatio, Box, Carousel, IconButton, Image } from "@chakra-ui/react"
import { forwardRef } from "react"
import { LuArrowLeft, LuArrowRight } from "react-icons/lu"

export default function CarouselComponent() {
  return (
    <Carousel.Root
      slideCount={items.length}
      maxW="container.sm"
      mx="auto"
      position="relative"
      colorPalette="white"
      // Eliminamos cualquier gap o padding por defecto
      gap="0"
    >
      {/* Contenedor relativo para que los botones se posicionen respecto a este área */}
      <Box position="relative" width="full">
        
        <Carousel.PrevTrigger asChild>
          <ActionButton insetStart="4" left="4">
            <LuArrowLeft />
          </ActionButton>
        </Carousel.PrevTrigger>

        <Carousel.ItemGroup width="full">
          {items.map((src, index) => (
            <Carousel.Item key={index} index={index}>
              <AspectRatio ratio={16 / 9} maxH="56vh" w="full">
                <Image
                  src={src}
                  alt={`Product ${index + 1}`}
                  objectFit="contain"
                  display="block" // Evita espacios extra debajo de la imagen
                />
              </AspectRatio>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>

        <Carousel.NextTrigger asChild>
          <ActionButton insetEnd="4" right="4">
            <LuArrowRight />
          </ActionButton>
        </Carousel.NextTrigger>

        {/* Indicadores dentro del área de la imagen */}
        <Box position="absolute" bottom="4" width="full" zIndex="1">
          <Carousel.Indicators
            transition="width 0.2s ease-in-out"
            transformOrigin="center"
            justifyContent="center"
            opacity="0.5"
            boxSize="2"
            _current={{ width: "10", bg: "colorPalette.subtle", opacity: 1 }}
          />
        </Box>
      </Box>
    </Carousel.Root>
  )
}

const ActionButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function ActionButton(props, ref) {
    return (
      <IconButton
        {...props}
        ref={ref}
        size="xs"
        variant="outline"
        rounded="full"
        position="absolute"
        // Centrado vertical exacto
        top="50%"
        transform="translateY(-50%)"
        zIndex="2"
        bg="bg"
        shadow="md"
      />
    )
  },
)

const items = [
  "https://images.unsplash.com/photo-1656433031375-5042f5afe894?auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1587466412525-87497b34fc88?auto=format&fit=crop&q=80&w=2673",
  "https://images.unsplash.com/photo-1629581688635-5d88654e5bdd?auto=format&fit=crop&q=80&w=2831",
  "https://images.unsplash.com/photo-1661030420948-862787de0056?auto=format&fit=crop&q=80&w=2370",
  "https://images.unsplash.com/photo-1703505841379-2f863b201212?auto=format&fit=crop&q=80&w=2371",
  "https://images.unsplash.com/photo-1607776905497-b4f788205f6a?auto=format&fit=crop&q=80&w=2370",
]