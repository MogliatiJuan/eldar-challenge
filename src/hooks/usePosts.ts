import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { AxiosError } from 'axios';
import { useLoaderStore } from '@store/index';
import { getPostsService } from '@services/index';
import { getValidationError } from '@utilities/index';
import { Post } from '@pages/Dashboard/Dashboard';

export const usePosts = () => {
  const { setLoader } = useLoaderStore();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoader(true);
      try {
        const { data } = await getPostsService();
        setPosts(data);
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
      }
    };
    fetchPosts();
  }, [setLoader]);

  return { posts, setPosts };
};
