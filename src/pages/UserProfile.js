import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const users = useOutletContext()
  const params = useParams();
  const user = users.map(user=> user.id === parseInt(params.id))

  if(!user){
    return <h1>Loading...</h1>;
  };

  return(  
      <aside>
        <h1>{user.name}</h1>
      </aside>
  );
};

export default UserProfile;