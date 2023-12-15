;(async function () {
  // Find out what the homepage is set to
  const homepageRaw = (await browser.browserSettings.homepageOverride.get({}))
    .value
  const homepage = /^https?:\/\//.test(homepageRaw)
    ? homepageRaw
    : "http://" + homepageRaw
  document.querySelector("iframe").src = homepage

  // When we navigate away from the homepage, navigate the top level instead
  const currTab = await browser.tabs.getCurrent()
  browser.webNavigation.onBeforeNavigate.addListener((e) => {
    const isCurrentTab = e.tabId === currTab.id
    const isNotMainFrame = e.frameId !== 0
    const isNotHomepage = e.url.indexOf(homepageRaw) === -1

    if (
      isNotHomepage &&
      isCurrentTab &&
      isNotMainFrame &&
      e.parentFrameId === 0
    ) {
      window.location.href = e.url
    }
  })
})()
