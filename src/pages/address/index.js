import React, { Fragment } from 'react';
import { Grid } from 'semantic-ui-react'


function Addresspage() { 
    return (
        <Fragment>
            <Grid.Column className="center-layout">
                address book left
            </Grid.Column>
            <Grid.Column stretched={true} className="right-layout">'
               address book right
            </Grid.Column>
        </Fragment>
    )
}

export default Addresspage