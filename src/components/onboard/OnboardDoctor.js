import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Select, Textarea, Button, Flex } from '@chakra-ui/react';

const OnboardDoctor = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: '',
    image: '',
    specialization: '',
    experience: '',
    location: '',
    date: '', 
    slots: '',
    fee: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch('https://dark-ruby-llama-tutu.cyclic.app/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctorInfo),
      });

      if (response.ok) {
      
        console.log('Doctor onboarded successfully');
      } else {
       
        console.error('Error onboarding doctor:', response.status, response.statusText);
      }
    } catch (error) {
      
      console.error('Error:', error.message);
    }
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Onboard Doctor
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex flexWrap="wrap" justifyContent="space-between">
          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={doctorInfo.name} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Image URL</FormLabel>
            <Input type="text" name="image" value={doctorInfo.image} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Specialization</FormLabel>
            <Select name="specialization" value={doctorInfo.specialization} onChange={handleInputChange} required>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatrician">Pediatrician</option>
              <option value="Psychiatrist">Psychiatrist</option>
            </Select>
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Experience</FormLabel>
            <Input type="text" name="experience" value={doctorInfo.experience} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Location</FormLabel>
            <Input type="text" name="location" value={doctorInfo.location} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Date</FormLabel>
            <Input type="date" name="date" value={doctorInfo.date} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Slots</FormLabel>
            <Input type="number" name="slots" value={doctorInfo.slots} onChange={handleInputChange} required />
          </FormControl>

          <FormControl mb={4} flex="1 0 48%">
            <FormLabel>Fee</FormLabel>
            <Input type="number" name="fee" value={doctorInfo.fee} onChange={handleInputChange} required />
          </FormControl>
        </Flex>

        <Button type="submit" colorScheme="teal" mt={4}>
          Onboard Doctor
        </Button>
      </form>
    </Box>
  );
};

export default OnboardDoctor;
