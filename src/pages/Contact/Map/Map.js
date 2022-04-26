import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.scss'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <section className="map">
            <div className="container">
                <div className="map__content">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9eb0c42d599ef7b4692a61b6ac1fbfe36985a9aed46d1f90872a0c92b8158157&amp;source=constructor"
                        width="100%" height="476" frameBorder="0"></iframe>
                </div>
            </div>
        </section>
    );
};

export default Map;