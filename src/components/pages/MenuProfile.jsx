import React, { useState, useEffect } from 'react';
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
import CakeIcon from '@mui/icons-material/Cake';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CountrySelector from '../utils/CountrySelector';
import NavBar from '../utils/NavBar';
import '../css/App.css';
import { useUserAuth } from '../../context/UserAuthContext';
import { getUser, updateUser } from '../../context/db';

export function MenuProfile() {
  const { user } = useUserAuth();
  const theme = useTheme();
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10);
  // State variables to store form data
  const [bio, setBio] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [birthday, setBirthday] = useState('');

  async function fetchUserData() {
    try {
      const userDataPromise = getUser(user.uid);
      const userData = await userDataPromise;
      console.log('User data : ', userData);
      // Update the input fields with fetched data
      setFullName(userData.name || ''); // Set default value to empty string if userData.name is undefined
      setCountry(
        userData.country || {
          code: 'XX',
          label: 'Undefined',
          suggested: true,
        }
      ); // Set default value to France if userData.country is undefined
      setBirthday(userData.birth || ''); // Set default value to empty string if userData.birth is undefined
      setBio(userData.bio || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    fetchUserData(); // Call the function to fetch user data
  }, []); // Run effect only once on component mount

  // Function to update user data
  async function updateUserData() {
    const data = {
      name: fullName,
      country: country,
      birth: birthday,
    };
    console.log('Set Updated : ', data);
    await updateUser(user.uid, data);
    fetchUserData();
    return;
  }

  async function updateUserBio() {
    const data = {
      bio: bio,
    };
    console.log('Set Updated : ', data);
    await updateUser(user.uid, data);
    fetchUserData();
    return;
  }

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
                        src={user.photoURL}
                        srcSet={user.photoURL}
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
                          md: '-70px',
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
                    <FormLabel>Full Name</FormLabel>
                    <FormControl sx={{ display: 'flex', gap: 2 }}>
                      <Input
                        size="sm"
                        value={fullName}
                        placeholder="Full name"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Birthday</FormLabel>
                      <Input
                        size="sm"
                        type="date"
                        startDecorator={<CakeIcon />}
                        placeholder="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        slotProps={{
                          input: {
                            min: '1900-01-01',
                            max: formattedDate,
                          },
                        }}
                        sx={{ flexGrow: 1 }}
                      />
                    </FormControl>
                    <FormControl>
                      <CountrySelector
                        onChange={(country) => {
                          setCountry(country);
                        }}
                        value={country}
                      />
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
                    <Button size="sm" variant="solid" onClick={updateUserData}>
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
                    defaultValue=""
                    placeholder="Write a short introduction to be displayed on your profile"
                    onChange={(e) => setBio(e.target.value)}
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
                    <Button size="sm" variant="solid" onClick={updateUserBio}>
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
