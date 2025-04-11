// src/components/UserList.tsx
import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = 'http://localhost/index.php'; // Ajuste para a URL do seu back-end

  // Função para buscar usuários
  const fetchUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Erro ao buscar usuários');
      const data: User[] = await response.json();
      setUsers(data);
    } catch (err) {
      setError('Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  // Função para adicionar usuário
  const addUser = async () => {
    const name = prompt('Digite o nome do usuário:');
    if (name) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name }),
        });
        if (!response.ok) throw new Error('Erro ao adicionar usuário');
        fetchUsers(); // Atualiza a lista após adicionar
      } catch (err) {
        setError('Erro ao adicionar usuário');
      }
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.id}: {user.name}</li>
        ))}
      </ul>
      <button onClick={addUser}>Adicionar Usuário</button>
    </div>
  );
};

export default UserList;