

import React from "react";

function WebSiteTracking( props) {

    const addWebsite = () => {

    }
    return (
        <div style={{
            display: 'grid',
            marginLeft: '20%',
            marginRight: '20%',
            paddingTop: '5%'
        }}>
            <input className="inputCss"
                onClick={() => addWebsite()} value="Enter website here to be monitored" />
            <input className="inputCss" type="button"
                onClick={() => addWebsite()} value="Add" />
            <table>
                <tr>
                    <th>WebSite </th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
            </table>
        </div>
    )
}

export default WebSiteTracking;