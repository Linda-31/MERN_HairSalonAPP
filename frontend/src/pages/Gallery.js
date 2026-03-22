import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../style/Home.css';
import '../style/About.css';

const GalleryScreen = () => {
    return (
        <div className="gallery-page">
            {/* HERO SECTION - REUSING ABOUT HERO STYLE */}
            <section className="about-hero-section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="about-arch-wrapper">
                                <div className="about-arch-container">
                                    <Image
                                        src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-doing-haircut-for-women-in-hairdressin-P6ZJU5L-879x1024.jpg"
                                        className="about-arch-image"
                                    />
                                </div>
                                {/* Decorative Leaf Image at the bottom left edge of the arch */}
                                <Image
                                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-12-1.png"
                                    className="leaf-decoration-about"
                                />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="about-text-content">
                                <h1 className="about-title-main">Our Gallery</h1>
                                <h2 className="about-subtitle-script">Photograph</h2>
                                <p className="about-description-text">
                                    Explore our portfolio of stunning transformations and professional salon artistry. Every image tells a story of beauty, confidence, and expert care.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* MAIN GALLERY SECTION */}
            <section className="gallery-section-premium" style={{ backgroundColor: '#fcfdfa' }}>
                <Image
                    src="https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/monstera-leaf-vector-illustrations-RADWZJU-11.png"
                    className="gallery-monstera-leaf d-none d-lg-block"
                />
                <Container>
                    <div className="text-center mb-5">
                       <h2 className="about-subtitle-script">Salon Creations</h2>
                       <p className="about-description-text mx-auto">Discover our curated selection of professional salon work.</p>
                    </div>

                    <div className="gallery-grid-wrapper">
                        {[
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/gorgeous-bride-in-amazing-gown-walking-to-old-cast-DMTDK2N-1319x1536.jpg',
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/charming-client-getting-professional-makeup-in-bea-T3VZJFC-1319x1536.jpg',
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-doing-haircut-for-women-in-hairdressin-P6ZJU5L-1319x1536.jpg',
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/washing-off-hair-care-products-in-the-beauty-salon-NAYED3R-1319x1536.jpg',
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/brides-hair-detail-with-curls-close-up-3Q3ULB8-879x1024.jpg',
                            'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/hairdresser-coiffeur-makes-hairstyle-P9CB2GF-879x1024.jpg',
                             'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/beautiful-curly-hairstyle-PGN6QXL-879x1024.jpg',
                             'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/girl-with-long-flowing-hair-view-from-the-back-on-UHZCGBC-683x1024.jpg',
                             'https://kitpro.site/cabello/wp-content/uploads/sites/25/2021/05/calm-portrait-of-beautiful-hipster-girl-standing-i-J4RDN2X-1.jpg'
                        ].map((img, idx) => (
                            <div key={idx} className="gallery-item-frame shadow-sm">
                                <Image src={img} className="gallery-img" />
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default GalleryScreen;