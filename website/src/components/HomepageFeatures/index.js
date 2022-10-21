import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real Platform',
    Svg: require('@site/static/img/real_platform.svg').default,
    description: (
      <>
        The robotic system is composed of four branches able to independently rotate about a circular rail.
        Furthermore, each branch is composed of a serial manipulator mounted on a linear actuator that moves 
        back-and-forth in the direction of the center of the rail.
      </>
    ),
  },
  {
    title: 'Easy VFI Descriptions',
    Svg: require('@site/static/img/CoppeliaSim.svg').default,
    description: (
      <>
        Definitions of (self) collision-avoidance constraints by means of the 
        <a href="https://ieeexplore.ieee.org/document/8742769" style= {{color:'#277148', fontWeight:'bold' }}> VFI framework. </a> 
        The constraints are implemented using geometric primitives on <a href="https://www.coppeliarobotics.com/" style= {{color:'#277148', fontWeight:'bold' }}>CoppeliaSim </a> 
        and a configuration file.  
      </>
    ),
  },
  {
    title: 'Realistic Simulations',
    Svg: require('@site/static/img/isaacsim.svg').default,
    description: (
      <>
        Digital twins implemented on <a href="https://developer.nvidia.com/isaac-sim" style= {{color:'#277148', fontWeight:'bold' }}>Nvidia Isaac Sim</a>. 
         Before using the real platform, operators can be trained using simulation examples of peg transfer tasks.
      </>
    ),
  },
  {
    title: 'Powered by Open Software Technologies',
    Svg: require('@site/static/img/undraw_docusaurus_dq.svg').default,
    description: (
      <>
        Available low level controllers on Python and C++ (including ROS packages) 
        for the robots, sensors, actuators, and grippers. 
        The robot modeling and control is implemented using the 
        <a href="https://dqrobotics.github.io/" style= {{color:'#277148', fontWeight:'bold' }}> DQ Robotics</a> library.
        
      </>
    ),
  },
  {
    title: 'Long-Term Goal',
    Svg: require('@site/static/img/moonshot11.svg').default,
    description: (
      <>
        Our long-term goal, part of the ambitious Moonshot Research & Development Program of the
        <a href="https://www8.cao.go.jp/cstp/english/moonshot/top.html" style= {{color:'#277148', fontWeight:'bold' }}> Cabinet Office of Japan </a> is,
        by 2050 and beyond, have AI-robots that autonomously learn, adapt to their environment, 
        evolve in intelligence and act alongside human beings. 
      </>
    ),
  },
  {
    title: 'About the Project',
    Svg: require('@site/static/img/logos2.svg').default,
    description: (
      <>
        This project is under development at the Harada lab at the University of Tokyo 
        and was funded by JST Moonshot R&D (JPMJMS2033-09).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
