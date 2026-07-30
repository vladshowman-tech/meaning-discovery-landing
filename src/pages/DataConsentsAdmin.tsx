import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const CONSENT_API_URL = 'https://functions.poehali.dev/557d258a-7900-41d1-91a7-3ef6ecbf0e84';

interface ConsentItem {
  id: number;
  email: string;
  fullName: string;
  city: string;
  phone: string;
  createdAt: string;
}

const DataConsentsAdmin = () => {
  const [items, setItems] = useState<ConsentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(CONSENT_API_URL)
      .then((res) => res.json())
      .then((data) => setItems(data.items || []))
      .catch(() => setError('Не удалось загрузить данные'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-10">
      <div className="container px-4">
        <h1 className="font-display text-2xl md:text-3xl font-semibold mb-6">
          Собранные согласия на обработку персональных данных
        </h1>

        {loading && <p className="text-muted-foreground">Загрузка...</p>}
        {error && <p className="text-destructive">{error}</p>}

        {!loading && !error && (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Имя Фамилия</TableHead>
                  <TableHead>E-mail</TableHead>
                  <TableHead>Город</TableHead>
                  <TableHead>Телефон</TableHead>
                  <TableHead>Дата</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.city}</TableCell>
                    <TableCell>{item.phone}</TableCell>
                    <TableCell>{new Date(item.createdAt).toLocaleString('ru-RU')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {items.length === 0 && (
              <p className="text-muted-foreground mt-4">Данных пока нет.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataConsentsAdmin;
