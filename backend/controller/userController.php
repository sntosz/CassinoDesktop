<?php
include_once __DIR__ . "/../db/db.php";

class UserController{
    private $conn;
    public $table = "usuario";
    

    public function __construct()
    {
        $objDb = new Bd();
        $this->conn = $objDb->connect();

    }

    public function BuscarEmail($email){
        try {
            $sql = "SELECT :email FROM usuarios;";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":email", $email);
            $db->execute();
            $user = $db->fetchAll(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function CriarUsuario($nome, $email, $cpf, $data_nascimento, $senha_hash){
        try {
            $sql = "INSERT INTO usuarios (nome, email, cpf, data_nascimento, senha_hash) VALUES(:nome, :email, :cpf, :data_nascimento, :senha_hash);";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":email", $email);
            $db->bindParam(":cpf", $cpf);
            $db->bindParam(":data_nascimento", $data_nascimento);
            $db->bindParam(":senha_hash", $senha_hash);
            if($db->execute()){
                return true;
            }else{
                return false;
            }
        } catch (\Exception $th) {
            //throw $th;
        }
    }


    
}

?>