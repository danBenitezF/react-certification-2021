import React, { useRef } from 'react';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import { VideosLayout } from '../../components/VideosLayout/VideosLayout.component';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <section className="homepage" ref={sectionRef}>
      <VideosLayout/>
    </section>
  );
}

// {authenticated ? (
//   <>
//     <h2>Good to have you back</h2>
//     <span>
//       <Link to="/" onClick={deAuthenticate}>
//         ← logout
//       </Link>
//       <span className="separator" />
//       <Link to="/secret">show me something cool →</Link>
//     </span>
//   </>
// ) : (
//   <Link to="/login">let me in →</Link>
// )}
export default HomePage;
