const CSVHUB_RENDER = "csvhub_render";

// Create 'Render' option
chrome.contextMenus.create({
  id: CSVHUB_RENDER,
  title: "Render",
  contexts: ["page_action"]
});

// Add render handler
function csvhub_render_handler(info, tab) {
  if (!tab) return;
  if (info.menuItemId != CSVHUB_RENDER) return;

  chrome.tabs.sendMessage(tab.id, { action: "render_csv_files" }, function(
    response
  ) {
    console.info(response);
  });
}

chrome.contextMenus.onClicked.addListener(csvhub_render_handler);
