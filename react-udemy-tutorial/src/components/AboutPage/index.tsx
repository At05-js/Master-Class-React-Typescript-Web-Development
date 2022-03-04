import React from 'react';
import UserDetails from '../UserDetails';
import { AboutPageProps } from './interface';

class AboutPage extends React.Component<AboutPageProps> {
    render() {
        return (
            <div>
                <h1> About Page </h1>
                <UserDetails />
            </div>
        )
    }
}

export default AboutPage;