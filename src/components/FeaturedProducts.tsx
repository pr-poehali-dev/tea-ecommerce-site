import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const products = [
  {
    id: 1,
    name: "Эрл Грей Королевский",
    description: "Классический английский чай с бергамотом",
    effects: "Бодрит, улучшает настроение",
    price: "890 ₽",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&h=300&fit=crop&crop=center",
    badge: "Бестселлер",
  },
  {
    id: 2,
    name: "Дракон Лунчин",
    description: "Нежный зеленый чай с цветочными нотами",
    effects: "Успокаивает, антиоксиданты",
    price: "1250 ₽",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
    badge: "Премиум",
  },
  {
    id: 3,
    name: "Масала Чай",
    description: "Пряный индийский чай со специями",
    effects: "Согревает, улучшает пищеварение",
    price: "720 ₽",
    image:
      "https://images.unsplash.com/photo-1571934811356-5cc5861c9d6b?w=300&h=300&fit=crop&crop=center",
    badge: "Новинка",
  },
];

const FeaturedProducts = () => {
  const { dispatch } = useCart();

  const handleAddToCart = (product: (typeof products)[0]) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Рекомендуемые чаи
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Тщательно отобранные сорта от наших чайных мастеров
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-emerald-600">
                  {product.badge}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-sm text-emerald-600 font-medium">
                    🍃 {product.effects}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => handleAddToCart(product)}
                    >
                      В корзину
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
