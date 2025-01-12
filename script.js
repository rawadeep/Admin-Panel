document.getElementById('toggle-theme').addEventListener('click', () => {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    }
  });
//the entire code for sidebar collapsing and expanding
document.getElementById('toggle-sidebar').addEventListener('click', (event) => {
    console.log(document.getElementById('sidebar'));

})

// write the code for sidebar menus expanding and collapsing
// Sidebar menu expand/collapse
document.querySelectorAll('.menu-item > a').forEach((menuLink) => {
  menuLink.addEventListener('click', (event) => {
    event.preventDefault();

    const submenu = menuLink.nextElementSibling; // Get the next sibling (dropdown)
    const allDropdowns = document.querySelectorAll('.submenu');

    // Hide all other dropdowns
    allDropdowns.forEach((dropdown) => {
      if (dropdown !== submenu) {
        dropdown.classList.remove('show');
      }
    });

    // Toggle the visibility of the clicked menu's dropdown
    if (submenu) {
      submenu.classList.toggle('show');
    }
  });
});

// Sidebar toggle behavior
const toggleButton = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
