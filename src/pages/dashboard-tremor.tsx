import Head from 'next/head'
import {
    BarChart,
    ButtonInline,
    Card,
    Col,
    ColGrid,
    DonutChart,
    Footer,
    LineChart,
    SelectBox,
    SelectBoxItem,
    Title
} from "@tremor/react";
import {ArrowRightIcon} from "@heroicons/react/24/outline/index";

import {useMemo} from "react";

function DashboardTremor() {

    const chartdata = useMemo(() => [
        {
            name: "Apples",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        }, {
            name: "Balloons",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        }, {
            name: "Capabilities Now",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        }, {
            name: "Dogs",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        }, {
            name: "Eggplants",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        }, {
            name: "Folly",
            "Cat1": Math.round(500 + Math.random() * 3000),
            "Cat2": Math.round(500 + Math.random() * 3000),
            "Cat3": Math.round(500 + Math.random() * 3000),
        },
    ], []);

    const donutChartData = useMemo(() => [
        {
            name: "Apples",
            sales: Math.round(500 + Math.random() * 3000),
        }, {
            name: "Balloons",
            sales: Math.round(500 + Math.random() * 3000),
        }, {
            name: "Balloons",
            sales: Math.round(500 + Math.random() * 3000),
        }
    ], []);

    const lineChartData = [
        {
            year: 1951,
            "Population growth rate": 1.74,
        },
        {
            year: 1952,
            "Population growth rate": 1.93,
        },
        {
            year: 1953,
            "Population growth rate": 1.9,
        },
        {
            year: 1954,
            "Population growth rate": 1.98,
        },
        {
            year: 1955,
            "Population growth rate": 2,
        },
    ];

    const dataFormatter = (number: number) => {
        return number.toString();
    };

    return (

        <div className={"min-h-screen"}>

            <Head>
                <title>Local Beer - Dashboard</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"max-w-7xl md:mx-auto p-6"}>

                <ColGrid numCols={1}
                         numColsSm={1}
                         numColsLg={3}
                         gapX="gap-x-2"
                         gapY="gap-y-2">

                    <Col numColSpan={1} numColSpanSm={2}>

                        <Card shadow={true}>

                            <SelectBox
                                defaultValue={undefined}
                                handleSelect={undefined}
                                placeholder="Select..."
                                maxWidth="max-w-none"
                                marginTop="mt-0"
                            >
                                <SelectBoxItem
                                    value={undefined}
                                    text=""
                                    icon={undefined} />
                            </SelectBox>

                            <Title marginTop={"mt-8"}>Data</Title>

                            <BarChart data={chartdata}
                                      dataKey="name"
                                      categories={["Cat1", "Cat2", "Cat3"]}
                                      colors={["blue", "indigo", "slate"]}
                                      valueFormatter={dataFormatter}
                                      yAxisWidth="w-12"
                                      showGridLines={false}
                                      autoMinValue={true}
                                      showLegend={false}
                                      showYAxis={false}/>

                            <Footer>
                                <ButtonInline
                                    size="sm"
                                    text="View details"
                                    icon={ ArrowRightIcon }
                                    iconPosition="right"
                                />
                            </Footer>

                        </Card>
                    </Col>
                    <Col numColSpan={1} numColSpanSm={2} numColSpanLg={1}>
                        <Card>

                            <Title>Data</Title>

                            <DonutChart data={donutChartData}
                                        category="sales"
                                        dataKey="name"
                                        colors={["gray", "blue"]}
                                        variant={"donut"}
                                        showLabel={true}/>

                            <Footer>
                                <ButtonInline
                                    size="sm"
                                    text="View details"
                                    icon={ ArrowRightIcon }
                                    iconPosition="right"
                                />
                            </Footer>

                        </Card>


                    </Col>
                    <Col numColSpan={1} numColSpanSm={2} numColSpanLg={1}>

                        <Card decoration="top" decorationColor="indigo">

                            <Title>Population growth rate (1951 to 2021)</Title>
                            <LineChart
                                data={lineChartData}
                                dataKey="year"
                                categories={["Population growth rate"]}
                                colors={["blue"]}
                                valueFormatter={dataFormatter}
                                marginTop="mt-6"
                                yAxisWidth="w-10"
                                showGradient={true}
                                autoMinValue={true}
                            />
                            <Footer>
                                <ButtonInline
                                    size="sm"
                                    text="View details"
                                    icon={ ArrowRightIcon }
                                    iconPosition="right"
                                />
                            </Footer>

                        </Card>

                    </Col>

                </ColGrid>
            </main>

        </div>
    )
}

export default DashboardTremor;