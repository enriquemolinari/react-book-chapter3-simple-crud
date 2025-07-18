import { alpha } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppNavbar from "./dashboard/components/AppNavbar";
import Header from "./dashboard/components/Header";
import SideMenu from "./dashboard/components/SideMenu";
import AppTheme from "./dashboard/shared-theme/AppTheme";

export default function Layout(props) {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <SideMenu>
          <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
            {props.left}
          </Stack>
        </SideMenu>
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: "auto",
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: "center",
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <main>{props.children}</main>
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
