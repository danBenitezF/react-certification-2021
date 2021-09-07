import React, { useRef } from 'react';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import { VideosLayout } from '../../components/VideosLayout/VideosLayout.component';
import { useFetch } from '../../utils/hooks/useFetch';

function HomePage() {
  const sectionRef = useRef(null);
  const videos = useFetch();

  return (
    <section className="homepage" ref={sectionRef}>
      <VideosLayout videos={videos}/>
    </section>
  );
}
export default HomePage;
