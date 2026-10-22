// Author: Rui Heng Yang
// Site content. Edit this file to update publications, experience, patents, and education.
// "me" is the exact author string that gets highlighted; "*" after a name marks equal contribution.
"use strict";

const SITE = {
  me: "Rui Heng Yang",

  publications: [
    {
      title: "Faster-WAM: Do World Action Models Need Deep Action Modules?",
      img: "assets/figs/faster-wam.jpg",
      authors: ["Liheng Ma*", "Rui Heng Yang*", "Amin Soleimani Abyaneh", "George Z. Xue", "Behnam Rahmati", "Mateo Clemente", "Ziwen Hu", "Anlin Chen", "Tongtong Cao", "Zhanguang Zhang", "Yingxue Zhang"],
      venue: "arXiv",
      year: 2026, type: "preprint", featured: true,
      tldr: "A world action model with a single-layer action expert that reads every layer of the video backbone through a novel docking interface. Real-time inference latency of 52 ms per action chunk (19 Hz) on an RTX 4090. Competitive with existing WAMs in success rate while completing real-robot tasks 1.1–4.5× faster.",
      links: { arXiv: "https://arxiv.org/abs/2608.02365" },
    },
    {
      title: "Benchmarking Robotic Manipulation under Physically Realistic Dynamics",
      authors: ["Zhiyuan Li", "Rui Heng Yang", "Xuan Zhao", "Amir Rasouli"],
      venue: "NeurIPS RoboWM Workshop", year: 2026, type: "workshop",
      links: { Paper: "https://robodyna.github.io/robodyna/paper/robodyna_neurips2026_workshop.pdf" },
    },
    {
      title: "How VLAs (Really) Work In Open-World Environments",
      authors: ["Amir Rasouli", "Yangzheng Wu", "Zhiyuan Li", "Rui Heng Yang", "Xuan Zhao", "Charles Eret", "Sajjad Pakdamansavoji"],
      venue: "IROS", year: 2026, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2604.21192" },
    },
    {
      title: "Do World Action Models Generalize Better than VLAs? A Robustness Study",
      authors: ["Zhanguang Zhang", "Zhiyuan Li", "Behnam Rahmati", "Rui Heng Yang", "Yintao Ma", "Amir Rasouli", "Sajjad Pakdamansavoji", "Yangzheng Wu", "Lingfeng Zhang", "Tongtong Cao", "Feng Wen", "Xinyu Wang", "Xingyue Quan", "Yingxue Zhang"],
      venue: "arXiv", year: 2026, type: "preprint",
      links: { arXiv: "https://arxiv.org/abs/2603.22078" },
    },
    {
      title: "AnyBox: Efficient Zero-Shot 9DoF Pose Estimation of Boxes for Robotic Manipulation",
      authors: ["Yintao Ma*", "Sajjad Pakdamansavoji*", "Charles Eret", "Rui Heng Yang", "Xuan Zhao", "Yingxue Zhang", "Tongtong Cao", "Amir Rasouli"],
      venue: "ECCV R6D Workshop", year: 2026, type: "workshop",
      links: { arXiv: "https://arxiv.org/abs/2511.15884" },
    },
    {
      title: "CAPE: Context-Aware Diffusion Policy Via Proximal Mode Expansion for Collision Avoidance",
      img: "assets/figs/cape.jpg",
      authors: ["Rui Heng Yang*", "Xuan Zhao*", "Leo Maxime Brunswic", "Montgomery Alban", "Mateo Clemente", "Tongtong Cao", "Jun Jin", "Amir Rasouli"],
      venue: "ICRA", year: 2026, type: "conference", featured: true,
      tldr: "A diffusion-based motion planner that avoids collisions without retraining, trained only on point-to-point trajectories collected in obstacle-free environments. At inference, it re-noises the unexecuted part of the plan into a context-aware prior and refines it with collision guidance. Improves success rate over MPD from 38% to 94% in simulation and from 0/5 to 4/5 in a cluttered real-world task. Patent filed.",
      links: { arXiv: "https://arxiv.org/abs/2511.22773" },
    },
    {
      title: "Improving Robotic Manipulation Robustness via NICE Scene Surgery",
      authors: ["Sajjad Pakdamansavoji", "Mozhgan Pourkeshavarz", "Adam Sigal", "Zhiyuan Li", "Rui Heng Yang", "Amir Rasouli"],
      venue: "ICRA", year: 2026, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2511.22777" },
    },
    {
      title: "Two-Steps Diffusion Policy for Robotic Manipulation via Genetic Denoising",
      authors: ["Mateo Clemente*", "Leo Maxime Brunswic*", "Rui Heng Yang", "Xuan Zhao", "Yasser Khalil", "Haoyu Lei", "Amir Rasouli", "Yinchuan Li"],
      venue: "NeurIPS", year: 2025, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2510.21991" },
    },
    {
      title: "RA-DP: Rapid Adaptive Diffusion Policy for Training-Free High-frequency Robotics Replanning",
      img: "assets/figs/ra-dp-system.jpg",
      authors: ["Xi Ye*", "Rui Heng Yang*", "Jun Jin", "Yinchuan Li", "Amir Rasouli"],
      venue: "IROS", year: 2025, type: "conference", featured: true,
      tldr: "A diffusion policy with training-free, high-frequency replanning: an action queue emits a replanned action at every denoising step, while guidance injects obstacle information without retraining. Raises replanning frequency on MetaWorld from 16 Hz to 82 Hz over DP3, and obstacle-avoidance success over guided DP from 15% to 63% (static) and 10% to 45% (moving). Patent filed.",
      links: { arXiv: "https://arxiv.org/abs/2503.04051" },
    },
    {
      title: "Ergodic Generative Flows",
      authors: ["Leo Maxime Brunswic", "Mateo Clemente", "Rui Heng Yang", "Adam Sigal", "Amir Rasouli", "Yinchuan Li"],
      venue: "ICML", year: 2025, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2505.03561" },
    },
    {
      title: "HIPPo: Harnessing Image-to-3D Priors for Model-free Zero-shot 6D Pose Estimation",
      authors: ["Yibo Liu*", "Zhaodong Jiang*", "Binbin Xu", "Guile Wu", "Yuan Ren", "Tongtong Cao", "Bingbing Liu", "Rui Heng Yang", "Amir Rasouli", "Jinjun Shan"],
      venue: "IEEE Robotics and Automation Letters", year: 2025, type: "journal",
      links: { arXiv: "https://arxiv.org/abs/2502.10606" },
    },
    {
      title: "Don't Get Distracted: Improving Robotic Perception Robustness via In-Context Visual Scene Editing",
      authors: ["Mozhgan Pourkeshavarz*", "Adam Sigal*", "Sajjad Pakdamansavoji", "Zhiyuan Li", "Rui Heng Yang", "Amir Rasouli"],
      venue: "CoRL Robot Data Workshop", year: 2025, type: "workshop",
      links: { OpenReview: "https://openreview.net/forum?id=PGuozSV8HC" },
    },
    {
      title: "Tensor Train Recurrent Network Language Model Prediction",
      authors: ["Alejandro Murua-Sazo", "Ramchalam Ramakrishnan", "Xinlin Li", "Rui Heng Yang", "Vahid Partovi Nia"],
      venue: "Stat", year: 2025, type: "journal",
      links: { Paper: "https://doi.org/10.1002/sta4.70116" },
    },
    {
      title: "DenseShift: Towards Accurate and Efficient Low-Bit Power-of-Two Quantization",
      authors: ["Xinlin Li", "Bang Liu", "Rui Heng Yang", "Vanessa Courville", "Chao Xing", "Vahid Partovi Nia"],
      venue: "ICCV", year: 2023, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2208.09708" },
    },
    {
      title: "Low-bit Shift Network for End-to-End Spoken Language Understanding",
      authors: ["Anderson R. Avila", "Khalil Bibi", "Rui Heng Yang", "Xinlin Li", "Chao Xing", "Xiao Chen"],
      venue: "Interspeech", year: 2022, type: "conference",
      links: { arXiv: "https://arxiv.org/abs/2207.07497" },
    },
  ],

  experience: [
    {
      role: "Researcher", org: "Noah's Ark Laboratory", dates: "Jan 2024 – Present",
      detail: "Real-time world action models for robotic manipulation and their deployment on edge devices, as well as the robustness of world action models and vision-language-action models in unseen environments. Previously, training-free guidance for diffusion policies.",
    },
    {
      role: "Research Intern", org: "Samsung AI Center", dates: "May 2023 – Dec 2023",
      detail: "Image compositing for robot learning and tactile sensing for force estimation, with Jimmy Li, Francois Hogan, Florian Shkurti, and Gregory Dudek.",
    },
    {
      role: "Research Intern", org: "Noah's Ark Laboratory", dates: "May 2020 – Aug 2022",
      detail: "Low-bit quantization for vision and speech models, with Vahid Partovi Nia.",
    },
  ],

  education: [
    {
      degree: "M.Sc. in Applied Computing (Artificial Intelligence)", school: "University of Toronto",
      dates: "2023", note: "GPA 4.0/4.0 · Lead TA, CSC110 & CSC111",
    },
    {
      degree: "B.Sc. Honours Computer Science", school: "McGill University",
      dates: "2022", note: "First Class Honours · Internship Program · GPA 3.86/4.0",
    },
  ],

  patents: [
    { title: "Methods and System for Effective Guidance Application in Fast-Generative Methods", authors: "Rui Heng Yang, Leo Maxime Brunswic, Mark Chiu, et al.", status: "Filed, 2026" },
    { title: "Dynamic Obstacle Avoidance Method for Closed-loop Embodied Manipulation", authors: "Yuhan Che, Yajun Gao, Xuan Zhao, Rui Heng Yang, Tongtong Cao", status: "Filed, 2026" },
    { title: "Efficient and Modular Flow-Matching Policy via Deconditioning", authors: "Leo Maxime Brunswic, Mateo Clemente, Rui Heng Yang, et al.", status: "Filed, 2025" },
    { title: "Predictive Failure Detection for Guided Diffusion Policy Adaptation to Uncertain Environments", authors: "Xuan Zhao, Rui Heng Yang, Sajjad Pakdamansavoji, et al.", status: "Filed, 2025" },
    { title: "Body-Aware Collision-free Motion Planning for Object Manipulation", authors: "Xuan Zhao, Rui Heng Yang, Leo Maxime Brunswic, et al.", status: "Filed, 2025" },
    { title: "Methods and System for Real-Time Guided Diffusion Policy", authors: "Rui Heng Yang, Amir Rasouli, Yinchuan Li", status: "Filed, 2025" },
  ],
};
