import './App.css';
import { Image } from './profile/Profile';
import {Profile} from './profile/Profile';


function App() {
  return (
    
    <>
     {/* <Profile data={imageProfile}/> */}
    <Profile fullName= "Hazem Farhati" 
      bio="Gabes,Bouchemma💜💜 Club Africain⚽💗 Radi🎧💙League Of Legends" profession="Student"/>
      <Image ><img src="/images/imgProfile.jpg" alt="aaaaa" className='image'/></Image>
      {/* <Profile/> */}
        </>
  );
}
Profile.defaultProps={ 
  fullName: 'hazem ',
  bio: 'make ur own bio',
}

export default App;
