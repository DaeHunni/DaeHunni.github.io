// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "papers-distributed-learning-algorithms-and-lossless-convex-relaxation-for-economic-dispatch-with-transmission-losses-and-capacity-limits",
          title: 'Distributed Learning Algorithms and Lossless Convex Relaxation for Economic Dispatch with Transmission Losses...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2019-kim-distributed-learning/";
            },},{id: "papers-optimization-and-convexity-of-log-det-i-plus-kx-1",
          title: 'Optimization and Convexity of log det(I plus KX-1)',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2019-kim-optimization-convexity/";
            },},{id: "papers-dynamic-programming-for-scalable-just-in-time-economic-dispatch-with-non-convex-constraints-and-anytime-participation",
          title: 'Dynamic programming for scalable just-in-time economic dispatch with non-convex constraints and anytime participation...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2020-kim-dynamic-programming/";
            },},{id: "papers-economic-nonlinear-predictive-control-for-real-time-optimal-energy-management-of-parallel-hybrid-electric-vehicles",
          title: 'Economic Nonlinear Predictive Control for Real-Time Optimal Energy Management of Parallel Hybrid Electric...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2020-kim-economic-npc/";
            },},{id: "papers-variational-inequality-and-distributed-learning-for-a-bidding-game-in-electricity-supply-markets",
          title: 'Variational Inequality and Distributed Learning for a Bidding Game in Electricity Supply Markets...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2020-kim-variational-inequality/";
            },},{id: "papers-data-driven-decentralized-lq-optimal-control-for-multi-zone-building-hvac-systems",
          title: 'Data-Driven Decentralized LQ Optimal Control for Multi-zone Building HVAC Systems',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2021-kim-decentralized-lq/";
            },},{id: "papers-distributed-moving-horizon-estimation-via-operator-splitting-for-automated-robust-power-system-state-estimation",
          title: 'Distributed Moving Horizon Estimation via Operator Splitting for Automated Robust Power System State...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2021-kim-distributed-mhe/";
            },},{id: "papers-parameterized-energy-optimal-regenerative-braking-strategy-for-connected-and-autonomous-electrified-vehicles-a-real-time-dynamic-programming-approach",
          title: 'Parameterized Energy-Optimal Regenerative Braking Strategy for Connected and Autonomous Electrified Vehicles: A Real-Time...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2021-kim-parameterized-braking/";
            },},{id: "papers-gaussian-process-approximate-dynamic-programming-for-energy-optimal-supervisory-control-of-parallel-hybrid-electric-vehicles",
          title: 'Gaussian Process Approximate Dynamic Programming for Energy-Optimal Supervisory Control of Parallel Hybrid Electric...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2022-bae-gaussian-process/";
            },},{id: "papers-service-oriented-real-time-energy-optimal-regenerative-braking-strategy-for-connected-and-autonomous-electrified-vehicles",
          title: 'Service-Oriented Real-Time Energy-Optimal Regenerative Braking Strategy for Connected and Autonomous Electrified Vehicles',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2022-kim-service-oriented/";
            },},{id: "papers-a-fast-correspondence-matching-for-iterative-closest-point-algorithm",
          title: 'A Fast Correspondence Matching for Iterative Closest Point Algorithm',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2022-shin-fast-correspondence/";
            },},{id: "papers-model-predictive-control-for-speed-and-charge-planning-of-electric-vehicles-in-minimizing-trip-time-and-energy-consumption",
          title: 'Model Predictive Control for Speed and Charge Planning of Electric Vehicles in Minimizing...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2023-kim-speed-charge-planning/";
            },},{id: "papers-vision-based-markerless-robot-to-robot-relative-pose-estimation-using-rgb-d-data",
          title: 'Vision-based Markerless Robot-to-robot Relative Pose Estimation Using RGB-D Data',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2023-kim-vision-based-pose/";
            },},{id: "papers-model-predictive-control-for-energy-efficient-yaw-stabilizing-torque-vectoring-in-electric-vehicles-with-four-in-wheel-motors",
          title: 'Model Predictive Control for Energy-Efficient Yaw-Stabilizing Torque Vectoring in Electric Vehicles With Four...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2023-kim-yaw-stabilizing/";
            },},{id: "papers-battery-state-of-charge-estimation-using-data-driven-gaussian-process-kalman-filters",
          title: 'Battery state-of-charge estimation using data-driven Gaussian process Kalman filters',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2023-lee-battery-soc/";
            },},{id: "papers-outlier-robust-extended-kalman-filter-for-state-of-charge-estimation-of-lithium-ion-batteries",
          title: 'Outlier-Robust Extended Kalman Filter for State-of-Charge Estimation of Lithium-Ion Batteries',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2023-lee-outlier-robust-ekf/";
            },},{id: "papers-recent-advances-in-path-integral-control-for-trajectory-optimization-an-overview-in-theoretical-and-algorithmic-perspectives",
          title: 'Recent advances in path integral control for trajectory optimization: An overview in theoretical...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2024-kazim-path-integral/";
            },},{id: "papers-visual-navigation-in-unstructured-environments-and-the-development-of-a-multi-purpose-mobile-robot-platform",
          title: 'Visual Navigation in Unstructured Environments and the Development of a Multi-purpose Mobile Robot...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2024-sim-visual-navigation/";
            },},{id: "papers-mppi-ipddp-a-hybrid-method-of-collision-free-smooth-trajectory-generation-for-autonomous-robots",
          title: 'MPPI-IPDDP: A Hybrid Method of Collision-Free Smooth Trajectory Generation for Autonomous Robots',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-kim-mppi-ipddp/";
            },},{id: "papers-uwb-imu-sensor-fusion-for-6d-pose-estimation-an-experimental-comparison-of-tightly-and-loosely-coupled-kalman-filtering-methods",
          title: 'UWB/IMU Sensor Fusion for 6D Pose Estimation: An Experimental Comparison of Tightly and...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-kim-uwb-imu/";
            },},{id: "papers-satellite-relative-pose-estimation-via-transfer-learning-and-environment-adaptive-conditional-features",
          title: 'Satellite Relative Pose Estimation via Transfer Learning and Environment-adaptive Conditional Features',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-nam-satellite-pose/";
            },},{id: "papers-lpv-mpc-for-lateral-stability-enhancement-of-four-wheel-steering-vehicles-with-real-time-embedded-pils-validation",
          title: 'LPV-MPC for Lateral Stability Enhancement of Four-wheel Steering Vehicles With Real-time Embedded PiLS...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-park-lpv-mpc/";
            },},{id: "papers-multi-robot-relative-pose-estimation-in-se-2-with-observability-analysis-a-comparison-of-extended-kalman-filtering-and-robust-pose-graph-optimization",
          title: 'Multi-Robot Relative Pose Estimation in SE(2) With Observability Analysis: A Comparison of Extended...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-shin-multi-robot/";
            },},{id: "papers-supervised-learning-for-real-time-model-predictive-control-leveraging-multi-parametric-mixed-integer-quadratic-programming",
          title: 'Supervised Learning for Real-time Model Predictive Control Leveraging Multi-parametric Mixed Integer Quadratic Programming...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-yoo-supervised-learning/";
            },},{id: "projects-project-autonomous-navigation",
          title: 'Project Autonomous Navigation',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-autonomous-navigation/";
            },},{id: "projects-project-collaborative-robot",
          title: 'Project Collaborative Robot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-collaborative-robot/";
            },},{id: "projects-project-slam-robot",
          title: 'Project Slam Robot',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-slam-robot/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
