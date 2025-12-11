export function decodeToken(token) {
    if (!token) return null;
    
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Erro ao decodificar token:', error);
        return null;
    }
}

export function getLoggedUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    const decoded = decodeToken(token);
    if (!decoded) return null;
    
    return {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        cpf: decoded.cpf,
        role: decoded.role
    };
}

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    const decoded = decodeToken(token);
    if (!decoded) return false;
    
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
        localStorage.removeItem('token');
        return false;
    }
    
    return true;
}

export function logout() {
    localStorage.removeItem('token');
}
