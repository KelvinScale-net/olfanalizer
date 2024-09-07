import React, { useState, useEffect, ReactNode } from 'react';
import autenticar from './auth';

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                // Nota: Deberías proporcionar usuario y contraseña aquí de forma segura
                const isAuthenticated = await autenticar('usuario', 'contraseña');
                setAuthenticated(isAuthenticated);
            } catch (error) {
                console.error('Error durante la autenticación:', error);
                setAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };
        checkAuth();
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (!authenticated) {
        return <div>No autenticado</div>; // O un componente de login
    }

    return <>{children}</>;
};

export default AuthWrapper;