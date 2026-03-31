import { type ParentComponent, type Component, createSignal } from 'solid-js';
import ReactMarkdown from 'react-markdown';
import { Stack, Box } from '@/components/atoms';

const Markdown = ReactMarkdown as unknown as Component<{ children: string }>;

export const BlogCreate: ParentComponent = () => {
    const [markdown, setMarkdown] = createSignal<string>('');

    const handleInput = (event: Event) => {
        const target = event.target as HTMLTextAreaElement;
        if (target) {
            setMarkdown(target.value);
        }
    };

    return (
        <Stack>
            <Box>
                <textarea
                    rows="10"
                    cols="50"
                    value={markdown()}
                    onInput={handleInput}
                    placeholder="Write your markdown here..."
                />
            </Box>
            <Box>
                <Markdown>{markdown()}</Markdown>
            </Box>
        </Stack>
    );
};
