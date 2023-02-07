import "./Menu.css";

interface MenuProps {
  handleClick: () => void;
}

const Menu = ({handleClick}: MenuProps) => {
  return (
    <ul className="menu">
        <li onClick={handleClick}>
            Log out
        </li>
    </ul>
  )
}

export default Menu