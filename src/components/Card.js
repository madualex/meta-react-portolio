import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack spacing={3}>
      <Box w='100%' borderRadius='lg' overflow='hidden' bg='white' color='black'>
        <Image src={imageSrc} alt='project' borderRadius='5px' />
        <Heading p='2' as='h2' size='sm'>{title}</Heading>
        <Text color='gray.600' p='2'>{description}</Text>

        <HStack p='2'>
          <Text as='b' fontSize='xs'>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </HStack>
      </Box>
      
    </VStack>
  )
};

export default Card;
