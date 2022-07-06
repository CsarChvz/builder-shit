import Link from 'next/link';

// Material UI

import { Toolbar, Grid } from '@mui/material';
import styleToolbar from './SharedStyles';

function Header() {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justifyContent="space-around" align="center">
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <Link href="/login">
              <a style={{ margin: '0px 20px 0px auto' }}>Log in</a>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}

export default Header;
