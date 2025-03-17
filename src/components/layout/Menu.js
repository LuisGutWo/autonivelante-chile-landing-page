import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuList } from "@/src/config/menu";

export default function Menu() {
  return (
    <ul className="navigation clearfix">
      {menuList.map((item, i) => (
        <li key={i}>
          <Link
            className={`link ${usePathname === item.href ? "active" : ""}`}
            href={item.route}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
