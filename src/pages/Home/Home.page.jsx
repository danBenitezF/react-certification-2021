import React, { useContext, useRef } from 'react';
import './Home.styles.css';
import { VideosLayout } from '../../components/VideosLayout/VideosLayout.component';
import { useFetch } from '../../utils/hooks/useFetch';
import { getEnvService } from '../../utils/hooks/getEnvService';
import { VideosContext } from '../../providers/Videos/Videos.provider';
import { LinearProgress } from '@material-ui/core';
import { Paper } from '@material-ui/core';

function HomePage() {
  const sectionRef = useRef(null);
  const { search } = useContext(VideosContext);
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
