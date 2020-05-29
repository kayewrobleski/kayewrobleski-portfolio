import React from 'react';

import Page from './Page'
import PageHeader from '../components/common/PageHeader'
import AboutMeSection from '../components/pages/about/AboutMeSection'
import SkillsSection from '../components/pages/about/SkillsSection'

const AboutPage = () => <Page>
    <PageHeader>About Me</PageHeader>
    <AboutMeSection />
    <SkillsSection />
</Page>

export default AboutPage