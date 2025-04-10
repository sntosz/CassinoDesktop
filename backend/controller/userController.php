// controllers/UserController.php
<?php
require_once 'models/UserModel.php';

class UserController {
    private $model;

    public function __construct() {
        $this->model = new UserModel();
    }

    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];

        if ($method === 'GET') {
            $users = $this->model->getAllUsers();
            echo json_encode($users);
        } elseif ($method === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);
            if (isset($data['name'])) {
                $newUser = $this->model->addUser($data['name']);
                echo json_encode($newUser);
            } else {
                http_response_code(400);
                echo json_encode(['error' => 'Nome é obrigatório']);
            }
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Método não permitido']);
        }
    }
}