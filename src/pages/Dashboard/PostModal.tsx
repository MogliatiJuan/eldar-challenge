import React from 'react';
import { Box, Typography, TextField, Button, Modal } from '@mui/material';
import { dashboardTexts } from '@constants/dashboardTexts';
import { Post } from './Dashboard';

interface PostModalProps {
  isModalOpen: boolean;
  isEditing: boolean;
  currentPost: Partial<Post>;
  handleCloseModal: () => void;
  handleSubmit: () => void;
  setCurrentPost: (post: Partial<Post>) => void;
}

const PostModal: React.FC<PostModalProps> = ({
  isModalOpen,
  isEditing,
  currentPost,
  handleCloseModal,
  handleSubmit,
  setCurrentPost,
}) => {
  return (
    <Modal open={isModalOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 24,
        }}>
        <Typography variant='h6' color='textSecondary' fontWeight={'600'}>
          {isEditing
            ? dashboardTexts.editTitleTextModal
            : dashboardTexts.editCreateTextModal}
        </Typography>
        <TextField
          label='Título'
          fullWidth
          value={currentPost.title}
          onChange={(e) =>
            setCurrentPost({ ...currentPost, title: e.target.value })
          }
          sx={{ mt: 2 }}
        />
        <TextField
          label='Cuerpo'
          fullWidth
          multiline
          rows={4}
          value={currentPost.body}
          onChange={(e) =>
            setCurrentPost({ ...currentPost, body: e.target.value })
          }
          sx={{ mt: 2, mb: 2 }}
        />
        <Button variant='contained' onClick={handleSubmit}>
          {isEditing
            ? dashboardTexts.editButtonText
            : dashboardTexts.createButtonText}
        </Button>
      </Box>
    </Modal>
  );
};

export default PostModal;
