import { useNavigate } from 'react-router';
import Footer from '../../components/Footer';
import CreateReportHeader from '../../components/CreateReport/CreateReportHeader';
import CreateReportTitle from '../../components/CreateReport/CreateReportTitle';
import CreateReportForm from '../../components/CreateReport/CreateReportForm';
import { CreateReportFormData } from '../../components/CreateReport/Types';
import { api } from '../../services/api';

const mapTipoToOption = (tipo: string): string => {
    const mapping: Record<string, string> = {
        'FALTA_ENERGIA': 'Faltou energia',
        'OSCILACAO': 'Oscilação de energia',
        'INCENDIO': 'Incêndio',
        'MANUTENCAO': 'Poste em manutenção'
    };
    return mapping[tipo] || 'Faltou energia';
};

function CreateReport() {
    const navigate = useNavigate();

    const handleSubmit = async (formData: CreateReportFormData) => {
        try {
            const payload = {
                title: formData.titulo,
                description: formData.descricao,
                img: formData.imagem || undefined,
                address: formData.endereco,
                neighborhood: formData.bairro,
                hour: new Date().toISOString(),
                option: mapTipoToOption(formData.tipo)
            };

            console.log('Enviando denúncia:', payload);

            const response = await api.post('/complaints', payload);
            
            console.log('Denúncia criada:', response.data);
            alert('Denúncia registrada com sucesso!');
            navigate('/home');
        } catch (error: any) {
            console.error('Erro ao criar denúncia:', error.response?.data || error.message);
            alert('Erro ao registrar denúncia. Tente novamente.');
        }
    };

    return (
        <>
            <CreateReportHeader />
            <main className="min-h-screen flex flex-col">
                <div className="flex flex-col gap-4 bg-(--color-secondary) py-8 px-4">
                    <div className="flex flex-col items-center w-full gap-4">
                        <CreateReportTitle
                            title="Registrar Nova Denúncia"
                            subtitle="Informe os detalhes sobre a falta de energia elétrica na sua região."
                        />
                        <CreateReportForm onSubmit={handleSubmit} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default CreateReport;
