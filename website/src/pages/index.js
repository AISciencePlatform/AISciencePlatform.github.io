import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';


import FeatureDisplay from './citation.mdx';
import MDXContent from '@theme/MDXContent';

import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./citation.mdx';




function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <h2 style= {{color:'#ffbe00ff'}}>{siteConfig.tagline}</h2> 
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started
          </Link>
        </div>  
        
          <details open>
          <summary>How to cite us</summary>
          <div style={{textAlign: 'left', fontSize: '10px'}}>
          <CodeBlock language="css">{MyComponentSource}</CodeBlock>
          </div>
          </details>

          <details open>
          <summary>Exhibition on IROS 2022</summary>

          <iframe width="750" height="420"  src="https://www.youtube.com/embed/3JPSywPAdj4" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>

       
          </details>

         </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
