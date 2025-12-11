export type ReportType = 'FALTA_ENERGIA' | 'INCENDIO' | 'OSCILACAO' | 'MANUTENCAO';

export interface CreateReportFormData {
    titulo: string;
    descricao: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    latitude: string;
    longitude: string;
    tipo: ReportType;
}

export interface CreateReportFormProps {
    onSubmit: (formData: CreateReportFormData) => void;
}

export interface CreateReportTitleProps {
    title: string;
    subtitle: string;
}
