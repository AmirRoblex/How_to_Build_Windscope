/**
 * This script handles the tab navigation for the Windscope website.
 * It shows and hides content based on which tab is clicked.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Store references to buttons and content panes for efficiency
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Make the changeTab function globally accessible
    window.changeTab = function(tabId) {
        // Update button styles
        tabButtons.forEach(button => {
            // Check if the button's onclick attribute corresponds to the selected tabId
            if (button.getAttribute('onclick').includes(`'${tabId}'`)) {
                button.classList.remove('tab-inactive');
                button.classList.add('tab-active');
            } else {
                button.classList.remove('tab-active');
                button.classList.add('tab-inactive');
            }
        });

        // Show/hide content panes
        tabContents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('tab-content-active');
            } else {
                content.classList.remove('tab-content-active');
            }
        });
    }
});
