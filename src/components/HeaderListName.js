import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Location } from '@reach/router';

function HeaderListName(props) {
  return (
    <Location>
      {({ location }) => {
        console.log(location);
        return (
          <Typography color="inherit" component="h2" variant="h5">
            Tasks
          </Typography>
        );
      }}
    </Location>
  );
}

export default HeaderListName;
