import './App.css';
import { Profile } from './profile/Profile';


function App() {
  const handleClick = (Name) => {
    alert('hello '+ Name)
  }
  return (

    <>
      {/* <Profile data={imageProfile}/> */}
      <Profile hazem={handleClick}  fullName="Hazem Farhati"
        bio="Gabes,Bouchemma💜💜 Club Africain⚽💗 Radi🎧💙League Of Legends" profession="Student" />
        <Profile  btnShow={false} >
          <img src="/images/imgProfile.jpg" alt="aaaaa" className='image' /></Profile>
      {/* </Profile> */}
    </>
  );
}
Profile.defaultProps = {
  fullName: 'hazem ',
  bio: 'make ur own bio',
  btnShow:true
}

export default App;
