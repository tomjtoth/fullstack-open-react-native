import { render, fireEvent, screen, waitFor } from '@testing-library/react-native';
import SignInForm from '../../components/SignIn/Form';


describe('SignInForm', () => {
  it('calls onSubmit properly', async () => {

    const mockSubmit = jest.fn()

    render(<SignInForm onSubmit={mockSubmit} />);
    screen.debug()

    fireEvent.changeText(screen.getByPlaceholderText('username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('password'), 'password');
    fireEvent.press(screen.getByText('Sign In'));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledTimes(1);

      expect(mockSubmit.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });
    });

  });
});