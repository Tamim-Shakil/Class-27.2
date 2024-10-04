/* eslint-disable react/prop-types */
function ProfileCard({ person, about, link }) {
  console.log(link, about);
  // console.log(person);
  let { name, userImg, email } = person;
  // let person = props.person;
  // console.log(user);
  return (
    <>
      <div className="user-card">
        <img src={userImg} alt={name} />
        <h2>Name: {name}</h2>
        <p>Details: {email}</p>
        <p>{about}</p>
        <a href={link} target="blank">
          View More
        </a>
      </div>
    </>
  );
}

export default ProfileCard;
