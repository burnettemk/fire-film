import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    let color = '';
    if (score > 7)
        color = 'green';
    else if (score > 5)
        color = 'yellow';
    else color = 'red';
    

  return (
    <Badge fontSize='14px' paddingX={2} borderRadius={4} colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore