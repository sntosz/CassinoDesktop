export async function Cadastro(nome: string, email: string, cpf: string, dataNascimento: string,){
 
    const resposta = await fetch("http://localhost/cassino/backend/router/userRouter.php?acao=cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nome: nome, email: email, cpf: cpf, dataNascimento: dataNascimento})
    })
    const dados = await resposta.json()
    return dados

}