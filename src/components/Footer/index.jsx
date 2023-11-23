import TranslateButton from "../TranslateButton";
import "./Footer.css";


const Footer = () => {
  const listItems = [
    { title: "Questions? Contact us.", path: "" },
    { title: " ", path: "" },
    { title: "FAQ", path: "" },
    { title: "Investor Relations", path: "" },
    { title: "Privacy", path: "" },
    { title: "Speed Test", path: "" },
    { title: "Netflix Lebanon", path: "" },
  ];
  const listItems2 = [
    { title: " ", path: "" },
    { title: "Help Center", path: "" },
    { title: "Jobs", path: "" },
    { title: "Cookie Preferences", path: "" },
    { title: "Legal Notices", path: "" },
  ];
  const listItems3 = [
    { title: " ", path: "" },
    { title: "Account", path: "" },
    { title: "Ways to Watch", path: "" },
    { title: "Corporate Information", path: "" },
    { title: "Only on Netflix", path: "" },
  ];
  const listItems4 = [
    { title: "Media Center", path: "" },
    { title: "Terms of Use", path: "" },
    { title: "Contact Us", path: "" },
  ];

  return (
    <div className="menu-container ">
      <div className="wrapper">
        <ul className="menu-list">
          {listItems.map((listItem, index) => (
            <li key={index}>
              <a href={listItem.path}>{listItem.title}</a>
            </li>
          ))}
          
          <div className="margin-translate"> <TranslateButton /></div>
        </ul>
        <ul className="menu-list">
          {listItems2.map((listItem2, index) => (
            <li key={index}>
              <a href={listItem2.path}>{listItem2.title}</a>
            </li>
          ))}
        </ul>
        <ul className="menu-list">
          {listItems3.map((listItem3, index) => (
            <li key={index}>
              <a href={listItem3.path}>{listItem3.title}</a>
            </li>
          ))}
        </ul>
        <ul className="menu-list">
          {listItems4.map((listItem4, index) => (
            <li key={index}>
              <a href={listItem4.path}>{listItem4.title}</a>
            </li>
          ))}
          
        </ul>
        <div className="form">
       
        </div>
      </div>
    </div>
  );
};

export default Footer;
