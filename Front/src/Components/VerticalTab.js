import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import triangleIcon from '../assets/images/triangle.svg';
import '../assets/css/style.css';
import chartImage from '../assets/images/chart.png';

import 'react-web-tabs/dist/react-web-tabs.css';
const VerticalTab = () => {

    return(
        <>
            <Tabs defaultTab="vertical-tab-one" vertical>
                <TabList>
                    <Tab tabFor="vertical-tab-one">General</Tab>
                    <Tab tabFor="vertical-tab-two">Performance</Tab>
                    <Tab tabFor="vertical-tab-three">WOK</Tab>
                    <Tab tabFor="vertical-tab-four">Control <br></br> residual BPM</Tab>
                    <Tab tabFor="vertical-tab-five">APK and recalls</Tab>
                    <Tab tabFor="vertical-tab-six">Weight <br></br> other information</Tab>
                    <div className='px-3 getReportBtnWrap'>
                        <div className='getReportBtn d-flex justify-content-center align-items-center'>
                            <p className='mb-0'>Get full report!</p>
                            <div className='ml-3 d-flex justify-content-center align-items-center'>
                                <img src= {triangleIcon}></img>
                            </div>
                        </div>
                    </div>
                </TabList>
                <TabPanel tabId="vertical-tab-one">
                    <div className='tableWrap d-flex justify-content-center align-items-center'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Brand
                                    </td>
                                    <td>
                                        Audi
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fashion model
                                    </td>
                                    <td>
                                        S3 sports back
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Color
                                    </td>
                                    <td>
                                        Gray
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Body type	
                                    </td>
                                    <td>
                                        hatchback
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Vehicle category
                                    </td>
                                    <td>
                                        Passenger car
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        number of seats
                                    </td>
                                    <td>
                                        5
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Date of first admission
                                    </td>
                                    <td>
                                        09-03-2018
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Last ascription	
                                    </td>
                                    <td>
                                        09-02-2021
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        New price
                                    </td>
                                    <td>
                                        €77,122,-
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fuel	
                                    </td>
                                    <td>
                                        Gasoline
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Power
                                    </td>
                                    <td>
                                        228 KW / 311 HP
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Import car
                                    </td>
                                    <td>
                                        new
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Date of first issue in the Netherlands
                                    </td>
                                    <td>
                                        20-06-2019
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        APK expiration date	
                                    </td>
                                    <td>
                                        09-03-2022
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fair trade-in value
                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel tabId="vertical-tab-two">
                    <div className='d-flex'>
                        <div className='flex-7 tableWrap d-flex justify-content-center align-items-center'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            Power
                                        </td>
                                        <td>
                                            228 KW / 311 HP
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Amount of cilinders
                                        </td>
                                        <td>
                                            4
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Displacement
                                        </td>
                                        <td>
                                            1984CC
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        Consumption outside built-up areas
                                        </td>
                                        <td>
                                            5.60L/100KM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Consumption in built-up areas
                                        </td>
                                        <td>
                                            8.30L/100KM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Consumption combined
                                        </td>
                                        <td>
                                            6.60L/100KM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Co2 emissions
                                        </td>
                                        <td>
                                            152G/KM
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            thrift label
                                        </td>
                                        <td>
                                            Unknown
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex-3'>
                            <img src={chartImage} width="50%" height='100%'></img>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel tabId="vertical-tab-three">
                    <p>Tab 3 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-four">
                    <p>Tab 4 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-five">
                    <p>Tab 5 content</p>
                </TabPanel>
                <TabPanel tabId="vertical-tab-six">
                    <p>Tab 6 content</p>
                </TabPanel>
            </Tabs>
        </>
    )
}

export default VerticalTab;