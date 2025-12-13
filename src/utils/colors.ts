export const STATUS_COLORS = {
    resolved: '#10B981',      
    inProgress: '#F59E0B',    
    open: '#EF4444'           
} as const;

export const OPTION_COLORS = {
    FALTOUENERGIA: '#3B82F6', 
    FALTA_ENERGIA: '#3B82F6', 
    OSCILACAO: '#8B5CF6',     
    INCENDIO: '#EAB308',      
    MANUTENCAO: '#F97316'     
} as const;

export const CHART_TYPE_COLORS = {
    FALTA_ENERGIA: '#EF4444', 
    FALTOUENERGIA: '#EF4444', 
    INCENDIO: '#F97316',      
    OSCILACAO: '#EAB308',     
    MANUTENCAO: '#3B82F6'     
} as const;

export const FALLBACK_COLOR = '#6B7280'; 

export const STATUS_COLORS_MAP: Record<string, string> = {
    'ABERTO': STATUS_COLORS.open,
    'EM_ANDAMENTO': STATUS_COLORS.inProgress,
    'RESOLVIDO': STATUS_COLORS.resolved
};

export const TYPE_LABELS: Record<string, string> = {
    FALTA_ENERGIA: 'Falta de Energia',
    FALTOUENERGIA: 'Falta de Energia',
    INCENDIO: 'Incêndio',
    OSCILACAO: 'Oscilação',
    MANUTENCAO: 'Manutenção'
};

export const STATUS_LABELS: Record<string, string> = {
    'ABERTO': 'Em Aberto',
    'EM_ANDAMENTO': 'Em Andamento',
    'RESOLVIDO': 'Resolvida'
};

export const OPTION_LABELS: Record<string, string> = {
    'FALTOUENERGIA': 'Falta de Energia',
    'OSCILACAO': 'Oscilação de Energia',
    'INCENDIO': 'Incêndio',
    'MANUTENCAO': 'Poste em Manutenção'
};
