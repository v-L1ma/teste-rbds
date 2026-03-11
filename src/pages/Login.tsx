import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Login com:", { email, password });
  };

  return (
    <div className="w-11/12 md:w-4/6 h-[90vh] border rounded-xl shadow-md mx-auto mt-10 flex overflow-hidden">
      <div className="hidden md:flex w-3/6 bg-amber-400">
      </div>
      <div className="w-3/6 p-6 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-10">LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              placeholder="seu@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <FormItem>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};
