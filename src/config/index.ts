export const particlesStyle = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0
};

export const particlesCfgMobile = {
  particles: {
    color: {
      value: '#FFFFFF',
    },
    line_linked: {
      color: '#FFFFFF',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 20,
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: '#000000',
        width: 0,
      },
      type: 'circle',
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 3,
    },
  },
  retina_detected: true,
};

export const particlesCfgDesktop = {
  particles: {
    color: {
      value: '#FFFFFF',
    },
    line_linked: {
      color: '#FFFFFF',
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
      bounce: false,
      direction: 'none',
      enable: true,
      out_mode: 'out',
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 120,
    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 0.1,
        speed: 1,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      polygon: {
        nb_sides: 5,
      },
      stroke: {
        color: '#000000',
        width: 0,
      },
      type: 'circle',
    },
    size: {
      anim: {
        enable: false,
        size_min: 0.1,
        speed: 40,
        sync: false,
      },
      random: true,
      value: 3,
    },
  },
  retina_detected: true,
};