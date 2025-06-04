//"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../services/auth/useLogin';
import { useAuthProvider } from './useAuth';
import { toast } from 'sonner';
import { TOAST_ERROR, TOAST_SUCCESS } from '@/constants';

const Login = () => {
	const { mutate: login } = useLogin();
	const { login: localLogin } = useAuthProvider();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login(formData, {
			onSuccess: () => {
				toast.success('Inicio de sesión exitoso', {
					style: TOAST_SUCCESS
				});
			},
		});

	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">Importadora Tomebamba</h1>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm space-y-4">
						<div>
							<label htmlFor="username" className="sr-only">
								Username
							</label>
							<input
								id="username"
								name="username"
								type="text"
								required
								className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
								placeholder="Username"
								value={formData.username}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
								placeholder="Password"
								value={formData.password}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
