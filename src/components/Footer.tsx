import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Ч</span>
              </div>
              <span className="text-xl font-bold">ЧайМастер</span>
            </div>
            <p className="text-gray-400">
              Премиальные чаи со всего мира для истинных ценителей
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Главная
              </Link>
              <Link
                to="/catalog"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Каталог
              </Link>
              <Link
                to="/promotions"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Акции
              </Link>
              <Link
                to="/delivery"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Доставка
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p>+7 (495) 123-45-67</p>
              <p>info@chaimaster.ru</p>
              <p>Москва, ул. Чайная, 15</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Соц.сети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ЧайМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
