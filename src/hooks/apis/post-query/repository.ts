import { kyInstance } from '@/utils/ky';
import { type Blog } from '@/types';

export class PostRepository {
    static getPost() {
        return kyInstance.get('posts').json<Blog[]>();
    }

    static hello() {
        return kyInstance.get('hello').json<{ message: string }>();
    }
}
