// index.php
<?php
require_once 'controllers/UserController.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permite requisições do Electron
header('Access-Control-Allow-Methods: GET, POST');

$controller = new UserController();
$controller->handleRequest();