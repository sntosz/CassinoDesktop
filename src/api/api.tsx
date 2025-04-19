export async function Cadastro(nome: string, email: string, cpf: string, data_Nascimento: string, senha : string) {
    try {
        const resposta = await fetch("http://localhost/cassino/backend/router/userRouter.php?acao=cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, cpf, data_Nascimento, senha })
        });
       
        const dados = await resposta.json();
        console.log(dados.status)
        return dados;
    } catch (error) {
        console.error("Error in Cadastro:", error);
        throw error;
    }
}
export async function VerificarEmail(email: string) {
    try {
        const resposta = await fetch("http://localhost/cassino/backend/router/userRouter.php?acao=cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
       
        const dados = await resposta.json();
        console.log(dados.status)
        return dados;
    } catch (error) {
        console.error("Error in Cadastro:", error);
        throw error;
    }
}