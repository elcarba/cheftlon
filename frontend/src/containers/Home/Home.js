import React from 'react';
import Layout from "../../components/Layout/Layout";
import Loader from "../../components/Loader/Loader";

export default class Home extends React.Component {
    render() {
        return (
            <>
            <Loader/>
                <Layout>
                    <div>Content</div>
                </Layout>
            </>
        )
    };
}