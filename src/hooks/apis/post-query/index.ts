import { createQuery } from '@tanstack/solid-query';
import { QUERY_OPTIONS } from '@/constants';
import { PostRepository } from './repository';

const queryKey = {
    all: ['post'],
    checkHello() {
        return [...this.all, 'hello'];
    },
};

export const useGetPost = () => {
    return createQuery(() => ({
        queryKey: queryKey.all,
        queryFn: async () => PostRepository.getPost(),
        ...QUERY_OPTIONS,
    }));
};

export const useHello = () => {
    return createQuery(() => ({
        queryKey: queryKey.checkHello(),
        queryFn: async () => PostRepository.hello(),
        ...QUERY_OPTIONS,
    }));
};
