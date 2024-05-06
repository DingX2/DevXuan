import ky from 'ky';

export class PostRepository {
    static getPost() {
        return ky.get('');
    }
}
