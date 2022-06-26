import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const ExpenseCard = () => {
  return (
    <Flex justifyContent='center' direction='column' alignItems='center' h='280px' w='350px' bg='white' borderRadius='12px' boxShadow='lg' mb='20px'>
      <Text> Expenses </Text>
      <Box height='200px' w='300px'>
        <Doughnut data={data} options={{ maintainAspectRatio: false }}/>

      </Box>
    </Flex>
  )
}
