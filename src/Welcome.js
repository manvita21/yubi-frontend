

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


function Welcome( props) {
    let navigate = useNavigate();

    const [tname, setTableName] = useState("");
    const [colname, setColName] = useState("");
    const [colvalue, setColValue] = useState("");

    const callManualUpdate = () => {

        console.log("==============================>", tname);
        getBackEndData();

    };

    const getBackEndData = () => {
        let search = {
            tableName: tname,
            colName: colname,
            colValue: colvalue
        }
        axios.post(`http://localhost:9020/getdepartbycriteria`,search)
            .then(res => {
                console.log(res);
                console.log(tname);
               // navigate("table");
               props.tableDates.push(res);
            })
    };

    return (
        <div style={{
            display: 'grid',
            marginLeft: '20%',
            marginRight: '20%',
            paddingTop: '5%'
        }}>
            <input className="inputCss" placeholder="Table Name" value={tname}
                onChange={event => {
                    setTableName(event.target.value);
                }} />
            <input className="inputCss" placeholder="Unique Column" colname={colname}
                onChange={event => {
                    setColName(event.target.value);
                }}
            />
            <input className="inputCss" placeholder="Column Name" colvalue={colvalue}
                onChange={event => {
                    setColValue(event.target.value);
                }} />
            <input className="inputCss" type="button"
                onClick={() => callManualUpdate()} value="Manaul Update" />
        </div>
    )
}

export default Welcome;