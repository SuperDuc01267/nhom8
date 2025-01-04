import GameForm from '@/components/GameForm';

export default function Admin() {
  return (
    <div>
      <h1>Admin Panel - Manage Games</h1>
      <GameForm game={{ id: 0, name: '', price: '', image: '' }} />
    </div>
  );
}