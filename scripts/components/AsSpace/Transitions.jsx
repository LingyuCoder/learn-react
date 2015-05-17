export default {
    scaleIn: {
        'scale': {
            from: 0,
            to: 1
        }
    },
    fadeIn: {
        'opacity': {
            from: 0,
            to: 1
        }
    },
    scaleOut: {
        'scale': {
            from: 1,
            to: 1.5
        }
    },
    fadeOut: {
        'opacity': {
            from: 1,
            to: 0
        }
    },
    rotateQuarterRight: {
        'rotate': {
            from: 0,
            to: 90
        }
    },
    rotateInQuarterClockwise: {
        'rotate': {
            from: -90,
            to: 0
        }
    },
    zoomOut: {
        'scale': {
            from: 1,
            to: 0
        }
    },
    slideInBottom: {
        'translate3d': {
            from: {
                y: 700
            },
            to: {
                y: 0
            }
        }
    },
    slideOutDown: {
        'translate3d': {
            from: {
                y: 0
            },
            to: {
                y: 700
            }
        }
    },
    slideOutLeft: {
        'translate3d': {
            from: {
                x: 0
            },
            to: {
                x: -700
            }
        }
    },
    slideOutRight: {
        'translate3d': {
            from: {
                x: 0
            },
            to: {
                x: 700
            }
        }
    },
    slideInRight: {
        'translate3d': {
            from: {
                x: 700
            },
            to: {
                x: 0
            }
        }
    },
    slideOutUp: {
        'translate3d': {
            from: {
                y: 0
            },
            to: {
                y: -700
            }
        }
    },
    slideInTop: {
        'translate3d': {
            from: {
                y: -700
            },
            to: {
                y: 0
            }
        }
    },
    slideInLeft: {
        'translate3d': {
            from: {
                x: -700
            },
            to: {
                x: 0
            }
        }
    },
    slideBottomRight: {
        'translate3d': {
            from: {
                x: 0,
                y: 0
            },
            to: {
                x: 500,
                y: 500
            }
        }
    },
    rotate360: {
        'rotate': {
            from: 0,
            to: 360
        }
    },
    rotate3dOut: {
        'rotate3d': {
            from: {
                x: 0,
                y: 0,
                z: 0,
                angle: 0
            },
            to: {
                x: 1,
                y: -1,
                z: 0,
                angle: 90
            }
        }
    }
};