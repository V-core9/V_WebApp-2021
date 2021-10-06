
const devMode = true;
const logMsg = (message = null) => {
  if (message !== null) {
    if (devMode) {
      console.log(message);
    } else {
      //not in dev mode---should just keep it in memory somewhere without a print.
    }
    return true;
  } else {
    if (devMode) console.warn("$message has no content - Nothing to log.")
    return false;
  }
}
// DRAG/RESIZE/SNAP JS
var appObj = {
  "debug": devMode,
};

function startDraggableJS() {

  logMsg('Entering -> startDraggableJS()');
  //Define some variables
  appObj.drag = {};

  //Add event listeners
  addOnStartEventListeners();

  logMsg('Leaving -> startDraggableJS()');
}

function addOnStartEventListeners() {

  logMsg('Entering -> addOnStartEventListeners()');

  window.addEventListener("mousedown", windowMouseDown);
  window.addEventListener("mousemove", windowMouseMove);
  window.addEventListener("mouseup", windowMouseUp);

  logMsg('Leaving -> addOnStartEventListeners()');
}

function removeOnEndEventListeners() {

  logMsg('Entering -> removeOnEndEventListeners()');

  window.removeEventListener("onmousedown", windowMouseDown());
  window.removeEventListener("onmousemove", windowMouseMove());
  window.removeEventListener("onmouseup", windowMouseUp());

  logMsg('Leaving -> removeOnEndEventListeners()');
}

function windowMouseDown(e) {

  logMsg('Entering -> windowMouseDown()');

  if (e.target.closest('.dragHandleJS') && (e.target.tagName != 'BUTTON')) {

    logMsg('Click on dragHandleJS');

    appObj.dragContainer = e.target.closest('.draggableJS');

    if (appObj.dragContainer != null) {
      logMsg('appObj.dragContainer not empty');
      console.log('appObj.dragContainer not empty');
    }
    if (appObj.dragContainer.classList.contains('snappedToRight') || appObj.dragContainer.classList.contains('snappedToLeft')) {
      appObj.dragContainer.classList.remove('snappedToRight');
      appObj.dragContainer.classList.remove('snappedToLeft');
      appObj.dragContainer.style.height = '80%';
    }

    appObj.dragStatus = true;
    appObj.dragType = 'drag';

    appObj.drag.startX = e.clientX;
    appObj.drag.startY = e.clientY;

    appObj.drag.elStartX = appObj.dragContainer.offsetLeft;
    appObj.drag.elStartY = appObj.dragContainer.offsetTop;

    if (document.querySelector('.resizeHandleJS')) {
      document.querySelector('.resizeHandleJS').remove();
    }

  }

  if (e.target.classList.contains('resizeHandleJS')) {

    logMsg('Click on dragHandleJS resizeHandleJS');

    appObj.dragContainer = e.target.closest('.draggableJS');

    if (appObj.dragContainer != null) {
      logMsg('appObj.dragContainer not empty');
    }

    appObj.dragStatus = true;
    appObj.dragType = 'resize';

    appObj.drag.startX = e.clientX;
    appObj.drag.startY = e.clientY;

    appObj.drag.elStartX = appObj.dragContainer.offsetLeft;
    appObj.drag.elStartY = appObj.dragContainer.offsetTop;
    appObj.drag.elStartW = appObj.dragContainer.offsetWidth;
    appObj.drag.elStartH = appObj.dragContainer.offsetHeight;


  }
}

function windowMouseMove(e) {

  logMsg('Entering -> windowMouseMove()');

  if (appObj.dragStatus) {

    logMsg('appObj.dragStatus -> TRUE');

    appObj.drag.nowX = e.clientX;
    appObj.drag.nowY = e.clientY;

    updateView();

  } else {

    logMsg('appObj.dragStatus -> FALSE');

    var helperResJS = e.target.closest('.resizableJS');

    if (helperResJS) {

      logMsg('resizableJS element -> TRUE');

      if (!appObj.hoverResize) {
        if (document.querySelector('.resizeHandleJS')) {
          document.querySelector('.resizeHandleJS').remove();
        }
        helperResJS.innerHTML += '<div class="resizeHandleJS" style="position: absolute; top: calc(100% - 10px); left: calc(100% - 10px); border-radius: 50%; box-shadow: 0 2px 3px gray; width: 20px; height: 20px; background: gray; color:white; font-weight: 800; display: flex; font-size: 30px; align-items: center; justify-content: center; cursor: re-size;">+</div>';
        appObj.hoverResize = true;
        if (helperResJS.classList.contains('snappedToRight')) {
          document.querySelector('.resizeHandleJS').style.left = '-2.5px';
          document.querySelector('.resizeHandleJS').style.top = '0px';
          document.querySelector('.resizeHandleJS').style.height = '100%';
          document.querySelector('.resizeHandleJS').style.width = '5px';
          document.querySelector('.resizeHandleJS').style.borderRadius = '0';
          document.querySelector('.resizeHandleJS').innerHTML = '<div class="resizeHandleJS" style="padding:0.15em; background: gray; border-radius: 50%;"><></div>';
        }
        if (helperResJS.classList.contains('snappedToLeft')) {
          document.querySelector('.resizeHandleJS').style.left = 'calc(100% - 2.5px)';
          document.querySelector('.resizeHandleJS').style.top = '0px';
          document.querySelector('.resizeHandleJS').style.height = '100%';
          document.querySelector('.resizeHandleJS').style.width = '5px';
          document.querySelector('.resizeHandleJS').style.borderRadius = '0';
          document.querySelector('.resizeHandleJS').innerHTML = '<div class="resizeHandleJS" style="padding:0.15em; background: gray; border-radius: 50%;"><></div>';
        }
      }
    } else {
      appObj.hoverResize = false;
      if (document.querySelector('.resizeHandleJS')) {
        document.querySelector('.resizeHandleJS').remove();
      }
    }
  }

  logMsg('Leaving -> windowMouseMove()');

}

function windowMouseUp(e) {

  logMsg('Entering -> windowMouseUp()');

  if (appObj.dragStatus) {
    if ((appObj.dragType == 'drag') && appObj.dragContainer.classList.contains('resizableJS')) {
      if (appObj.dragContainer.classList.contains('snappableJS') && (appObj.drag.nowX < 20)) {
        snapLeftSide(appObj.dragContainer);
        document.querySelector('.snapClone').remove();
      }

      if (appObj.dragContainer.classList.contains('snappableJS') && (appObj.drag.nowX > (screen.width - 20))) {
        snapRightSide(appObj.dragContainer);
        document.querySelector('.snapClone').remove();
      }
    }
    appObj.dragStatus = false;
    appObj.hoverResize = false;
    appObj.dragType = '';
  }

  logMsg('Leaving -> windowMouseUp()');

}

function updateView() {

  logMsg('Entering -> updateView()');

  if (appObj.dragType == 'drag') {

    var leftHelp = parseInt(appObj.drag.elStartX + parseInt(parseInt(appObj.drag.nowX) - parseInt(appObj.drag.startX)));
    var topHelp = parseInt(appObj.drag.elStartY + parseInt(parseInt(appObj.drag.nowY) - parseInt(appObj.drag.startY)));



    if (appObj.dragContainer.classList.contains('snappableJS') && ((appObj.drag.nowX < 20) || (appObj.drag.nowX > (screen.width - 20)))) {
      if (appObj.drag.nowX < 20) {
        snapLeftSideDemo(appObj.dragContainer);
      } else {
        snapRightSideDemo(appObj.dragContainer);
      }
    } else {
      var helperSnap = document.querySelector('.snapClone')
      if (helperSnap != null) {
        helperSnap.remove();
      }
      appObj.dragContainer.style.top = topHelp + 'px';
      appObj.dragContainer.style.left = leftHelp + 'px';
    }
  }

  if (appObj.dragType == 'resize') {
    var wHelp = parseInt(appObj.drag.elStartW + parseInt(parseInt(appObj.drag.nowX) - parseInt(appObj.drag.startX)));
    var hHelp = parseInt(appObj.drag.elStartH + parseInt(parseInt(appObj.drag.nowY) - parseInt(appObj.drag.startY)));

    if (appObj.dragContainer.classList.contains('snappedToLeft') || appObj.dragContainer.classList.contains('snappedToRight')) {
      if (appObj.dragContainer.classList.contains('snappedToRight')) {
        wHelp = parseInt(appObj.drag.elStartW + parseInt(parseInt(appObj.drag.startX) - parseInt(appObj.drag.nowX)));
      }
    } else {
      appObj.dragContainer.style.height = hHelp + 'px';
    }
    appObj.dragContainer.style.width = wHelp + 'px';
  }

  logMsg(`updateView() -> topHelp  ${hHelp} ; leftHelp  ${wHelp}`);
}

function snapLeftSideButton(el) {
  var helperEl = el.closest('.resizableJS.draggableJS');
  snapLeftSide(helperEl);
}

function snapRightSideButton(el) {
  var helperEl = el.closest('.resizableJS.draggableJS');
  snapRightSide(helperEl);
}

function snapRightSide(el) {

  if (el != null) {
    el.style.left = 'unset';
    el.style.right = '0px';
    el.style.top = '0px';
    el.style.bottom = 'unset';
    el.style.height = '100%';
    el.style.width = '50%';
    el.classList.add('snappedToRight');
  }
}

function snapLeftSide(el) {

  if (el != null) {
    el.style.left = '0px';
    el.style.right = 'unset';
    el.style.top = '0px';
    el.style.bottom = 'unset';
    el.style.height = '100%';
    el.style.width = '50%';
    el.classList.add('snappedToLeft');
  }
}

function snapLeftSideDemo(el) {
  var cloneHelp = document.querySelector('.snapClone');
  if (cloneHelp != null) {
    cloneHelp.remove();
  }
  cloneHelp = document.createElement("div");
  cloneHelp.classList.add('snapClone');
  document.documentElement.prepend("", cloneHelp);
  cloneHelp.style.display = 'block';
  cloneHelp.style.position = 'absolute';
  cloneHelp.style.zIndex = '-1';
  cloneHelp.style.background = 'gray';

  snapLeftSide(cloneHelp);
}

function snapRightSideDemo(el) {
  var cloneHelp = document.querySelector('.snapClone');
  if (cloneHelp != null) {
    cloneHelp.remove();
  }
  cloneHelp = document.createElement("div");
  cloneHelp.classList.add('snapClone');
  document.documentElement.prepend("", cloneHelp);
  cloneHelp.style.display = 'block';
  cloneHelp.style.position = 'absolute';
  cloneHelp.style.zIndex = '-1';
  cloneHelp.style.background = 'gray';

  snapRightSide(cloneHelp);
}

(function () {

  logMsg(`started draggable.js`);

  startDraggableJS();

})();
