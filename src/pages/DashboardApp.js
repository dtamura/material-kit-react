// React
import React from 'react';
// material
import { Box, Grid, Container, Typography, Button } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../sections/@dashboard/app';
// util
import { logger } from '../utils/logger';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const [state, setState] = React.useState({
    showResult: false,
    apiMessage: '',
    error: null
  });
  React.useEffect(() => {
    logger.info('hoge');
    logger.info('Hello', { pages: 'DashbordApp' });
    return () => {
      logger.info('Bye', { pages: 'DashboardApp' });
    };
  }, []);
  const callApi = async () => {
    try {
      const response = await fetch(`https://api.gcp.dtamura.com/users`, {
        headers: {
          Authorization: `Bearer hoge`
        }
      });

      const responseData = await response.json();
      logger.info(`OK: ${responseData}`);
      setState({
        ...state,
        showResult: true,
        apiMessage: responseData
      });
    } catch (error) {
      setState({
        ...state,
        error: error.error
      });
      logger.error(`ERROR + ${error.error}`);
    }
  };

  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          <Button variant="contained" onClick={callApi}>
            Call API
          </Button>
          <Typography variant="p">{JSON.stringify(state.apiMessage, null, 2)}</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
