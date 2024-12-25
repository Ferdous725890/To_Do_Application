import { useEffect, useState } from "react";
const LeftNavbar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.JSON())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <div>
      <h2 className="font-semibold">{category.length}</h2>
    </div>
  );
};
export default LeftNavbar;
