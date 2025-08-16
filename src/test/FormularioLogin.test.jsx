import { render, screen, fireEvent } from '@testing-library/react';
import FormularioLogin from '../components/FormularioLogin';

describe('FormularioLogin', () => {
	test('el botón de login está deshabilitado si los campos están vacíos', () => {
		render(<FormularioLogin />);
		const button = screen.getByRole('button', { name: /login/i });
		expect(button).toBeDisabled();
	});

	test('el botón de login se habilita cuando ambos campos están llenos', () => {
		render(<FormularioLogin />);
		const usernameInput = screen.getByLabelText(/username/i);
		const passwordInput = screen.getByLabelText(/password/i);
		const button = screen.getByRole('button', { name: /login/i });

		fireEvent.change(usernameInput, { target: { value: 'usuario' } });
		fireEvent.change(passwordInput, { target: { value: 'contraseña' } });

		expect(button).not.toBeDisabled();
	});
	
});
