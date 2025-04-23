<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require_once __DIR__ . "/../controller/userController.php";
$userController = new UserController();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    switch ($_GET["acao"]) {
            case 'validarLogin':
                $valores = json_decode(file_get_contents("php://input"), true);
                $email = $valores["email"];
                $senha = $valores["senha"];
    
                
                $verificarEmail = $userController->BuscarEmail($email);
            if ($verificarEmail) {
                $resultado = $userController->ValidaLogin($email, $senha);

                if ($resultado) {
                    echo json_encode(array("status" => 200, "message" => "Login realizado com sucesso!"));
                } else {
                    echo json_encode(array("status" => 400, "message" => "Erro ao realizar login!"));
                }
                break;;
            } else {
                echo json_encode(array("status" => 500, "message" => "Email não cadastrado!"));
            }
        
        default:
            echo "Não achei";
            break;
    }
}
?>