<!DOCTYPE html>
<html>
<body>
<?php
class Admin {
    public $email;
    public $senha;

    function __construct($email, $senha) {
        $this->email = $email;
        $this->senha = $senha;
    }
}

$adm = new Admin('Administrador', 'adm123');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $user = $_POST['email'];
    $password = $_POST['senha'];

    if ($user === $adm->email && $password === $adm->senha) {
        header('Location: ../pages/admin/dashboard.html');
        exit;
    } else {
        echo 'Email ou senha incorretos';
    }
}
?>
</body>
</html>