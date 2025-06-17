import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import Icon from "@/components/ui/icon";

const Promotions = () => {
  const { dispatch } = useCart();

  const promotions = [
    {
      id: 1,
      title: "Скидка 30% на зелёный чай",
      description: "Все сорта зелёного чая со скидкой до конца месяца",
      discount: "30%",
      originalPrice: "990₽",
      salePrice: "693₽",
      image:
        "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop",
      timeLeft: "5 дней",
      type: "discount",
    },
    {
      id: 2,
      title: "2+1 на травяные чаи",
      description: "При покупке двух упаковок третья в подарок",
      discount: "Подарок",
      originalPrice: "1470₽",
      salePrice: "980₽",
      image:
        "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?w=400&h=300&fit=crop",
      timeLeft: "10 дней",
      type: "gift",
    },
    {
      id: 3,
      title: "Чайный набор для новичков",
      description: "5 сортов чая + заварочный чайник со скидкой 40%",
      discount: "40%",
      originalPrice: "2500₽",
      salePrice: "1500₽",
      image:
        "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=300&fit=crop",
      timeLeft: "3 дня",
      type: "bundle",
    },
    {
      id: 4,
      title: "Бесплатная доставка",
      description: "При заказе от 1500₽ доставка бесплатно",
      discount: "Бесплатно",
      originalPrice: "300₽",
      salePrice: "0₽",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      timeLeft: "Постоянно",
      type: "shipping",
    },
  ];

  const handleAddToCart = (promotion: (typeof promotions)[0]) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: promotion.id,
        name: promotion.title,
        price: promotion.salePrice,
        image: promotion.image,
      },
    });
  };

  const getDiscountColor = (type: string) => {
    switch (type) {
      case "discount":
        return "bg-red-500";
      case "gift":
        return "bg-emerald-500";
      case "bundle":
        return "bg-purple-500";
      case "shipping":
        return "bg-blue-500";
      default:
        return "bg-emerald-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-800 mb-4">
            🎉 Специальные акции
          </h1>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            Лучшие предложения на премиальные чаи и аксессуары. Успейте
            воспользоваться ограниченными акциями!
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {promotions.map((promotion) => (
            <Card
              key={promotion.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={promotion.image}
                  alt={promotion.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge
                  className={`absolute top-4 left-4 ${getDiscountColor(promotion.type)} text-white font-bold px-3 py-1`}
                >
                  {promotion.discount}
                </Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-emerald-700 flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {promotion.timeLeft}
                  </span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-emerald-800 group-hover:text-emerald-600 transition-colors">
                  {promotion.title}
                </CardTitle>
                <CardDescription className="text-emerald-600">
                  {promotion.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-sm text-gray-500 line-through">
                      {promotion.originalPrice}
                    </span>
                    <div className="text-2xl font-bold text-emerald-700">
                      {promotion.salePrice}
                    </div>
                  </div>
                  <Button
                    onClick={() => handleAddToCart(promotion)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />В
                    корзину
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            🌟 Подпишитесь на рассылку
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Получайте уведомления о новых акциях, скидках и эксклюзивных
            предложениях первыми!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 rounded-lg text-emerald-800 placeholder-emerald-400 border-0 focus:ring-2 focus:ring-emerald-300"
            />
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg font-medium">
              Подписаться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
