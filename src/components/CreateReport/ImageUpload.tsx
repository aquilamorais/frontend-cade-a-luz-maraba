import { useState, useRef, ChangeEvent } from 'react';
import { api } from '../../services/api';

interface ImageUploadProps {
    onImageUpload: (imageUrl: string) => void;
    currentImage?: string;
}

function ImageUpload({ onImageUpload, currentImage }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(currentImage || null);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!allowedTypes.includes(file.type)) {
            setError('Tipo de arquivo não permitido. Use: JPG, PNG, WEBP ou GIF');
            return;
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            setError('Arquivo muito grande. Tamanho máximo: 5MB');
            return;
        }

        setError(null);

        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await api.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            onImageUpload(response.data.url);
        } catch (err) {
            console.error('Erro no upload:', err);
            setError('Erro ao fazer upload da imagem. Tente novamente.');
            setPreview(null);
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        onImageUpload('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-700">
                Foto do Problema (opcional)
            </label>
            
            <div 
                className={`relative flex justify-center items-center rounded-lg border-2 border-dashed cursor-pointer
                    ${preview ? 'border-green-500 bg-green-50' : 'border-gray-300'}
                    ${isUploading ? 'opacity-50 pointer-events-none' : ''}
                `}
                onClick={!preview ? handleClick : undefined}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleFileChange}
                    className="hidden"
                />

                {isUploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-lg z-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm text-gray-600 font-medium">Enviando...</span>
                        </div>
                    </div>
                )}

                {preview ? (
                    <div className="relative w-full">
                        <img 
                            src={preview} 
                            alt="Preview" 
                            className="w-full h-48 object-cover rounded-lg" 
                        />
                        <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full"
                            title="Remover imagem"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            onClick={handleClick}
                            className="absolute bottom-2 right-2 px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                        >
                            Trocar imagem
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-3 py-8 px-4">
                        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <p className="text-sm font-bold text-gray-700">Clique para adicionar uma foto</p>
                            <p className="text-xs text-gray-500 mt-1">JPG, PNG, WEBP ou GIF (máx. 5MB)</p>
                        </div>
                    </div>
                )}
            </div>

            {error && (
                <p className="text-red-500 text-xs mt-1 font-medium">{error}</p>
            )}
        </div>
    );
}

export default ImageUpload;
