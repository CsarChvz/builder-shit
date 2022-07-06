import Head from 'next/head';

import { Button } from '@mui/material';
// Componentes personales
function Index() {
  return (
    <div style={{ padding: '10px 45px' }}>
      <Head>
        <title>Index page</title>
        <meta name="description" content="This is the description of the Index page" />
      </Head>
      <p>Content on Index page</p>
      <Button variant="contained">MUI button</Button>
    </div>
  );
}
export default Index;
