import React, { useRef } from 'react';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import { VideosLayout } from '../../components/VideosLayout/VideosLayout.component';
import { useFetch } from '../../utils/hooks/useFetch';
import { VideosContext } from '../../providers/Videos/Videos.provider';
import { getEnvService } from '../../utils/hooks/getEnvService';
import { Paper } from '@material-ui/core';

function HomePage() {
  const sectionRef = useRef(null);
  const videos = useFetch();

  return (
    <section className="homepage" ref={sectionRef}>
      <VideosLayout videos={videos}/>
    </section>
  const service = getEnvService();
  const { data, loading } = useFetch(service, search);
  return (
    <>
    <Paper>
      <section className="homepage" ref={sectionRef}>
        {
          loading ? 
            <LinearProgress color="primary"/>
          : 
            <VideosLayout videos={data} direction={"row"}/> 
        }
      </section>
    </Paper>
    </>
  );
}
export default HomePage;
