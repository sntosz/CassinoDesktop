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

    public function GetAllUser(){
        try {
            $sql = "SELECT * FROM $this->table";
            $db = $this->conn->prepare($sql);
            $db->execute();
            $user = $db->fetchAll(PDO::FETCH_ASSOC);
            return $user;
        } catch (\Exception $th) {
            return $th->getMessage();
        }
    }

    public function CriarUsuario($nome, $email, $cpf, $dataNascimento){
        try {
            $sql = "INSERT INTO $this->table (nome, email, cpf, dataNascimento) VALUES(:nome, :email, :cpf, :dataNascimento)";
            $db = $this->conn->prepare($sql);
            $db->bindParam(":nome", $nome);
            $db->bindParam(":email", $email);
            $db->bindParam(":cpf", $cpf);
            $db->bindParam(":dataNascimento", $dataNascimento);
            // $db->bindParam(":senha", $senha);
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