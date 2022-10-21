---
sidebar_position: 1
---

# Overall Strategy


<img src="/img/scheme.png" alt="drawing" width="800"/>

The simulation of our robotic platform is addressed using two different environments, namely [CoppeliaSim](https://www.coppeliarobotics.com/), and [Isaac Sim](https://developer.nvidia.com/isaac-sim). The former one is mainly used to define geometric primitives, useful to prevent (self)-collisions by means of the VFIs framework. The latter implements a digital twin, and it is used to train operators before using the real platform. Both environments run on the Windows computer, which is equipped with a Intel i9-12900K with 64GB RAM and a GPU Nvidia RTX A6000. 