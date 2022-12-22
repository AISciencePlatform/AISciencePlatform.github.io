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
          <div style={{textAlign: 'left'}}>
          Check out our paper at the 
          <a href="https://arxiv.org/abs/2210.11877" style= {{color:'#ff6fa1', fontWeight:'bold' }}> ArXiv version. </a>
          </div>
          
          <div style={{textAlign: 'left', fontSize: '12px'}}>
          <CodeBlock language="css">{MyComponentSource}</CodeBlock>
          </div>

          </details>

          <details open>
          <summary>Exhibition on IROS 2022</summary>

          <div className="video-responsive">
              <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/3JPSywPAdj4`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
          </div>

       
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
