import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { Roles } from '@models/roles';
import { useAuthStore } from '@store/index';
import { Post } from './Dashboard';

interface PostCardProps {
  post: Post;
  handleOpenModal: (post: Post) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, handleOpenModal }) => {
  const { user } = useAuthStore();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Typography
          variant='h6'
          color='textSecondary'
          fontWeight={'600'}
          marginBottom={'0.5rem'}>
          {post.title}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {post.body}
        </Typography>
        {user?.role === Roles.ADMIN && (
          <Button
            variant='contained'
            onClick={() => handleOpenModal(post)}
            sx={{ width: '5rem' }}>
            Editar
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;
