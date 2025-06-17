import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <FeaturedProducts />
          <Categories />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
