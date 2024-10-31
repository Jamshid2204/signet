
                    src="http://maps.app.goo.gl/5deoUGEdBEdEvRtF8"
                    AIzaSyDwgYpC2ACGBbUuPnEYwar2Y5Ub72kijB8
                    AIzaSyA7VX8FSIFq7fYfLvJtYF2pxpXSK3X2xcw
                    https://maps.app.goo.gl/5deoUGEdBEdEvRtF8








* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

body {
    line-height: 1.6;
}

.header {
    background: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
}

.nav {
    background: #34495e;
    padding: 1rem;
    text-align: center;
}

.nav a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
}

.hero {
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
                url('https://media.istockphoto.com/id/1172236370/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D1%80%D0%B5%D1%82%D1%80%D0%BE-%D1%81%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%BA%D1%86%D0%B8%D0%B8-%D1%84%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8.jpg?s=612x612&w=0&k=20&c=iV0m5ElYyTymSxwJsfalv9GR1eEyw2avy7tasMddkYk=');
    height: 60vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.products {
    padding: 4rem 2rem;
    background: #f9f9f9;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.product-card {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
}

.product-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
}

.contact {
    padding: 4rem 2rem;
    background: #2c3e50;
    color: white;
    text-align: center;
}

.contact-info {
    max-width: 600px;
    margin: 0 auto;
}

.social-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 1rem;
}

.footer {
    background: #34495e;
    color: white;
    text-align: center;
    padding: 1rem;
}

@media (max-width: 768px) {
    .nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}


.location {
    padding: 2rem 2rem;
    background: white;
    height: 600px;
}

.location-container {
    max-width: 1200px;
    /* height: 10%; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 3fr;
    gap: 5rem;
    align-items: start;
}

.location-info {
    padding: 2rem;
    background: #f9f9f9;
    border-radius: 8px;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.map-container {
    background: #f0f0f0;
    border-radius: 8px;
    height: 100%;
    min-height: 400px;
    overflow: hidden;
}

.img-container {
    background: #f0f0f0;
    border-radius: 8px;
    height: 30%;
    overflow: hidden;
}
.img-container img {
    width: 100%;
    height: 100%;
}

.map-container iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
}

.section-heading {
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
}

.section-container {
    max-width: 1200px;
    margin: 0 auto;
}


@media (max-width: 768px) {
    .location {
        padding: 2rem 1rem;
        height: auto;
    }

    .location-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .location-info {
        padding: 1.5rem;
        height: auto;
    }

    .map-container {
        min-height: 250px;
    }

    .map-container iframe {
        height: 250px;
    }

    .img-container {
        height: auto;
    }

    .img-container img {
        height: auto;
    }
}

