import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const RegisterCta = () => {
  return (
    <div className="container flex justify-center py-4">
      <Button
        size="lg"
        onClick={() =>
          document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="rounded-full text-base h-14 px-8 glow font-medium"
      >
        Зарегистрироваться
        <Icon name="ArrowRight" size={18} className="ml-1" />
      </Button>
    </div>
  );
};

export default RegisterCta;
