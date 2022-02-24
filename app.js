// @ts-nocheck

/*Key concepts covered:

document.querySelector()
addEventListener()
classList.toggle()
classList.remove()
 */

const toggleBtn = document.querySelector( ".sidebar-toggle" );
const closeBtn = document.querySelector( ".close-btn" );
const sidebar = document.querySelector( ".sidebar" );

toggleBtn.addEventListener( "click", function () {
    sidebar.classList.toggle( "show-sidebar" );
} );

closeBtn.addEventListener( "click", function () {
    sidebar.classList.remove( "show-sidebar" );

} );