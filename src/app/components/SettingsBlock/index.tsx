import React, {FC} from 'react';
import './css/index.css'

interface ISettings {
    onChangeMap: (map:string) => void
}

const SettingsBlock: FC<ISettings> = ({onChangeMap}) => {
    return (
        <div className={"settingsBlock"}>
            <div className={"settingsBlock__title"}>SETTINGS</div>
            <div className={"settingsBlock__container"}>
                <div className={"settingsBlock__container__change-map"}>
                    <div className={"settingsBlock__container__change-map__title"}>Change Map</div>
                    <div className={"settingsBlock__container__change-map__container"}>
                        <button className={"settingsBlock__button"} onClick={() => onChangeMap("https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer?f=jsapi")}>Street Map</button>
                        <button className={"settingsBlock__button"} onClick={() => onChangeMap("https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer?f=jsapi")}>ESRI Word Map</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsBlock;