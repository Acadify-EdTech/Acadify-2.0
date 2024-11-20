import React from 'react';
import { Page, Navbar, Block, BlockTitle, List, ListItem, Button } from 'framework7-react';

const GetStartedPage = () => {
    return (
        <Page>
            <Block className='display-flex flex-direction-column justify-content-center align-content-center tw-h-5/6 item'>
                <p className='tw-text-7xl tw-text-center tw-mb-10 tw-font-bold tw-font-mono tw-animate-bounce'>Acadify</p>
                <Button fill round href="/login/">Get Started</Button>
            </Block>
        </Page>
    );
};

export default GetStartedPage;