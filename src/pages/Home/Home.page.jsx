import React, { useContext, useRef } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

import './Home.styles.css';
import { VideosLayout } from '../../components/VideosLayout/VideosLayout.component';
import { useFetch } from '../../utils/hooks/useFetch';
import { YoutubeService } from '../../utils/YoutubeService';
import { DEVENV } from '../../config';
import { VideosContext } from '../../providers/Videos/Videos.provider';

function HomePage() {
  const { search } = useContext(VideosContext);
  const sectionRef = useRef(null);
  const service = DEVENV ? YoutubeService.devSearch : YoutubeService.search;
  const { data, loading } = useFetch(service, search);
  return (
    <>
    <section className="homepage" ref={sectionRef}>
      {
        loading ? 
          <LinearProgress color="primary"/>
        : 
          <VideosLayout videos={data} direction={"row"}/> 
      }
    </section>
    </>
  );
}
export default HomePage;
