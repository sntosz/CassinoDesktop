<?php
// $host = 'localhost';      
// $dbname = 'cassinoDesktop'; 
// $username = 'root';       
// $password = '';           

// $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";

// try {
//     $pdo = new PDO($dsn, $username, $password);
    
//     $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
//     echo "Conexão bem-sucedida!";
// } catch (PDOException $e) {
//     echo "Erro na conexão: " . $e->getMessage();
// }

class Bd
{
    private $host = 'localhost';
    private $dbname = 'cassinoDesktop';
    private $username = 'root';
    private $password = '';

    public function connect()
    {
        $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->dbname . ";charset=utf8mb4";

        try {
            $pdo = new PDO($dsn, $this->username, $this->password);
            
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            return $pdo;
        } catch (PDOException $e) {
            echo "Erro na conexão: " . $e->getMessage();
            return null;
        }
    }
}


?>