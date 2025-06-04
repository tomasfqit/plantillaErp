//"use client";
import React, { useState } from 'react';
import { useLogin } from '../services/auth/useLogin';
import { useAuthProvider } from './AuthContext';
import { toast } from 'sonner';
import { TOAST_SUCCESS } from '@/constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	const { mutate: login } = useLogin();
	const { login: localLogin } = useAuthProvider();
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
			onSuccess: (data) => {
				toast.success('Inicio de sesión exitoso', {
					style: TOAST_SUCCESS
				});
				localLogin(
					{
						token: data.result,
						username: formData.username
					}
				);
				navigate('/home', { replace: true });
			},
		});

	};

	return (
		<div className="min-h-screen flex flex-col md:flex-row bg-white">
			{/* Left side - branding */}
			<div className="w-full md:w-1/2 bg-black flex flex-col justify-center items-center p-8 text-white">
				<div className="mb-6 relative h-72 w-80">
					<img
						src="/itsa.png"
						alt="Importadora Tomebamba Logo"
						className="object-contain w-full h-full"
					/>
				</div>
			</div>

			{/* Right side - login form */}
			<div className="w-full md:w-1/2 flex justify-center items-center p-8">
				<div className="w-full max-w-md">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-bold text-black">Iniciar Sesión</h2>
						<p className="text-gray-600 mt-2">Ingrese sus credenciales para acceder al sistema</p>
					</div>

					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
								Usuario
							</label>
							<input
								id="username"
								name="username"
								type="text"
								autoComplete="username"
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent"
								placeholder="Ingrese su usuario"
								value={formData.username}
								onChange={handleChange}
							/>
						</div>

						<div>
							<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
								Contraseña
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CC0000] focus:border-transparent"
								placeholder="Ingrese su contraseña"
								value={formData.password}
								onChange={handleChange}
							/>
						</div>

						<div>
							<button
								type="submit"
								className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md 
								shadow-sm text-white bg-[#CC0000] hover:bg-[#990000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC0000]"
							>
								Ingresar
							</button>
						</div>
					</form>

					<div className="mt-8 text-center">
						<p className="text-sm text-gray-600"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
