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
                    <a href="${basePath}index.html"><img src="${basePath}img/logo.png" alt="SoulRoute" class="logo-img"></a>
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
                            <li><a href="${basePath}tours/georgia.html">Georgia</a></li>
                            <li><a href="${basePath}tours/azerbaijan.html">Azerbaijan</a></li>
                            <li><a href="${basePath}tours/armenia.html">Armenia</a></li>
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

function renderContactSection(basePath = '') {
    return `
    <section id="contact" class="contact">
        <div class="container">
            <div class="section-header contact-section-header">
                <h2 data-translate="contact.title">Ready for Your Next Journey?</h2>
                <p data-translate="contact.subtitle">We will help you choose the right tour, tailor the program to your wishes, and answer any questions you have.</p>
            </div>
            <div class="contact-content">
                <div class="contact-copy">
                    <p class="contact-eyebrow" data-translate="contact.eyebrow">Get in Touch</p>
                    <p class="contact-subtitle" data-translate="contact.description">Choose a convenient way to contact us. We speak English and Indonesian and will gladly help you plan your trip.</p>
                    <div class="contact-socials">
                        <a href="https://wa.me/79773259914?text=Halo, saya ingin mengetahui informasi tentang tur ini." target="_blank" rel="noopener noreferrer" class="contact-social-link contact-social-link-primary">
                            <i class="fab fa-whatsapp"></i>
                            <span data-translate="contact.social.whatsapp">WhatsApp</span>
                        </a>
                        <a href="https://t.me/Nadinka170101" target="_blank" rel="noopener noreferrer" class="contact-social-link">
                            <i class="fab fa-telegram-plane"></i>
                            <span data-translate="contact.social.telegram">Telegram</span>
                        </a>
                        <a href="https://www.instagram.com/susanvladimir/" target="_blank" rel="noopener noreferrer" class="contact-social-link">
                            <i class="fab fa-instagram"></i>
                            <span data-translate="contact.social.instagram">Instagram</span>
                        </a>
                    </div>
                </div>
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4 data-translate="contact.phone">Phone</h4>
                            <p>+62 882-9919-4796</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4 data-translate="contact.email">Email</h4>
                            <p>susanvladimir.tour@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4 data-translate="contact.address">Address</h4>
                            <p data-translate="contact.addressValue">Moscow, Saltykovskaya Street 11, Office 1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function renderSiteFooter(basePath = '') {
    const toursLink = basePath ? `${basePath}index.html#tours` : '#tours';
    const centralAsiaLink = basePath ? `${basePath}index.html#tours-central-asia` : '#tours-central-asia';
    const caucasusLink = basePath ? `${basePath}index.html#tours-caucasus` : '#tours-caucasus';

    return `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>SoulRoute</h3>
                    <p data-translate="footer.description">Professional tours to Russia and Central Asia</p>
                </div>
                <div class="footer-section">
                    <h4 data-translate="footer.destinations">Destinations</h4>
                    <ul>
                        <li><a href="${toursLink}" data-translate="tours.russia">Russia</a></li>
                        <li><a href="${centralAsiaLink}" data-translate="tours.kazakhstan.country">Kazakhstan</a></li>
                        <li><a href="${centralAsiaLink}" data-translate="tours.kyrgyzstan.country">Kyrgyzstan</a></li>
                        <li><a href="${centralAsiaLink}" data-translate="tours.uzbekistan.country">Uzbekistan</a></li>
                        <li><a href="${caucasusLink}" data-translate="tours.georgia.country">Georgia</a></li>
                        <li><a href="${caucasusLink}" data-translate="tours.azerbaijan.country">Azerbaijan</a></li>
                        <li><a href="${caucasusLink}" data-translate="tours.armenia.country">Armenia</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4 data-translate="footer.contacts">Contacts</h4>
                    <p>+62 882-9919-4796</p>
                    <p>susanvladimir.tour@gmail.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p data-translate="footer.copyright">&copy; 2024 SoulRoute. All rights reserved.</p>
            </div>
        </div>
    </footer>`;
}

document.addEventListener('DOMContentLoaded', function() {
    const headerMount = document.getElementById('site-header');
    if (headerMount) {
        const basePath = headerMount.dataset.basePath || '';
        headerMount.outerHTML = renderSiteHeader(basePath);
    }

    const contactMount = document.getElementById('site-contact');
    if (contactMount) {
        const basePath = contactMount.dataset.basePath || '';
        contactMount.outerHTML = renderContactSection(basePath);
    }

    const footerMount = document.getElementById('site-footer');
    if (footerMount) {
        const basePath = footerMount.dataset.basePath || '';
        footerMount.outerHTML = renderSiteFooter(basePath);
    }
});
