import React from "react";
import { Button, Input, Div, P } from "../components";
import { withLayout } from "../layout/P/Layout";

function Home(): JSX.Element {
    return (
        <>
            <Div>
                <P size="xl">Get Delivered your</P>
                <P size="l">Package(s) with <br></br> Drones</P>
                <P size="m">Excellence. Simply Delivered</P>
            </Div>
            <Div>
                <Input />
            </Div>
        </>
    );
}

export default withLayout(Home);