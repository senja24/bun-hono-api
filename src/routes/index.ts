import { Hono } from 'hono';
import { createPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/PostController';

const router = new Hono()

router.get('/', (c) => getPosts(c));
router.post('/', (c) => createPost(c))
router.get('/:id', (c) => getPostById(c));
router.patch('/:id', (c) => updatePost(c));
router.delete('/:id', (c) => deletePost(c));

export const Routes = router;