export type ReportType = 'FALTA_ENERGIA' | 'INCENDIO' | 'OSCILACAO' | 'MANUTENCAO';

export interface EditReportFormData {
    titulo: string;
    descricao: string;
    imagem: string;
    endereco: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    latitude: string;
    longitude: string;
    tipo: ReportType;
}

export interface EditReportFormProps {
    initialData: EditReportFormData;
    onSubmit: (formData: EditReportFormData) => void;
    isLoading?: boolean;
}

export interface EditReportTitleProps {
    title: string;
    subtitle: string;
}
