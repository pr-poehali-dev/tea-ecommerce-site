import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">Ч</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ЧайМастер</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Каталог
            </Link>
            <Link
              to="/promotions"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Акции
            </Link>
            <Link
              to="/delivery"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Доставка
            </Link>
            <Link
              to="/contacts"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Icon name="ShoppingCart" size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
