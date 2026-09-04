import '../style.css';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

export function Login() {

    const { email, setEmail, password, setPassword, login } = useLogin('');

    return (
        <div className="login-container">
            <div className="login-visual-section">
                <div className="brand-element">
                    <div className="logo-placeholder"></div>
                    <h1>Rápida & Certa</h1>
                    <p>Sistema Interno de Gestão Logística.</p>
                </div>
                <div className="abstract-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
            <div className="login-form-section">
                <div className="login-form-wrapper">
                    <div className="login-header">
                        <h2>Bem-vindo de volta</h2>
                        <p>Insira suas credenciais para acessar o painel corporativo</p>
                    </div>

                    <form className="login-form" onSubmit={(e) => {
                        e.preventDefault();
                        login();
                    }}>
                        <div className="input-group">
                            <label htmlFor="email">Email corporativo</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input type="email" id="email" placeholder="nome@rapidaecerta.com.br" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <div className="input-wrapper">
                                <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input type="password" id="password" placeholder="••••••••" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                        </div>

                        <div className="form-actions">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Lembrar de mim</span>
                            </label>
                            <a href="#" className="forgot-password">Esqueceu a senha?</a>
                        </div>

                        <button type="submit" className="login-button">
                            Entrar no sistema
                            <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Precisa de ajuda? <a href="#">Contate o departamento de TI</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
