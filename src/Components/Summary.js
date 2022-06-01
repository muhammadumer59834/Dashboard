import React, { useEffect, useState } from "react";
import axios from 'axios';
import Chart from 'react-apexcharts'

function Summary() {


    const [todaynetSale, setTodaynetSale] = useState("");
    const [todayqty, setTodayqty] = useState("");
    const [todaysales, setTodaysales] = useState("");
    const [todaysalesReturn, setTodaysalesReturn] = useState("");
    const [todaytotalBills, setTodaytotalBills] = useState("");
    const [todayaverageBill, setTodayaverageBill] = useState("");
    const [todaygrossSale, setTodaygrossSale] = useState("");
    const [todaygpMargin, setTodaygpMargin] = useState("");


    // Yesterday

    const [YesterdaynetSale, setYesterdaynetSale] = useState("");
    const [Yesterdayqty, setYesterdayqty] = useState("");
    const [Yesterdaysales, setYesterdaysales] = useState("");
    const [YesterdaysalesReturn, setYesterdaysalesReturn] = useState("");
    const [YesterdaytotalBills, setYesterdaytotalBills] = useState("");
    const [YesterdayaverageBill, setYesterdayaverageBill] = useState("");
    const [YesterdaygrossSale, setYesterdaygrossSale] = useState("");
    const [YesterdaygpMargin, setYesterdaygpMargin] = useState("");


    // Monthly


    const [monthlynetSale, setMonthlynetSale] = useState("");
    const [monthlyqty, setMonthlyqty] = useState("");
    const [monthlysales, setMonthlysales] = useState("");
    const [monthlysalesReturn, setMonthlysalesReturn] = useState("");
    const [monthlytotalBills, setMonthlytotalBills] = useState("");
    const [monthlyaverageBill, setMonthlyaverageBill] = useState("");
    const [monthlygrossSale, setMonthlygrossSale] = useState("");
    const [monthlygpMargin, setMonthlygpMargin] = useState("");


    //previous



    const [previousnetSale, setPreviousnetSale] = useState("");
    const [previousqty, setPreviousqty] = useState("");
    const [previoussales, setPrevioussales] = useState("");
    const [previoussalesReturn, setPrevioussalesReturn] = useState("");
    const [previoustotalBills, setPrevioustotalBills] = useState("");
    const [previousaverageBill, setPreviousaverageBill] = useState("");
    const [previousgrossSale, setPreviousgrossSale] = useState("");
    const [previousgpMargin, setPreviousgpMargin] = useState("");

    // Previous Year Month


    const [previousYearMonthnetSale, setPreviousYearMonthnetSale] = useState("");
    const [previousYearMonthqty, setPreviousYearMonthqty] = useState("");
    const [previousYearMonthsales, setPreviousYearMonthsales] = useState("");
    const [previousYearMonthsalesReturn, setPreviousYearMonthsalesReturn] = useState("");
    const [previousYearMonthtotalBills, setPreviousYearMonthtotalBills] = useState("");
    const [previousYearMonthaverageBill, setPreviousYearMonthaverageBill] = useState("");
    const [previousYearMonthgrossSale, setPreviousYearMonthgrossSale] = useState("");
    const [previousYearMonthgpMargin, setPreviousYearMonthgpMargin] = useState("");



    // date

    const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    const MounthDate = `${current.getMonth()}/01/${current.getFullYear()}`;
    const ChartDate = `${current.getDate()}-${monthArray[current.getMonth()]}-${current.getFullYear()}`;
    const ChartDatePrevious = `${current.getDate()}-${monthArray[current.getMonth()]}-${current.getFullYear() - 1}`;
    useEffect(() => {
        console.log(ChartDatePrevious);
        const getItem = () => {



            const url = `https://posapi.gtech.com.pk/api/post/SalesSummary?api=qTpq3bVFho&DateFrom${MounthDate}&DateTo=${date}`
            console.log(url);

            axios
                .get(url, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=UTF-8",
                    },
                })
                .then(({ data }) => {
                    console.log(data);
                    console.log(data[0].description);

                    setTodaynetSale(data[0].netSale)
                    setTodayqty(data[0].qty)
                    setTodaysales(data[0].sales)
                    setTodaysalesReturn(data[0].salesReturn)
                    setTodaytotalBills(data[0].totalBills)
                    setTodayaverageBill(data[0].averageBill)
                    setTodaygrossSale(data[0].grossSale)
                    setTodaygpMargin(data[0].gpMargin)

                    // Yesterday

                    setYesterdaynetSale(data[1].netSale)
                    setYesterdayqty(data[1].qty)
                    setYesterdaysales(data[1].sales)
                    setYesterdaysalesReturn(data[1].salesReturn)
                    setYesterdaytotalBills(data[1].totalBills)
                    setYesterdayaverageBill(data[1].averageBill)
                    setYesterdaygrossSale(data[1].grossSale)
                    setYesterdaygpMargin(data[1].gpMargin)


                    //Monthly

                    setMonthlynetSale(data[2].netSale)
                    setMonthlyqty(data[2].qty)
                    setMonthlysales(data[2].sales)
                    setMonthlysalesReturn(data[2].salesReturn)
                    setMonthlytotalBills(data[2].totalBills)
                    setMonthlyaverageBill(data[2].averageBill)
                    setMonthlygrossSale(data[2].grossSale)
                    setMonthlygpMargin(data[2].gpMargin)

                    //Previous

                    setPreviousnetSale(data[3].netSale)
                    setPreviousqty(data[3].qty)
                    setPrevioussales(data[3].sales)
                    setPrevioussalesReturn(data[3].salesReturn)
                    setPrevioustotalBills(data[3].totalBills)
                    setPreviousaverageBill(data[3].averageBill)
                    setPreviousgrossSale(data[3].grossSale)
                    setPreviousgpMargin(data[3].gpMargin)

                    // Previous Year Month

                    setPreviousYearMonthnetSale(data[4].netSale)
                    setPreviousYearMonthqty(data[4].qty)
                    setPreviousYearMonthsales(data[4].sales)
                    setPreviousYearMonthsalesReturn(data[4].salesReturn)
                    setPreviousYearMonthtotalBills(data[4].totalBills)
                    setPreviousYearMonthaverageBill(data[4].averageBill)
                    setPreviousYearMonthgrossSale(data[4].grossSale)
                    setPreviousYearMonthgpMargin(data[4].gpMargin)

                });

        }
        getItem();
    }, []);
    return (
        <>


            <div className="contain containMobile">
                <div className='myTbl'>


                    <h3 className="page-title mar">Summary</h3>
                    <hr className="mx-1" />

                    <div className="row">
                        <div className="col-md-8 col-sm-12" >
                            <table className='tbl-category table table-hover display nowrap' width="100%">
                                <thead >
                                    <tr className="bg-inverse" style={{ fontWeight: 800 }}>
                                        <th className="bb-2 bg-inverse text-center mg">Description</th>
                                        <th className="bb-2 bg-inverse text-center mg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gross Sale&nbsp;</th>
                                        <th className="bb-2 bg-inverse text-center mg">&nbsp;&nbsp;Net Sale&nbsp;&nbsp;</th>
                                        <th className="bb-2 bg-inverse text-center mg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Qty&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        <th className="bb-2 bg-inverse text-center mg">&nbsp;&nbsp;&nbsp;Discount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                        <th className="bb-2 bg-inverse text-center mg">&nbsp;Sales Return&nbsp;</th>
                                        <th className="bb-2 bg-inverse text-center mg">Total Bills</th>
                                        <th className="bb-2 bg-inverse text-center mg">Average Bill	</th>
                                        <th className="bb-2 bg-inverse text-center mg">GP Margin</th>
                                    </tr>
                                </thead>
                                <tbody className=''>

                                    {/* Today */}
                                    <tr>
                                        <td>Today</td>

                                        <td>{(todaygrossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todaynetSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todayqty).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todaysales).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todaysalesReturn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todaytotalBills).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todayaverageBill).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(todaygpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                    </tr>
                                    {/* Yesterday */}



                                    <tr>
                                        <td>Yesterday</td>

                                        <td>{(YesterdaygrossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(YesterdaynetSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(Yesterdayqty).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(Yesterdaysales).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(YesterdaysalesReturn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(YesterdaytotalBills).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(YesterdayaverageBill).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(YesterdaygpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                    </tr>



                                    {/* Monthly */}

                                    <tr>
                                        <td>Monthly</td>

                                        <td >{(monthlygrossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlynetSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlyqty).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlysales).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlysalesReturn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlytotalBills).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlyaverageBill).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(monthlygpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                    </tr>

                                    {/*  //Previous */}


                                    <tr>
                                        <td>Previous</td>

                                        <td >{(previousgrossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousnetSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousqty).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previoussales).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previoussalesReturn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previoustotalBills).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousaverageBill).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousgpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                    </tr>
                                    {/* Previous Year Month */}

                                    <tr>
                                        <td>Previous Year Month</td>

                                        <td>{(previousYearMonthgrossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthnetSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthqty).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthsales).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthsalesReturn).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthtotalBills).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthaverageBill).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                        <td>{(previousYearMonthgpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>

                        {/* chart */}

                        <div className='col-md-4 col-sm-12'>
                            <div className="container-fluid mb-5">
                                <Chart
                                    type="bar"
                                    width={400}
                                    height={380}
                                    series={[
                                        {
                                            data: [previousYearMonthnetSale, monthlynetSale],
                                        },
                                    ]}
                                    options={{
                                        title: {
                                            style: { fontSize: 13 },
                                        },


                                        theme: { mode: "light" },

                                        xaxis: {

                                            categories: [
                                                ChartDatePrevious,
                                                ChartDate 
                                            ],
                                            fill: {
                                                colors: ['#F44336', '#E91E63']
                                              },
                                        },

                                        yaxis: {
                                            labels: {

                                                formatter: (val) => {
                                                    return `${val.toLocaleString()}`;
                                                },

                                                style: { fontSize: "15", colors: ["black"] },
                                            },

                                        },

                                        legend: {
                                            show: true,
                                            position: "right",
                                        },

                                        dataLabels: {
                                            formatter: (val) => {
                                                return `${val.toLocaleString()}`;
                                            },
                                            style: {
                                                colors: ["#f4f4f4"],
                                                fontSize: 15,
                                            },
                                        },
                                    }}
                                ></Chart>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default Summary