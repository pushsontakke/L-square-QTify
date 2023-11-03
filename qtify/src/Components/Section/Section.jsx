import {useState} from "react";
import styles from "./Section.module.css";
import {Box, CircularProgress} from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../Tabs/Tabs";
import {createTheme, ThemeProvider} from "@mui/material/styles";

export const Section = ({
                            data,
                            type,
                            title,
                            filteredData = null,
                            filteredDataValues = [],
                            value = 0,
                            handleChange
                        }) => {

    const [carouselToggle, setCarouselToggle] = useState(false);
    const handleToggle = () => {
        setCarouselToggle(!carouselToggle);
    }

    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        textTransform: 'none', // to remove text-transform
                    },
                },
            },
            MuiTabs: {
                styleOverrides: {
                    indicator: {
                        backgroundColor: '#34C94B',
                    }
                }
            }
        }
    })


    return (
        <div className={styles.mainSection}>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toogleText} onClick={handleToggle}>
                    {!carouselToggle ? "Show All" : "Collapse All"}
                </h4>
            </div>

            {type === "songs" ? (<ThemeProvider theme={theme}>
                <BasicTabs value={value} handleChange={handleChange}/>
            </ThemeProvider>) : null}

            {
                data.length === 0 ? (
                    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress/>
                    </Box>
                ) : (
                    <div className={styles.cardsWrapper}>
                        {
                            carouselToggle ? (
                                <div className={styles.wrapper}>
                                    {
                                        filteredDataValues.map(item => {
                                            return (
                                                <Card data={item} type={type}/>
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <Carousel data={data} renderComponent={(data) => <Card data={data} type={type}/>}/>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Section;