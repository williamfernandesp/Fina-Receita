/**************************\
  Micromodal Example Snippet
  latest: https://cdn.jsdelivr.net/npm/micromodal@0.4.2/dist/micromodal.min.js
\**************************/

/**************************\
  Important: Micromodal 0.4.2 is currently not IE11 compatible. A temp
  replacement could be https://codepen.io/brifiction/pen/GRgoLgQ. Or revert
  back to https://cdn.jsdelivr.net/npm/micromodal@0.3.2/dist/micromodal.min.js
\**************************/

MicroModal.init({
    // onShow: modal => console.info(`${modal.id} is shown`), // [1]
    // onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-micromodal-trigger', // [3]
    closeTrigger: 'data-custom-close', // [4]
    disableScroll: true, // [5]
    disableFocus: false, // [6]
    awaitOpenAnimation: false, // [7]
    awaitCloseAnimation: false, // [8]
    debugMode: true // [9]
  });