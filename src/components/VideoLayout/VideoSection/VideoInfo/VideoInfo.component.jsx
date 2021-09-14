import React, { useState  } from 'react';
import { Divider, Collapse, Button, CardContent } from '@material-ui/core';
import { MainInfo } from './MainInfo';
export const VideoInfo = ({video}) => {
    const { title, description  } = video;
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="video-info">
            <h1 className="video-title">{title}</h1>
            <MainInfo video={video}/>
            <Divider variant="middle" />
            <div>
                {
                    !expanded && 
                    <>
                        <span className="description">{description}</span>
                        <Button onClick={handleExpandClick}>Show More</Button>
                    </>
                }
                
            </div>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <span className="full-description">
                        { description }
                    </span>
                    <Button onClick={handleExpandClick}>Show Less</Button>
                </CardContent>
            </Collapse>
        </div>
    )
}
