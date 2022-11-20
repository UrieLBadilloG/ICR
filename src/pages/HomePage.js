import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ScrollbarWrapper } from "../components/scroll";
import DeliveryPage from "./DeliveryPage";
import ServicesPage from "./ServicesPage";
import AutonomusPage from "./AutonomusPage";
import BiologyPage from "./BiologyPage";
import TestPage from "./TestPage";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const vista1 = () => {
        setOpen(!open);
        if (!open) {
            //presionado
            document.getElementById("item1").style.display = "none";
            document.getElementById("item2").style.gridColumn = "1/20";
        } else {
            document.getElementById("item1").style.display = "block";
            document.getElementById("item2").style.gridColumn = "11/20";
        }
    };
    const vista2 = () => {
        setOpen1(!open1);
        if (!open1) {
            document.getElementById("item2").style.display = "none";
            document.getElementById("item1").style.gridColumn = "1/20";
        } else {
            document.getElementById("item2").style.display = "block";
            document.getElementById("item1").style.gridColumn = "1/10";

        }
    };
    const vista3 = () => {
        setOpen2(!open2);
        if (!open2) {
            document.getElementById("item3").style.display = "none";
            document.getElementById("item4").style.gridColumn = "1/20";

        } else {
            document.getElementById("item3").style.display = "block";
            document.getElementById("item4").style.gridColumn = "11/20";

        }
    };
    const vista4 = () => {
        setOpen3(!open3);
        if (!open3) {
            document.getElementById("item4").style.display = "none";
            document.getElementById("item3").style.gridColumn = "1/20";
        } else {
            document.getElementById("item4").style.display = "block";
            document.getElementById("item3").style.gridColumn = "1/10";
        }
    };
    const vista5 = () => {
        setOpen4(!open4);
        if (!open4) {
            document.getElementById("item5").style.display = "none";
            document.getElementById("item6").style.gridColumn = "1/20";

        } else {
            document.getElementById("item5").style.display = "block";
            document.getElementById("item6").style.gridColumn = "11/20";

        }
    };
    const vista6 = () => {
        setOpen5(!open5);
        if (!open5) {
            document.getElementById("item6").style.display = "none";
            document.getElementById("item5").style.gridColumn = "1/20";

        } else {
            document.getElementById("item6").style.display = "block";
            document.getElementById("item5").style.gridColumn = "1/10";

        }
    };
    const style = {
        background: "rgb(30,30,30)",
        display: "grid",
        gridTemplateColumns:
            "5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% ",
        gridTemplateRows: "5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%5% 5% 5% 5% ",
        gap: "2px",
    };
    const color = {
        background: "red",
    };
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>;
    return (
        <Card className="container" style={style}>
            <Box className="but">
                <Button
                    onClick={() => {
                        vista1();
                    }}
                    style={{
                        backgroundColor: open ? "black" : "#b968e2",
                        color: open ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista1
                </Button>
                {tab}
                <Button
                    onClick={() => {
                        vista2();
                    }}
                    style={{
                        backgroundColor: open1 ? "black" : "#b968e2",
                        color: open1 ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista2
                </Button>
                {tab}
                <Button
                    onClick={() => {
                        vista3();
                    }}
                    style={{
                        backgroundColor: open2 ? "black" : "#b968e2",
                        color: open2 ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista3
                </Button>
                {tab}
                <Button
                    onClick={() => {
                        vista4();
                    }}
                    style={{
                        backgroundColor: open3 ? "black" : "#b968e2",
                        color: open3 ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista4
                </Button>
                {tab}
                <Button
                    onClick={() => {
                        vista5();
                    }}
                    style={{
                        backgroundColor: open4 ? "black" : "#b968e2",
                        color: open4 ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista5
                </Button>
                {tab}
                <Button
                    onClick={() => {
                        vista6();
                    }}
                    style={{
                        backgroundColor: open5 ? "black" : "#b968e2",
                        color: open5 ? "white" : "white",
                        borderRadius: "1rem",
                        height: "80%",
                        width: "10%",
                    }}
                >
                    Vista6
                </Button>
            </Box>
            <CardContent
                className="item1"
                id="item1"
                sx={{
                    background: "black",
                    borderRadius: "1rem",
                    display: "block",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <DeliveryPage />
                </ScrollbarWrapper>
            </CardContent>
            <CardContent
                className="item2"
                id="item2"
                sx={{
                    background: "black",
                    display: "block",
                    borderRadius: "1rem",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <DeliveryPage />

                </ScrollbarWrapper>
            </CardContent>
            <CardContent
                className="item3"
                id="item3"
                sx={{
                    background: "black",
                    display: "block",
                    borderRadius: "1rem",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <AutonomusPage />

                </ScrollbarWrapper>
            </CardContent>
            <CardContent
                className="item4"
                id="item4"
                sx={{
                    background: "black",
                    display: "block",
                    borderRadius: "1rem",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <ServicesPage />
                </ScrollbarWrapper>
            </CardContent>
            <CardContent
                className="item5"
                id="item5"
                sx={{
                    background: "black",
                    display: "block",
                    borderRadius: "1rem",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <BiologyPage />
                </ScrollbarWrapper>
            </CardContent>
            <CardContent
                className="item6"
                id="item6"
                sx={{
                    background: "black",
                    display: "block",
                    borderRadius: "1rem",
                    color: "white",
                    height: "300px",
                }}
            >
                <ScrollbarWrapper>
                    <TestPage />
                </ScrollbarWrapper>
            </CardContent>
        </Card>
    );
};

export default HomePage;
