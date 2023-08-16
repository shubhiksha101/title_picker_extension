
document.addEventListener('DOMContentLoaded', function() {
    var getTitleButton = document.getElementById('getTitle');
    var titleElement = document.getElementById('title');
  
    getTitleButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        var tabTitle = currentTab.title;
        titleElement.textContent = tabTitle;
      });
    });
  });
  













  