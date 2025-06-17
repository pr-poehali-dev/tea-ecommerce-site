import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Черный чай",
    description: "Крепкий, насыщенный",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop&crop=center",
    count: "24 сорта",
  },
  {
    name: "Зеленый чай",
    description: "Легкий, освежающий",
    image:
      "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300&h=200&fit=crop&crop=center",
    count: "18 сортов",
  },
  {
    name: "Улун",
    description: "Полуферментированный",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&crop=center",
    count: "12 сортов",
  },
  {
    name: "Травяной чай",
    description: "Без кофеина",
    image:
      "https://images.unsplash.com/photo-1597318985711-dfd0bf5cd29a?w=300&h=200&fit=crop&crop=center",
    count: "15 сортов",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Категории чая
          </h2>
          <p className="text-gray-600">
            Найдите идеальный чай для каждого момента
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link to="/catalog" key={index}>
              <Card className="group cursor-pointer hover:shadow-md transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {category.description}
                  </p>
                  <span className="text-xs text-emerald-600 font-medium">
                    {category.count}
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
