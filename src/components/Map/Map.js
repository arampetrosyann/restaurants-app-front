import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import MapGL from "react-map-gl";
import defaultClasses from "./Map.module.css";
import mergeClasses from "Helpers/mergeClasses";
import { RestaurantContext } from "Context";
import mapStyle from "./map-style.json";
import Pins from "./Pins";
const MAPBOX_TOKEN =
    "pk.eyJ1IjoiYXJhbWphbiIsImEiOiJja3VicHlyNDgwNGo4Mm9ydnVteHh4bm9rIn0.mBiwI8BjoSqWu6rg_AkHlA";

const Map = (props) => {
    const { data, viewport, setViewport } = useContext(RestaurantContext);
    const history = useHistory();
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                mapStyle={mapStyle}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                mapboxApiAccessToken={MAPBOX_TOKEN}
            >
                <Pins
                    data={data?.items || []}
                    onClick={(item) => history.push(`/restaurant/${item.id}`)}
                />
            </MapGL>
        </div>
    );
};

export default Map;
