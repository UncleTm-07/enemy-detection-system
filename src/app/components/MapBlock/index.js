import React, {useState} from 'react';
import {CameraFlyTo, CylinderGraphics, Entity, Viewer } from 'resium';
import { EllipseGraphics  } from 'resium';
import {ArcGisMapServerImageryProvider, Cartesian3, Color, SceneMode} from 'cesium';
import './css/index.css';


const MapBlock = ({ data, map, onPointUpdate  }) => {
    const [base, setBase] = useState({
        name: 'MILITARY BASE',
        coordinates: {
            latitude: 47.9096600,
            longitude: 33.3804400,
        },
        city: 'Кривий ріг',
    });

    const giveInfo = (point) => {
        console.log(point)
        onPointUpdate(point);
    }

    let viewer;

    const handleReady = (tileset) => {
        if (viewer) {
            viewer.zoomTo(tileset);
        }
    };

    return (
        <Viewer
            style={{
                height: 800,
                padding: 20,
            }}
            full
            imageryProvider={ new ArcGisMapServerImageryProvider({
                url: map
            })}
            ref={(e) => {
                viewer = e && e.cesiumElement;
            }}
        >
            <CameraFlyTo destination={Cartesian3.fromDegrees(30.74612, 50.14317, 2000000)} />
            {data.map((value) => (
                <Entity
                    key={`Point-${value.id}`}
                    name={value.name}
                    position={Cartesian3.fromDegrees(value.coordinates.longitude, value.coordinates.latitude, 0)}
                    point={{ pixelSize: 10, color: Color.RED }}
                    description={value.description}
                    onClick={() => giveInfo(value)}
                >
                    <EllipseGraphics
                        center={Cartesian3.fromDegrees(value.coordinates.longitude, value.coordinates.latitude, 0)}
                        semiMajorAxis={10000}
                        semiMinorAxis={10000}
                        material={Color.BLUE.withAlpha(0.3)} // You can customize the color and transparency
                        outline={true}
                        outlineColor={Color.BLUE}
                        height={0}
                        numberOfVerticalLines={64} // Optional: Increase the number of lines for a smoother circle
                    />
                </Entity>
            ))}
            {base ? (
                <>
                    <Entity
                        name={`${base.name}`}
                        description={`Місце знаходження: ${base.city}`}
                        position={Cartesian3.fromDegrees(base.coordinates.longitude, base.coordinates.latitude, 20)}
                        point={{ pixelSize: 10, color: Color.GREEN}}
                    >
                        <EllipseGraphics
                            center={Cartesian3.fromDegrees(base.coordinates.longitude, base.coordinates.latitude, 0)}
                            semiMajorAxis={30000}
                            semiMinorAxis={30000}
                            material={Color.DARKGREEN.withAlpha(0.3)} // You can customize the color and transparency
                            outline={true}
                            outlineColor={Color.DARKGREEN}
                            height={0}
                            numberOfVerticalLines={64} // Optional: Increase the number of lines for a smoother circle
                        />
                    </Entity>

                    {data.map((value) => (
                        <Entity
                            key={`Line-${value.id}`}
                            polyline={{
                                positions: [Cartesian3.fromDegrees(base.coordinates.longitude, base.coordinates.latitude, 100),
                                    Cartesian3.fromDegrees(value.coordinates.longitude, value.coordinates.latitude, 0)],
                                width: 2,
                                material: Color.YELLOW,
                            }}
                        />
                    ))}
                </>
            ) : (
                <></>
            )}
        </Viewer>
    );
};

export default MapBlock;
