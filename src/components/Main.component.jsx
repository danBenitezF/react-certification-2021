import { createTheme, ThemeProvider } from '@material-ui/core'
import React, { useContext } from 'react'
import { Routes } from '../Routes/Routes.component';
import Layout from './Layout';
import Navbar from './Navbar';
import { VideosContext } from '../providers/Videos/Videos.provider';
import { Paper } from '@material-ui/core';

export const Main = () => {
    const { globalState } = useContext(VideosContext);
    const theme = createTheme({
        palette: {
        type: globalState.theme
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <Navbar/>
                <Layout>
                    <Routes/>
                </Layout>
            </Paper>
        </ThemeProvider>
    )
}
