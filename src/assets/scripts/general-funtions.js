// Modals Initialization
function showMessager(messeger){
        document.querySelector("#menssageText").innerHTML = messeger
        let elems = document.querySelector('#messageModal');
        let instances = M.Modal.init(elems, { });
        instances.open();
}

