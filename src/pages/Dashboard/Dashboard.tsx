import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { Box } from '@mui/material';
import { useLoaderStore, useAuthStore } from '@store/index';
import { getValidationError, getValidationSuccess } from '@utilities/index';
import { createPostsService, modifyPostsService } from '@services/index';
import { Roles } from '@models/roles';
import { usePosts } from '@hooks/index';
import PostCard from './PostCard';
import PostChip from './PostChip';
import PostModal from './PostModal';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Dashboard: React.FC = () => {
  const { posts, setPosts } = usePosts();
  const { setLoader, loader } = useLoaderStore();
  const { user } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<Partial<Post>>({
    title: '',
    body: '',
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreatePost = async () => {
    try {
      setLoader(true);
      if (currentPost.title === '' || currentPost.body === '') {
        return Swal.fire({
          title: 'Atención',
          text: getValidationError('invalidForm'),
          icon: 'warning',
          confirmButtonText: 'Reingresar',
        });
      }

      const res = await createPostsService(currentPost);
      setPosts([...posts, res.data]);
      Swal.fire({
        title: 'Éxito',
        text: getValidationSuccess('createPost'),
        icon: 'success',
        confirmButtonText: 'Continuar',
      });
    } catch (error) {
      const err = error as AxiosError;
      const errorCode = err?.code || 'DEFAULT';
      Swal.fire({
        title: 'Error',
        text: getValidationError(errorCode),
        icon: 'error',
        confirmButtonText: 'Reintentar',
      });
    } finally {
      setLoader(false);
      handleCloseModal();
    }
  };

  const handleEditPost = async (id: number) => {
    try {
      setLoader(true);
      const validId = id > 100 ? Math.floor(Math.random() * 100) + 1 : id;
      await modifyPostsService(validId, currentPost);
      setPosts(
        posts
          .map((post) => (post.id === id ? { ...post, ...currentPost } : post))
          .filter((post) => post.body !== '' && post.title !== ''),
      );
      Swal.fire({
        title: 'Éxito',
        text: getValidationSuccess('modifyPost'),
        icon: 'success',
        confirmButtonText: 'Continuar',
      });
    } catch (error) {
      const err = error as AxiosError;
      const errorCode = err?.code || 'DEFAULT';
      Swal.fire({
        title: 'Error',
        text: getValidationError(errorCode),
        icon: 'error',
        confirmButtonText: 'Reintentar',
      });
    } finally {
      setLoader(false);
      handleCloseModal();
    }
  };

  const handleOpenModal = (post?: Post) => {
    if (post) {
      setIsEditing(true);
      setCurrentPost(post);
    } else {
      setIsEditing(false);
      setCurrentPost({ title: '', body: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = () => {
    if (isEditing) {
      handleEditPost(currentPost.id!);
    } else {
      handleCreatePost();
    }
  };

  return (
    <>
      {user?.role === Roles.ADMIN && !loader && (
        <PostChip handleOpenModal={handleOpenModal} />
      )}

      <Box
        sx={{
          display: 'grid',
          p: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.2rem',
        }}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            handleOpenModal={handleOpenModal}
          />
        ))}
      </Box>
      <PostModal
        isModalOpen={isModalOpen}
        isEditing={isEditing}
        currentPost={currentPost}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        setCurrentPost={setCurrentPost}
      />
    </>
  );
};

export default Dashboard;
