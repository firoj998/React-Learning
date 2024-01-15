import reactImage from "../../assets/react-core-concepts.png";

const reactDescription = ["Fundamental", "Crucial", "Core"];
import './Header.css'

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescription[getRandomInt(2)];
    return (
      <div>
        <header>
          <img src={reactImage} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {description} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
      </div>
    );
  }