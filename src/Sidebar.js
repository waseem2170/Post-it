import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from "./StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="Sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID tracker"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={HelpIcon} title="Coming soon..."/>
        </div>
    )
}

export default Sidebar
