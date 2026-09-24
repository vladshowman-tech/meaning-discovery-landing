import Icon from '@/components/ui/icon';

const InDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center px-6">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary">
          <Icon name="Hammer" size={28} />
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-semibold">Страница в разработке</h1>
        <p className="mt-3 text-muted-foreground">Скоро здесь появится контент. Загляните позже.</p>
      </div>
    </div>
  );
};

export default InDevelopment;
