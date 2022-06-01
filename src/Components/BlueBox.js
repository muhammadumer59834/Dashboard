
import React, { useEffect, useState } from "react";
import axios from 'axios';
// import Loader from "./Loader";

const BlueBox = () => {
    // const [data, setData] = useState();
    // const [loading, setLoading] = useState(true);


    const [todaySale, setTodaySale] = useState("");
    const [todayRt, setTodayRt] = useState("");
    const [todayOn, setTodayOn] = useState("");
    const [todayWs, setTodayWs] = useState("");
    const [yesterdaySale, setYesterdaySale] = useState("");
    const [yesterdayRt, setYesterdayRt] = useState("");
    const [yesterdayOn, setYesterdayOn] = useState("");
    const [yesterdayWs, setYesterdayWs] = useState("");
    const [monthSale, setMonthSale] = useState("");
    const [monthRt, setMonthRt] = useState("");
    const [monthOn, setMonthOn] = useState("");
    const [monthWs, setMonthWs] = useState("");


    useEffect(() => {

        const getItem = () => {
            const current = new Date();
            const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
            const MounthDate = `${current.getMonth()}/01/${current.getFullYear()}`;


            const url = `https://posapi.gtech.com.pk/api/post/SummaryBoxes?api=qTpq3bVFho&DateFrom${MounthDate}&DateTo=${date}`


            axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                })
                .then(({ data }) => {
                    console.log(data);
                    console.log(data[0]._todaySale);


                    setTodaySale(data[0]._todaySale);
                    setTodayRt(data[0]._todayRt);
                    setTodayOn(data[0]._todayOn);
                    setTodayWs(data[0]._todayWs);


                    setYesterdaySale(data[0]._yesterdaySale);
                    setYesterdayRt(data[0]._yesterdayRt);
                    setYesterdayOn(data[0]._yesterdayOn);
                    setYesterdayWs(data[0]._yesterdayWs);



                    setMonthSale(data[0]._monthSale);
                    setMonthRt(data[0]._monthRt);
                    setMonthOn(data[0]._monthOn);
                    setMonthWs(data[0]._monthWs);




                });

        }
        getItem();
    }, []);
    return (
        <div className="row">
            <div className="col-xl-4 col-12">

                <div className="small-box box-info bg-info" data-overlay={5}>
                    <div className="inner">
                        <h4 style={{ fontSize: '2em', fontFamily: 'calibri', textDecoration: 'underline' }}>Today Sale</h4>
                        <h4 className="bottt mt-5" style={{ fontSize: '2em', fontFamily: 'calibri', fontWeight: 'bold' }}>{(todaySale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                    </div>
                    <div className="p-15">
                        <div className="font-size-16 flexbox align-items-center">
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold"> Retail</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesRtAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(todayRt).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Online</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesOnlAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(todayOn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Wholesale</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesWsAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(todayWs).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                    <div className="icon text-white">
                        <i className="fa fa-bar-chart" />
                    </div>
                    <a href="#" className="small-box-footer">More info<i className="fa fa-arrow-right" /></a>
                </div>
            </div>

            {/* yesterday sale box */}
            <div className="col-xl-4 col-12">

                <div className="small-box box-info bg-info" data-overlay={5}>
                    <div className="inner">
                        <h4 style={{ fontSize: '2em', fontFamily: 'calibri', textDecoration: 'underline' }}>Yesterday Sale</h4>
                        <h4 className="bottt mt-5" style={{ fontSize: '2em', fontFamily: 'calibri', fontWeight: 'bold' }}>{(yesterdaySale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                    </div>
                    <div className="p-15">
                        <div className="font-size-16 flexbox align-items-center">
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold"> Retail</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesRtAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(yesterdayRt).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Online</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesOnlAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(yesterdayOn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Wholesale</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesWsAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(yesterdayWs).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                    <div className="icon text-white">
                        <i className="fa fa-bar-chart" />
                    </div>
                    <a href="#" className="small-box-footer">More info<i className="fa fa-arrow-right" /></a>
                </div>
            </div>

            {/* month sale box */}
            <div className="col-xl-4 col-12">

                <div className="small-box box-info bg-info" data-overlay={5}>
                    <div className="inner">
                        <h4 style={{ fontSize: '2em', fontFamily: 'calibri', textDecoration: 'underline' }}>Month To Date Sale</h4>
                        <h4 className="bottt mt-5" style={{ fontSize: '2em', fontFamily: 'calibri', fontWeight: 'bold' }}>{(monthSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                    </div>
                    <div className="p-15">
                        <div className="font-size-16 flexbox align-items-center">
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold"> Retail</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesRtAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(monthRt).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Online</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesOnlAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(monthOn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                        <div className="font-size-16 flexbox align-items-center" style={{ marginTop: '3%' }}>
                            <span> <label style={{ fontSize: '1.3em' }} cssclass="text-bold">Wholesale</label></span>
                            <span className="font-weight-bold"> <label id="tdySalesWsAmount" style={{ fontSize: '1.3em' }} cssclass="text-bold" />{(monthWs).toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                    <div className="icon text-white">
                        <i className="fa fa-bar-chart" />
                    </div>
                    <a href="#" className="small-box-footer">More info<i className="fa fa-arrow-right" /></a>
                </div>
            </div>
        </div>

    )

}

export default BlueBox