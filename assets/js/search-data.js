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
      },{id: "papers-über-die-von-der-molekularkinetischen-theorie-der-wärme-geforderte-bewegung-von-in-ruhenden-flüssigkeiten-suspendierten-teilchen",
          title: 'Über die von der molekularkinetischen Theorie der Wärme geforderte Bewegung von in ruhenden...',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1905-einstein-brownian/";
            },},{id: "papers-über-einen-die-erzeugung-und-verwandlung-des-lichtes-betreffenden-heuristischen-gesichtspunkt",
          title: 'Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1905-einstein-photoelectric/";
            },},{id: "papers-relativity-the-special-and-general-theory",
          title: 'Relativity: the Special and General Theory',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1920-einstein-relativity/";
            },},{id: "papers-can-quantum-mechanical-description-of-physical-reality-be-considered-complete",
          title: 'Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1935-einstein-epr/";
            },},{id: "papers-the-meaning-of-relativity",
          title: 'The meaning of relativity',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1950-einstein-meaning/";
            },},{id: "papers-investigations-on-the-theory-of-the-brownian-movement",
          title: 'Investigations on the Theory of the Brownian Movement',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1956-einstein-investigations/";
            },},{id: "papers-letters-on-wave-mechanics",
          title: 'Letters on wave mechanics',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/1967-przibram-letters/";
            },},{id: "papers-deep-reinforcement-learning-for-autonomous-parking-in-complex-environments",
          title: 'Deep Reinforcement Learning for Autonomous Parking in Complex Environments',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2024-kim-autonomous-parking/";
            },},{id: "papers-whole-body-control-framework-for-humanoid-robots-using-model-predictive-control",
          title: 'Whole-Body Control Framework for Humanoid Robots Using Model Predictive Control',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-choi-humanoid-control/";
            },},{id: "papers-multi-modal-perception-framework-for-mobile-robots-in-dynamic-environments",
          title: 'Multi-Modal Perception Framework for Mobile Robots in Dynamic Environments',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-kim-robot-perception/";
            },},{id: "papers-autonomous-fleet-management-for-multi-vehicle-systems-using-edge-cloud-coordination",
          title: 'Autonomous Fleet Management for Multi-Vehicle Systems Using Edge-Cloud Coordination',
          description: "",
          section: "Papers",handler: () => {
              window.location.href = "/papers/2025-park-autonomous-fleet/";
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
