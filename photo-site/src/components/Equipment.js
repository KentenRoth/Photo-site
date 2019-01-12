import React from "react";
import "./Equipment.css";

const Equipment = () => {
    return (
        <div className="equipment-header container">
            <h1 className="title-header equipment">Equipment</h1>
            <div className="row equipment-row">
                <div className="col-4 col-left">
                    <div className="equip-icon">
                        <i className="fas fa-camera-retro fa-3x" />
                    </div>
                    <div className="equip-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quia expedita assumenda, suscipit
                            hic eos beatae magnam qui maxime
                        </p>
                    </div>
                </div>
                <div className="col-4 col-mid">
                    <div className="equip-icon">
                        <i className="fas fa-desktop fa-3x" />
                    </div>
                    <div className="equip-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quia expedita assumenda, suscipit
                            hic eos beatae magnam qui maxime
                        </p>
                    </div>
                </div>
                <div className="col-4 col-right">
                    <div className="equip-icon">
                        <i className="far fa-save fa-3x" />
                    </div>
                    <div className="equip-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aspernatur quia expedita assumenda, suscipit
                            hic eos beatae magnam qui maxime
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Equipment;
