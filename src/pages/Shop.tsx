import ShopHeader from '@/components/shop/ShopHeader';
import ShopHero from '@/components/shop/ShopHero';
import ShopCatalog from '@/components/shop/ShopCatalog';
import ShopHow from '@/components/shop/ShopHow';
import ShopReviews from '@/components/shop/ShopReviews';
import ShopFaqCta from '@/components/shop/ShopFaqCta';
import './Shop.css';

const Shop = () => {
  return (
    <div className="shop-page">
      <ShopHeader />
      <main>
        <ShopHero />
        <ShopCatalog />
        <ShopHow />
        <ShopReviews />
        <ShopFaqCta />
      </main>
    </div>
  );
};

export default Shop;
