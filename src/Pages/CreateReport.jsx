import Footer from '../components/Footer';
import CreateReportHeader from '../components/CreateReport/CreateReportHeader';
import CreateReportTitle from '../components/CreateReport/CreateReportTitle';
import CreateReportForm from '../components/CreateReport/CreateReportForm';

function CreateReport() {
    const handleSubmit = (formData) => {
        console.log('Report submission:', formData);
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
