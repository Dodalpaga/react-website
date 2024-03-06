import React from 'react';
import { CssBaseline, useTheme } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Container from '@mui/joy/Container';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import TabPanel from '@mui/joy/TabPanel';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CountrySelector from '../utils/CountrySelector';
import NavBar from '../utils/NavBar';
import '../css/App.css';

export function MenuProfile() {
  const theme = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <NavBar />
      <Container
        component="main"
        style={{
          flexGrow: 1,
          padding: theme.spacing(2),
        }}
      >
        <Box sx={{ px: { xs: 2, md: 6 } }}>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            My profile
          </Typography>
        </Box>
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <TabList
            tabFlex={1}
            size="small"
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.secondary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.main',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={0}>
              Profile
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} value={1}>
              Billing
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <Stack
              spacing={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '800px',
                margin: '0 auto',
                padding: theme.spacing(2),
              }}
            >
              <Card>
                <Box sx={{ mb: 1 }}>
                  <Typography level="title-md">Personal info</Typography>
                  <Typography level="body-sm">
                    Customize how your profile information will appear to the
                    networks.
                  </Typography>
                </Box>
                <Divider />
                <Stack
                  direction={{ xs: 'column', md: 'row' }} // Stack direction changes based on screen width
                  spacing={3}
                >
                  <Stack
                    className="profilePictureStack"
                    direction="column"
                    spacing={1}
                    sx={{
                      alignItems: 'center',
                    }}
                  >
                    <AspectRatio
                      className="profilePictureAspectRatio"
                      ratio="1"
                      maxHeight={200}
                      sx={{
                        flex: 1,
                        minWidth: 120,
                        maxWidth: 200,
                        borderRadius: '100%',
                      }}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                    <IconButton
                      aria-label="upload new picture"
                      size="sm"
                      variant="outlined"
                      color="neutral"
                      sx={{
                        bgcolor: 'white',
                        position: 'relative',
                        zIndex: 2,
                        borderRadius: '50%',
                        left: {
                          md: '40px',
                          xs: '40px',
                        },
                        top: {
                          md: '-180px',
                          xs: '-40px',
                        },
                        boxShadow: 'sm',
                      }}
                    >
                      <EditRoundedIcon />
                    </IconButton>
                  </Stack>
                  <Stack
                    direction="column"
                    spacing={1}
                    sx={{ display: 'flex', my: 1, width: '100%' }}
                  >
                    <Box>
                      <Stack direction="column" spacing={1} flex={1}>
                        <FormLabel>Name</FormLabel>
                        <FormControl sx={{ display: 'flex', gap: 2 }}>
                          <Input size="sm" placeholder="First name" />
                        </FormControl>
                        <FormControl sx={{ display: 'flex', gap: 2 }}>
                          <Input
                            size="sm"
                            placeholder="Last name"
                            sx={{ flexGrow: 1 }}
                          />
                        </FormControl>
                      </Stack>
                      <Stack direction="column" spacing={2} flex={1}>
                        <FormControl>
                          <FormLabel>Role</FormLabel>
                          <Input size="sm" defaultValue="UI Developer" />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Email</FormLabel>
                          <Input
                            size="sm"
                            type="email"
                            startDecorator={<EmailRoundedIcon />}
                            placeholder="email"
                            defaultValue="siriwatk@test.com"
                            sx={{ flexGrow: 1 }}
                          />
                        </FormControl>
                      </Stack>
                    </Box>
                    <FormControl>
                      <CountrySelector />
                    </FormControl>
                  </Stack>
                </Stack>
                <CardOverflow
                  sx={{ borderTop: '1px solid', borderColor: 'divider' }}
                >
                  <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                    <Button size="sm" variant="outlined" color="neutral">
                      Cancel
                    </Button>
                    <Button size="sm" variant="solid">
                      Save
                    </Button>
                  </CardActions>
                </CardOverflow>
              </Card>
              <Card>
                <Box sx={{ mb: 1 }}>
                  <Typography level="title-md">Bio</Typography>
                  <Typography level="body-sm">
                    Write a short introduction to be displayed on your profile
                  </Typography>
                </Box>
                <Stack spacing={2} sx={{ my: 1 }}>
                  <Textarea
                    size="sm"
                    minRows={4}
                    sx={{ mt: 1.5 }}
                    defaultValue="I'm a software developer based in Bangkok, Thailand. My goal is to solve UI problems with neat CSS without using too much JavaScript."
                  />
                  <FormHelperText sx={{ mt: 0.75, fontSize: 'xs' }}>
                    275 characters left
                  </FormHelperText>
                </Stack>
                <CardOverflow
                  sx={{ borderTop: '1px solid', borderColor: 'divider' }}
                >
                  <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                    <Button size="sm" variant="outlined" color="neutral">
                      Cancel
                    </Button>
                    <Button size="sm" variant="solid">
                      Save
                    </Button>
                  </CardActions>
                </CardOverflow>
              </Card>
            </Stack>
          </TabPanel>
          <TabPanel value={1}>
            <Typography variant="h2" gutterBottom>
              Billing
            </Typography>
            {/* Billing content */}
          </TabPanel>
        </Tabs>
      </Container>
    </div>
  );
}
