import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar os comentários: "a foto não carregou" e "manda de novo"', () => {
        render(<PostComment />);
        fireEvent.change(screen.getByTestId('post-input'), {
            target: {
                value: 'a foto não carregou'
            }
        });
        fireEvent.click(screen.getByTestId('btn-post-submit'));
        
        expect(screen.getByText('a foto não carregou')).toBeInTheDocument();
        
        fireEvent.change(screen.getByTestId('post-input'), {
            target: {
                value: 'manda de novo'
            }
        });
        fireEvent.click(screen.getByTestId('btn-post-submit'));
        
        expect(screen.getByText('manda de novo')).toBeInTheDocument();
    });
});