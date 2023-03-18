import React from 'react';
import './footer.css';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <html>
        <head>
            <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>Untitled</title>
                    <link rel="stylesheet"
                          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"/>
                        <link rel="stylesheet"
                              href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"/>
                            <link rel="stylesheet" href="assets/css/style.css"/>
        </head>

        <body>
        <div className="footer-basic">
            <footer>
                    <div className="social">
                        <a href="https://www.instagram.com/ar7em_gay/"><i className="icon ion-social-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UC_9XACR4AYFim8A00VJo2QA/videos"><i className="icon ion-social-youtube"></i></a>
                        <a href="https://www.twitch.tv/wi3ad"><i className="icon ion-social-twitch"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100004329018380"><i className="icon ion-social-facebook"></i></a>
                        <a href="https://ru.pinterest.com/artemlask2014/"><i className="icon ion-social-pinterest"></i></a>
                        <a href="https://www.linkedin.com/in/artem-liaskovets-993340250/"><i className="icon ion-social-linkedin"></i></a>
                        <a href="https://github.com/Hamuud"><i className="icon ion-social-github"></i></a>
                    </div>
                        <ul className="list-inline">
                        <li className="list-inline-item"><Link to="/home">HOME</Link></li>
                        <li className="list-inline-item"><Link to="/gallery">OUR WORK'S</Link></li>
                        <li className="list-inline-item"><Link to="/ourgames">OUR GAME'S</Link></li>
                        <li className="list-inline-item"><Link to="/privacy">PRIVACY POLICY</Link></li>
                        <li className="list-inline-item"><Link to="/airshipWar">AIRSHIP WAR</Link></li>
                            <li className="list-inline-item"><Link to="/posts">FORUM</Link></li>
                    </ul>
                <h2 className="copyright">Alyaska Studio © 2022</h2>
            </footer>
        </div>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">

        </script>
        <script
            src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js">
        </script>
        </body>
        </html>
);
};

export default Footer;