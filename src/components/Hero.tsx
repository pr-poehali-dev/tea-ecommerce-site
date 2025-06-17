import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Изысканные
                <span className="text-emerald-600 block">чаи мира</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Откройте для себя коллекцию премиальных чаев из лучших
                плантаций. Каждый глоток — путешествие в мир вкуса и аромата.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                <Link to="/catalog">Посмотреть каталог</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-white rounded-full shadow-2xl p-8 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop&crop=center"
                alt="Чайная церемония"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 right-4 w-16 h-16 bg-yellow-100 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
