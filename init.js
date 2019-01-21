document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
});

elem = document.querySelector('.dropdown-trigger');
instance = M.Dropdown.init(elem);

elems = document.querySelectorAll('.tooltipped');
instances = M.Tooltip.init(elems);