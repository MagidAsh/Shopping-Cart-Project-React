import { FaListUl } from "react-icons/fa6";

import { createQueryObject } from "../helper/helper";

import { categories } from "../constants/list";

import styles from "./Sidebar.module.css";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    // console.log(category);
    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
