import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 5.99,
    title: "Generic Book",
    description: "A very generic book",
  },
  {
    id: "p2",
    price: 35.99,
    title: "Glass Hammer",
    description: "Extremely durable hammer",
  },
  {
    id: "p3",
    price: 12.99,
    title: "Sky Hooks",
    description: "Hang them anywhere...",
  },
  {
    id: "p4",
    price: 4.99,
    title: "Long Weight",
    description: "Will they ever get it?",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
