import React, { useState, useEffect } from 'react';
import { Box, Center, SimpleGrid, Select, Input, Button } from '@chakra-ui/react';
import DoctorCard from '../components/dashboard/DoctorCard';
import axios from 'axios';

const DashboardPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [specializationFilter, setSpecializationFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    
    axios.get('https://dark-ruby-llama-tutu.cyclic.app/doctors')
      .then(response => setDoctors(response.data))
      .catch(error => console.error('Error fetching doctors:', error));
  }, []);

  const filteredDoctors = doctors
    .filter(doctor => {
      if (specializationFilter && doctor.specialization !== specializationFilter) {
        return false;
      }
      if (searchQuery && !doctor.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      return true;
    });

  return (
    <Center h="100vh">
      <Box>
        <Box mb={4}>
          <Select
            placeholder="Filter by Specialization"
            value={specializationFilter}
            onChange={(e) => setSpecializationFilter(e.target.value)}
          >
            <option value="">All Specializations</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
          </Select>
        </Box>
        <Box mb={4}>
          <Input
            type="text"
            placeholder="Search by Doctor Name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Box>
        <Button mb={4} colorScheme="teal">Sort by Date</Button>
        <SimpleGrid columns={3} spacing={4}>
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </SimpleGrid>
      </Box>
    </Center>
  );
};

export default DashboardPage;
