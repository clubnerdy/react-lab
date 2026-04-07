import "@/styles/components/Nav.css";
import { navIcon } from "@/assets";
import type { NavItem } from "@/types";

const nav_items: NavItem[] = [
  { id: "Ability", label: "역량" },
  { id: "Skill", label: "기술" },
  { id: "Career", label: "경력" },
  { id: "Project", label: "프로젝트" },
  { id: "Blog", label: "블로그" },
  { id: "Book", label: "Design Book" },
];

interface NavProps {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  isScrollingRef: React.MutableRefObject<boolean>;
}

const Nav = ({ activeSection, setActiveSection, isScrollingRef }: NavProps) => {
  const onClickNavItem = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    isScrollingRef.current = true;

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
      isScrollingRef.current = false;
    }, 800);
  };

  return (
    <div className="Nav">
      <div className="container">
        <figure className="nav_icon">
          <img src={navIcon} alt="네비게이션" />
        </figure>
        <div className="nav_list">
          {nav_items.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={(e) => {
                onClickNavItem(e, id);
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
