import PizzaCard from "./components/PizzaCard";
import ProfileCard from "./components/ProfileCard";

/* eslint-disable react/prop-types */
function App() {
  // const firstName = "Rakib";
  // const lastName = "Hossain";
  const userAbout =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque, quo, id molestiae quia dolor recusandae doloremque quidem architecto sunt rerum ipsa qui totam assumenda voluptas error! Ad, nam vel?";
  const bioLink = "https://react.dev/learn/writing-markup-with-jsx";

  // const userImg = "https://i.imgur.com/yXOvdOSs.jpg";

  const person = {
    name: "Sayem",
    userImg: "https://i.imgur.com/yXOvdOSs.jpg",
    age: 24,
    email: "sayem@gmail.com",
    theme: {
      backgroundColor: "blue",
      color: "white",
    },
  };

  const menu = [
    {
      id: 1,
      name: "Pizza Mexican",
      price: 300,
      img: "/Class 29/src/assets/pizza1.jpg",
    },

    {
      id: 2,
      name: "Pizza Naga",
      price: 320,
      img: "/Class 29/src/assets/pizza1.jpg",
    },

    {
      id: 3,
      name: "Pizza V3",
      price: 400,
      img: "/Class 29/src/assets/pizza1.jpg",
    },
  ];

  // const styles = {
  //   backgroundColor: "green",
  //   border: "2px solid red",
  // };

  return (
    <>
      {/* <div className="user-card">
        <img src={userImg} alt={firstName} />
        <h2>
          Name: {firstName} {lastName}
        </h2>
        <p>Details: {userAbout}</p>
        <a target="blank" href={bioLink}>
          View About User
        </a>
      </div> */}

      {/* <div className="user-card" style={style}>
        <img src={person.userImg} alt={person.name} />
        <h2>Name: {person.name}</h2>
        <p>Details: {person.email}</p>
        <a target="blank" href={bioLink}>
          View About User
        </a>
      </div> */}
      <div className="grid grid-cols-3 gap-10">
        {menu.map((item) => (
          <PizzaCard item={item} key={item.id} />
        ))}
      </div>
      <ProfileCard person={person} link={bioLink} about={userAbout} />
    </>
  );
}

export default App;
