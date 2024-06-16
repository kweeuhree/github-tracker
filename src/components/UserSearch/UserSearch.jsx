//components
import Card from '../Card/Card';


const UserSearch = ({ user }) => {

  return (
    <div className="user-search-container">
      
      <Card user={user.info} repos={user.repos} notable={user.notable} mostUsedLang={user.mostUsedLang}/>
    </div>
  );
};

export default UserSearch;
