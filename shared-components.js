function renderSiteHeader(basePath = '') {
    const sectionHref = (sectionId) => basePath ? `${basePath}index.html#${sectionId}` : `#${sectionId}`;
    const homeHref = sectionHref('home');
    const aboutHref = sectionHref('about');
    const toursHref = sectionHref('tours');
    const faqHref = sectionHref('faq');
    const contactHref = sectionHref('contact');

    return `
    <header class="header">
        <nav class="nav">
            <div class="nav-container">
                <div class="logo">
                    <a href="${basePath}index.html"><h2>TravelExpert</h2></a>
                </div>
                <ul class="nav-menu">
                    <li><a href="${homeHref}" class="nav-link" data-translate="nav.home">Home</a></li>
                    <li><a href="${aboutHref}" class="nav-link" data-translate="nav.about">About</a></li>
                    <li class="nav-dropdown">
                        <a href="${toursHref}" class="nav-link" data-translate="nav.tours">Tours <i class="fas fa-chevron-down"></i></a>
                        <ul class="dropdown-menu">
                            <li class="dropdown-submenu">
                                <a href="${toursHref}" class="dropdown-parent">Russia <i class="fas fa-chevron-right"></i></a>
                                <ul class="submenu">
                                    <li><a href="${basePath}tours/moscow.html">Moscow</a></li>
                                    <li><a href="${basePath}tours/petersburg.html">St. Petersburg</a></li>
                                    <li><a href="${basePath}tours/kazan.html">Kazan</a></li>
                                    <li><a href="${basePath}tours/murmansk.html">Murmansk</a></li>
                                    <li><a href="${basePath}tours/baikal.html">Irkutsk</a></li>
                                    <li><a href="${basePath}tours/dagestan.html">Dagestan</a></li>
                                    <li><a href="${basePath}tours/chechnya.html">Chechnya</a></li>
                                </ul>
                            </li>
                            <li><a href="${basePath}tours/kazakhstan.html">Kazakhstan</a></li>
                            <li><a href="${basePath}tours/kyrgyzstan.html">Kyrgyzstan</a></li>
                            <li><a href="${basePath}tours/uzbekistan.html">Uzbekistan</a></li>
                        </ul>
                    </li>
                    <li><a href="${faqHref}" class="nav-link" data-translate="nav.faq">FAQ</a></li>
                    <li><a href="${contactHref}" class="nav-link" data-translate="nav.contact">Contact</a></li>
                </ul>
                <div class="header-right">
                    <div class="language-switcher">
                        <button class="lang-btn active" data-lang="en">EN</button>
                        <button class="lang-btn" data-lang="id">ID</button>
                    </div>
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
            </div>
        </nav>
    </header>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const headerMount = document.getElementById('site-header');
    if (!headerMount) return;

    const basePath = headerMount.dataset.basePath || '';
    headerMount.outerHTML = renderSiteHeader(basePath);
});
