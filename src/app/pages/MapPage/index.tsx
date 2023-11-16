import React, {useState} from 'react';
import './css/index.css'
import PanelBlock from "../../components/PanelBlock";
import MapBlock from "../../components/MapBlock";
import TimeEnteredBlock from "../../components/TimeEnteredBlock";
import {range} from "three/examples/jsm/nodes/shadernode/ShaderNodeElements";
import SettingsBlock from "../../components/SettingsBlock";

const MapPage = () => {
    const [map, setMap] = useState("https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer?f=jsapi")
    const [point, setPoint] = useState<any>();


    const coordinatesOfPoint= [
        {
            id: 1,
            name: "Radio network - 1",
            coordinates: {
                latitude: 50.504866424805584,
                longitude: 30.610469394778658
            },
            city: "Київ",
            state: "Київська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 2,
            name: "Radio network - 2",
            coordinates: {
                latitude: 50.39889318491218,
                longitude: 30.59676859873032
            },
            city: "Київ",
            state: "Київська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 3,
            name: "Radio network - 3",
            coordinates: {
                latitude: 50.44778246483152,
                longitude: 30.600159325430326
            },
            city: "Київ",
            state: "Київська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 4,
            name: "Radio network - 4",
            coordinates: {
                latitude: 50.5343134843288,
                longitude: 30.602792234112965
            },
            city: "Київ",
            state: "Київська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 5,
            name: "Radio network - 5",
            coordinates: {
                latitude: 49.90209816191477,
                longitude: 24.099850849983394
            },
            city: "Львів",
            state: "Львівська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 6,
            name: "Radio network - 6",
            coordinates: {
                latitude: 49.8320642972691,
                longitude: 23.992326228137287
            },
            city: "Львів",
            state: "Львівська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 7,
            name: "Radio network - 7",
            coordinates: {
                latitude: 49.88926337677838,
                longitude: 24.099563469350464
            },
            city: "Львів",
            state: "Львівська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 8,
            name: "Radio network - 8",
            coordinates: {
                latitude: 49.78760937156629,
                longitude: 23.999119723155477
            },
            city: "Львів",
            state: "Львівська область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 9,
            name: "Radio network - 9",
            coordinates: {
                latitude: 50.67064269756936,
                longitude: 26.264860985226452
            },
            city: "Рівне",
            state: "Рівницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 10,
            name: "Radio network - 10",
            coordinates: {
                latitude: 50.566856334478366,
                longitude: 26.19705354989514
            },
            city: "Рівне",
            state: "Рівницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 11,
            name: "Radio network - 11",
            coordinates: {
                latitude: 50.672839303797424,
                longitude: 26.18357504204049
            },
            city: "Рівне",
            state: "Рівницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 12,
            name: "Radio network - 12",
            coordinates: {
                latitude: 50.606529588787204,
                longitude: 26.276636667669038
            },
            city: "Рівне",
            state: "Рівницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 13,
            name: "Radio network - 13",
            coordinates: {
                latitude: 49.28925173410625,
                longitude: 28.568032335345052
            },
            city: "Вінниця",
            state: "Вінницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
        {
            id: 14,
            name: "Radio network - 14",
            coordinates: {
                latitude: 49.191227846379654,
                longitude: 28.461105127909974
            },
            city: "Вінниця",
            state: "Вінницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 15,
            name: "Radio network - 15",
            coordinates: {
                latitude:  49.25438042413405,
                longitude: 28.529550517699853
            },
            city: "Вінниця",
            state: "Вінницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: true,
        },
        {
            id: 16,
            name: "Radio network - 16",
            coordinates: {
                latitude: 49.2301224062536,
                longitude: 28.417540833959404
            },
            city: "Вінниця",
            state: "Вінницька область",
            frequency: "2.4 GHz",
            transmitPower: "20 dBm",
            status: false,
        },
    ]

    const onPointUpdate = (newData: any) => {
        setPoint(newData);
    };

    const onChangeMap = (map:string) => {
        console.log(map)
        setMap(map)
    }

    return (
        <div className={'map-page'}>
            <MapBlock  data={coordinatesOfPoint} map={map} onPointUpdate={onPointUpdate}/>
            <PanelBlock point={point}/>
            <SettingsBlock onChangeMap={onChangeMap}/>
            <TimeEnteredBlock/>
        </div>
    );
};

export default MapPage;