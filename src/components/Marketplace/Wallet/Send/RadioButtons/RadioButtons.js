import React from 'react'
import {Grid, Radio, Typography} from "@mui/material";

const RadioButtons = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <Grid item container spacing={3} xs={12} sx={{mt:1}}>
            <Grid item>
                <Typography
                    sx={{fontSize: "20px", color: "#54595F", fontFamily: "NotoSans", fontWeight: "600"}}
                    alignItems={"center"} display={"flex"}>
                    <Radio
                        checked={selectedValue === 'a'}
                        onChange={handleChange}
                        value="a"
                        name="radio-buttons"
                        inputProps={{'aria-label': 'A'}}
                        sx={{
                            borderRadius: "50%",
                            color: "black",
                            '&.Mui-checked': {
                                color: "black",
                            },
                        }}
                    />
                    Send Within CashFlash
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    sx={{fontSize: "20px", color: "#54595F", fontFamily: "NotoSans", fontWeight: "600"}}
                    alignItems={"center"} display={"flex"}>

                    <Radio
                        checked={selectedValue === 'b'}
                        onChange={handleChange}
                        value="b"
                        name="radio-buttons"
                        inputProps={{'aria-label': 'B'}}
                        sx={{
                            borderRadius: "50%",
                            color: "black",
                            '&.Mui-checked': {
                                color: "black",
                            },
                        }}
                    />
                    Send outside CashFlash
                </Typography>
            </Grid>
        </Grid>
    )
}

export default RadioButtons