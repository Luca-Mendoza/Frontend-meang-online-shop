

// Initialization Sidenav

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(elems, {
        edge: 'left',
        inDuration: 1000,
    });
  });