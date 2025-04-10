// models/UserModel.php
<?php
class UserModel {
    private $users = [
        ['id' => 1, 'name' => 'Alice'],
        ['id' => 2, 'name' => 'Bob'],
    ];

    public function getAllUsers() {
        return $this->users;
    }

    public function addUser($name) {
        $newId = count($this->users) + 1;
        $newUser = ['id' => $newId, 'name' => $name];
        $this->users[] = $newUser;
        return $newUser;
    }
}