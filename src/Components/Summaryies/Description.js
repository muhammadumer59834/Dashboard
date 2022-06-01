import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import axios from 'axios'


function Description() {





    const [stdudentSubject, setStudentsubject] = useState([]);
    const [studentMarks, setStudentMarks] = useState([]);

    const [items, setItems] = useState([]) //this will represent the items that will be coming from the API
    // const [isLoading, setLoading] = useState(true)


    useEffect(() => {


        //date
        const current = new Date();
        const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
        const MounthDate = `${current.getMonth()}/01/${current.getFullYear()}`;

        // cahrt
        const sSubject = [];
        const sMarks = [];
        const getStudentdata = async () => {
            const reqData = await fetch(`https://posapi.gtech.com.pk/api/post/LocationSummary?api=qTpq3bVFho&DateFrom=${MounthDate}&DateTo=${date}`);
            const resData = await reqData.json();
            for (let i = 0; i < resData.length; i++) {
                sSubject.push(resData[i].locationName);
                sMarks.push(parseInt(resData[i].monthly));
            }
            setStudentsubject(sSubject);
            setStudentMarks(sMarks);
            //console.log(resData); 
        }

        getStudentdata();

        // table

        const getItems = async () => {
            const result = await axios(
                `https://posapi.gtech.com.pk/api/post/LocationSummary?api=qTpq3bVFho&DateFrom=${MounthDate}&DateTo=${date}` //Endpoint and parameter or base Url
            )
            // console.log(result.data)

            setItems(result.data)//sets the data to appear 
            // setLoading(false) //stop loading when data is fetched


        }
        getItems()


    }, []);


    let idSum = 0;
    for (let i = 0; items&& i < items.length; i++) {
        idSum +=items[i].today;
    }


    return (
        <>
            <h4 className='mt-4'>{idSum}</h4>


            <div className='myTbl'>
                <hr className="mx-1" />

                <div className="row">
                    <div className="col-md-12 col-sm-12" >
                        <div className="view">
                            <div className="wrapper">
                                <table className="table  table-hover" id="dome">
                                    <thead id="tom">
                                        <tr>
                                            <th className="sticky-col first-col coltm4">Location Name</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">Today</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">Yesterday</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">Monthly</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">Previous Month</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">Gross Sale</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">GP Margin</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">SQFeetYeild</th>
                                            <tr className='ak'> &nbsp; </tr>
                                            <th className="coltm4">RentRevenueRatio</th>
                                        </tr>
                                    </thead>
                                    <tbody className="some" id="dome" style={{}}>

                                        {items.map((item, index) => (   //here we map through the items
                                            <tr className='bg-white' key={index}>

                                                <td className="sticky-col first-col">{item.locationName}</td>

                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.today).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.yesterday).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.monthly).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.previous).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.grossSale).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.gpMargin).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.sqFeetYeild).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                <tr className='ak'> &nbsp; </tr>
                                                <td className="text-center ind">{(item.rentRevenueRatio).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
                                                {/* <tr className='ak'> &nbsp; </tr> */}
                                                {/* <td className="text-center ind">{item.reduce((acc, curr) => acc + curr.today, 0)}</td> */}
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* <table className='tbl-category table table-hover display nowrap' width="100%">
                            <thead >
                                <tr className="bg-inverse" style={{ fontWeight: 800 }}>
                                    <th className="bb-2 bg-inverse text-center ">Description</th>
                                    <th className="bb-2 bg-inverse text-center mg">Gross Sale	</th>
                                    <th className="bb-2 bg-inverse text-center mg">Net Sale</th>
                                    <th className="bb-2 bg-inverse text-center mg">Qty</th>
                                    <th className="bb-2 bg-inverse text-center mg">Discount</th>
                                    <th className="bb-2 bg-inverse text-center mg">Sales Return</th>
                                    <th className="bb-2 bg-inverse text-center mg">Total Bills</th>
                                    <th className="bb-2 bg-inverse text-center mg">Average Bill	</th>
                                    <th className="bb-2 bg-inverse text-center mg">GP Margin</th>
                                </tr>
                            </thead>
                            <tbody className="dataTables_scrollBody fix" style={{ position: 'relative', overflow: 'auto', width: '100%', maxHeight: '50vh' }}>
                                {items.map((item, index) => (   //here we map through the items
                                    <tr className='bg-white' key={index}>

                                        <td>{item.locationName}</td>
                                        <td>{item.todayQty}</td>
                                        <td>{item.todayQty}</td>
                                        <td>{item.todayQty}</td>
                                        <td>{item.todayQty}</td>
                                        <td>{item.todayQty}</td>
                                        <td>{item.todayQty}</td>
                                    </tr>
                                ))}




                            </tbody>
                        </table> */}

                    </div>

                </div>
            </div>
            {/* Chart */}
            <div className='top ' >
                <p className="text-center h4 ">Location Wise Category Detail Report</p>

                <div className="container-fluid mb-3 mt-5 alig top2" >
                    <Chart
                        type="pie"
                        width={300}
                        height={320}

                        series={studentMarks}

                        options={{

                            noData: { text: "Loading" },
                            // colors:["#f90000","#f0f"],
                            colors: ['#5E667F', '#19B28E', '#5E667F', '#FFD72F', '#592975', '#71CC81', '#199AA3'],
                            labels: stdudentSubject,
                            legend: {
                                show: false
                            }

                        }}
                    >
                    </Chart>
                </div>
            </div>
        </>
    )
}

export default Description