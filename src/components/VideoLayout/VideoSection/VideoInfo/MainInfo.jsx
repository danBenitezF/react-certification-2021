import React, { useContext } from 'react';
import { Grid, Tooltip, Icon, IconButton } from '@material-ui/core';
import { datePipe } from '../../../../utils/fns';
import { VideosContext } from '../../../../providers/Videos/Videos.provider';

export const MainInfo = ({video}) => {
    const { publishedAt, statistics } = video;
    const { gridLayout, setGridLayout } = useContext(VideosContext);
    const { theater } = gridLayout;
    const handleTheaterMode = () => {
        setGridLayout({
            direction: theater ? 'column' : 'row',
            videoSection: theater ? 9 : 12,
            relatedSection: theater ? 3 : 12,
            theater: !theater,
        });
    };
    return (
        <div className="main-info">
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item xs>
                    <div className="subtitle">
                        <span>{statistics ? (statistics.viewCount + " views | ") : ''}</span>
                        <span>
                            { datePipe(publishedAt) }
                        </span>
                    </div>
                </Grid>
                <Grid item xs>
                    <Tooltip title="Theater Mode">
                        <IconButton aria-label="Theater Mode" onClick={handleTheaterMode}>
                            <Icon>crop_7_5</Icon>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Favorite">
                        <IconButton aria-label="Favorite">
                            <Icon>favorite_border</Icon>
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Grid>
            </div>
    )
}
