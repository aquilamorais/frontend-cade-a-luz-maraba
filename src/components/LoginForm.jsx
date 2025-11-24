import { useState } from 'react';
import smsIcon from '../assets/sms.png';
import cadeadoIcon from '../assets/cadeado.png';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ email, password });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-[50px] bg-[#f0f0f0] w-full h-full rounded-[10px]">
            <div className="flex flex-col justify-center items-center gap-[30px] w-full h-full rounded-[10px]">
                <h2 className="mt-[30px] text-[2rem] font-bold text-[#02644f]">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 w-[60%]">
                    <span className="text-base font-bold">E-mail</span>
                    <input
                        type="text"
                        className="min-w-full p-2.5 border-2 border-[#02644f] rounded-md bg-[#f0f0f0] pl-10"
                        placeholder="@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                            backgroundImage: `url(${smsIcon})`,
                            backgroundSize: '20px',
                            backgroundPosition: '10px center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <span className="text-base font-bold">Senha</span>
                    <input
                        type="password"
                        className="min-w-full p-2.5 border-2 border-[#02644f] rounded-md bg-[#f0f0f0] pl-10"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            backgroundImage: `url(${cadeadoIcon})`,
                            backgroundSize: '20px',
                            backgroundPosition: '10px center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <button type="submit" className="flex p-2.5 justify-center items-center cursor-pointer min-w-full border-none rounded-md bg-[#02644f] text-white">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
