<?php

header("Access-Control-Allow-Origin: *");

// Permite os métodos que seu frontend vai usar
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Permite headers personalizados (como Content-Type, Authorization, etc.)
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once __DIR__ . "/../controller/userController.php";
$userController = new UserController();

if($_SERVER["REQUEST_METHOD"] == "POST"){
    switch ($_GET["acao"]){
        case 'cadastrar':
            $valores = json_decode(file_get_contents("php://input"), true);
        
            $nome = $valores["nome"];
            $email = $valores["email"];
            $cpf = $valores["cpf"];
            $dataNascimento = $valores["dataNascimento"];
            // $senha = $_POST["senha"];

            if(!(empty($nome) || empty($email) || empty($cpf) || empty($dataNascimento))){
                $resposta = $userController->CriarUsuario($nome,$email, $cpf, $dataNascimento) ;
                echo $resposta;
                // if($resposta){
                //     header("Location: ../../src/pages/login/index.tsx");
                // }
            }
            // break;
    }
}
?>