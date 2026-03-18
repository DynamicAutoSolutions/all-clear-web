import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, Box } from '@mui/material'

// image 431 x 107
export default function Home() {
    return (
        <main>
            <AppBar position="static" color="transparent" elevation={0} sx={{ py: 2 }}>
                <Toolbar
                    sx={{
                        maxWidth: '1600px',
                        mx: 'auto',
                        width: '90%',
                        borderRadius: '50px',
                        px: 4,
                        py: 1,
                        background: 'rgba(255,255,255,0.85)',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                        <Button size="large" sx={{ mx: 1, color: 'black' }}>
                            Services
                        </Button>
                        <Button size="large" sx={{ mx: 1, color: 'black' }}>
                            About
                        </Button>
                        <Button size="large" sx={{ mx: 1, color: 'black' }}>
                            Careers
                        </Button>
                        <Button size="large" sx={{ mx: 1, color: 'black' }}>
                            Resources
                        </Button>
                        <Button size="large" sx={{ mx: 1, color: 'black' }}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            <Container>
                <Grid container spacing={4}>
                    <Grid size={6}>
                        <Typography variant="h3" gutterBottom>
                            All Clear Diagnostics and Calibration
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Your premier mobile sublet repair vendor providing same-day/next-day services.
                        </Typography>
                        <Button variant="contained" size="large" sx={{ mt: 2 }}>
                            Schedule a Service
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h4" sx={{ mt: 8, mb: 4 }}>
                    Our Services
                </Typography>
                <Grid container spacing={3}>
                    {['ADAS Calibrations', 'Mechanical', 'Diagnostic', 'Programming'].map((service) => (
                        <Grid size={3} key={service}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {service}
                                    </Typography>
                                    <Typography variant="body2">
                                        High‑quality {service.toLowerCase()} services guaranteed.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
    )
}
