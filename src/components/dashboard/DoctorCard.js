import React from 'react';
import { Box, Flex, Image, Badge, Text, IconButton } from '@chakra-ui/react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DoctorCard = ({ doctor }) => {
  const handleEdit = () => {
   
    console.log('Edit doctor:', doctor);
  };

  const handleDelete = () => {
  
    console.log('Delete doctor:', doctor);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <Image src={doctor.image} alt={doctor.name} boxSize="100px" objectFit="cover" borderRadius="full" />
        <Box ml={3}>
          <Text fontSize="xl" fontWeight="bold">{doctor.name}</Text>
          <Badge colorScheme="teal" fontSize="sm" mt={1}>
            {doctor.specialization}
          </Badge>
        </Box>
        <Box>
          <IconButton icon={<FaEdit />} colorScheme="teal" variant="ghost" size="sm" onClick={handleEdit} />
          <IconButton icon={<FaTrash />} colorScheme="red" variant="ghost" size="sm" ml={2} onClick={handleDelete} />
        </Box>
      </Flex>
      <Text mt={3} fontSize="md">Experience: {doctor.experience} years</Text>
      <Text fontSize="md">Location: {doctor.location}</Text>
      <Text fontSize="md">Date: {new Date(doctor.date).toLocaleDateString()}</Text>
      <Text fontSize="md">Slots: {doctor.slots}</Text>
      <Text fontSize="md">Fee: ${doctor.fee}</Text>
    </Box>
  );
};

export default DoctorCard;

