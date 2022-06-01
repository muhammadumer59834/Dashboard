import React, { useEffect, useState } from "react";
import axios from 'axios';
import Chart from 'react-apexcharts'

function Description() {

    // date

    const current = new Date();
    const date = `${current.getMonth() + 1}/${current.getDate()}/${current.getFullYear()}`;
    const MounthDate = `${current.getMonth()}/01/${current.getFullYear()}`;
    // table data fetching

    const [books, setBooks] = useState(null);

    // + adding the use
    useEffect(() => {
        getData();

        // we will use async/await to fetch this data
        async function getData() {
            const response = await fetch(`https://posapi.gtech.com.pk/api/post/SalesSummary?api=qTpq3bVFho&DateFrom${MounthDate}&DateTo=${date}`);
            const data = await response.json();

            // store the data into our books variable
            setBooks(data);
            console.log(data);
        }
    }, []); // <- you may need to put the setBooks function in this array



    return (
        <>

            <h4 className='mt-4'>Location Summary</h4>


            <div className='myTbl'>
                <hr className="mx-1" />

                <div className="row">
                    <div className="col-md-12 col-sm-12" >
                        <table className='tbl-category table table-hover display nowrap' width="100%">
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
                                {/*  */}
                                {/* display books from the API */}

                                {/*  */}




                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
            {/*  */}

                <table class="table mb-0">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

            {/* Chart */}
            <div className='top ' >
                <div className="container-fluid mb-3 mt-5 alig" >
                    {/* <Chart className='righ'
                        type="pie"
                        width={300}
                        height={320}

                        series={[ 200, 300, 500, 88, 334, 532, 456, 734, 223, 565, 777, 255, 244]}


                        options={{

                            colors: ['#C3C3C3', '#E5E5E5', '#71CC81', '#19B28E', '#F2F18B', ' #71CC81', ' #19B28E', '#216583', '#424D7B', '#FFD72F'],
                            noData: { text: "No Data" },
                            labels: [ 'ISB-CENTAURUS MALL', 'KHI-DOLMEN MALL CLIFTON', 'KHI-KDA MARKET', 'KHI-ATRM', 'KHI-UNIVERSITY ROAD', 'KHI-SHAHEED E MILLAT', 'PSW-UNIVERSITY ROAD', 'LHR-PACKAGES MALL', 'LHR-EMPORIUM MALL', 'MRPK-HYDERABAD ROAD', 'KWL-SIR SYED ROAD', 'SLKT-MALL OF SIALKOT FIRST FLOOR', 'DSK-COLLEGE ROAD'],
                            legend: {
                                show: false
                            }
                        }}
                    >
                    </Chart> */}
                </div>
            </div>
        </>
    )
}

export default Description