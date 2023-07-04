import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li
          className={`${
            isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
          } menu-item-has-children`}
        >
          <Link href="/">
            <span className="mr-10">Home</span>
          </Link>
        </li>
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/hotel/hotel-list-v5">
            <span className="mr-10">Destination</span>
          </Link>
        </li>

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/hotel/hotel-single-v1/5">
            <span className="mr-10">Locations</span>
          </Link>
        </li>

        <li className="menu-item-has-children -has-mega-menu">
          <Link href="/blog/blog-details/1">
            <span className="mr-10">Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
