import React from 'react';
import { Chip } from '@mui/material';
import { Post } from './Dashboard';

interface PostChipProps {
  handleOpenModal: (post?: Post) => void;
}
const PostChip: React.FC<PostChipProps> = ({ handleOpenModal }) => {
  return (
    <Chip
      label='Crear nuevo Post'
      onClick={() => handleOpenModal()}
      sx={{
        width: '12rem',
        height: '3rem',
        mt: '2rem',
        fontSize: '1.2rem',
        backgroundColor: '#4A90E2',
        '&:hover': { backgroundColor: '#357ABD' },
      }}
    />
  );
};
export default PostChip;
