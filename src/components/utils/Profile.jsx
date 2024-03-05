import * as React from 'react';
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
import CountrySelector from './CountrySelector';

export default function Profile() {
  return (
    <Container
      component="main"
      fullWidth
      className="fixedBackgroundLight"
      style={{
        display: 'flex',
        flexDirection: 'column',
        top: '68px',
        // height: 'calc(100vh - 68px)',
      }}
    >
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
          My profile
        </Typography>
      </Box>
      <Tabs
        defaultValue={0}
        sx={{
          bgcolor: 'transparent',
        }}
      >
        <TabList
          tabFlex={1}
          size="sm"
          sx={{
            pl: { xs: 0, md: 4 },
            justifyContent: 'left',
            [`&& .${tabClasses.root}`]: {
              fontWeight: '600',
              flex: 'initial',
              color: 'text.tertiary',
              [`&.${tabClasses.selected}`]: {
                bgcolor: 'transparent',
                color: 'text.primary',
                '&::after': {
                  height: '2px',
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
            Profile
          </Tab>
          <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
            Billing
          </Tab>
        </TabList>
        <TabPanel value={0}>
          <Stack
            spacing={4}
            sx={{
              display: 'flex',
              maxWidth: '800px',
              mx: 'auto',
              px: { xs: 2, md: 6 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Card>
              <Box sx={{ mb: 1 }}>
                <Typography level="title-md">Personal info</Typography>
                <Typography level="body-sm">
                  Customize how your profile information will apper to the
                  networks.
                </Typography>
              </Box>
              <Divider />
              <Stack
                direction="row"
                spacing={3}
                sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
              >
                <Stack direction="column" spacing={1}>
                  <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
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
                      position: 'absolute',
                      zIndex: 2,
                      borderRadius: '50%',
                      left: 100,
                      top: 170,
                      boxShadow: 'sm',
                    }}
                  >
                    <EditRoundedIcon />
                  </IconButton>
                </Stack>
                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                  <Stack spacing={1}>
                    <FormLabel>Name</FormLabel>
                    <FormControl
                      sx={{
                        display: { sm: 'flex-column', md: 'flex-row' },
                        gap: 2,
                      }}
                    >
                      <Input size="sm" placeholder="First name" />
                    </FormControl>
                    <FormControl
                      sx={{
                        display: { sm: 'flex-column', md: 'flex-row' },
                        gap: 2,
                      }}
                    >
                      <Input
                        size="sm"
                        placeholder="Last name"
                        sx={{ flexGrow: 1 }}
                      />
                    </FormControl>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <FormControl>
                      <FormLabel>Role</FormLabel>
                      <Input size="sm" defaultValue="UI Developer" />
                    </FormControl>
                    <FormControl sx={{ flexGrow: 1 }}>
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
                  <div>
                    <CountrySelector />
                  </div>
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
          <b>Billing</b> tab panel
        </TabPanel>
      </Tabs>
    </Container>
  );
}