import React from "react";
import classes from "./Pins.module.css";
import { MapPin } from "react-feather";
import { Marker } from "react-map-gl";

const Pins = (props) => {
    const { data = [], onClick = () => {} } = props;

    return data?.map((item, index) => (
        <Marker
            key={`marker-${index}`}
            longitude={Number(item.location.longitude)}
            latitude={Number(item.location.latitude)}
        >
            <div className={classes.pinBox}>
                <div className={classes.popup}>
                    <p>{item.name}</p>
                    <address>{item.location.address}</address>
                </div>
                <MapPin
                    onClick={() => onClick(item)}
                    size={22}
                    color="#ba2b47"
                    cursor="pointer"
                    className={classes.mapPin}
                />
            </div>
        </Marker>
    ));
};

export default React.memo(Pins);
