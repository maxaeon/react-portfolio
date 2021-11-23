import React from "react";
import Nav from "../Navigation";

function Header(props) {
  // const [categories] = useState([
  //   { name: "About me" },
  //   { name: "Porfolio" },
  //   {
  //     name: "Contact",
  //   },
  //   {
  //     name: "Resume",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <header>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      <h2>
        <a href="/portfolio/" style={{ fontSize: "50px", margin: "20px" }}>
          Max Aeon Parks
        </a>
      </h2>
      <Nav categories= {props.categories}
            page={props.page}
            setPage={props.setPage}/>
    </header>
  );
}

export default Header;
