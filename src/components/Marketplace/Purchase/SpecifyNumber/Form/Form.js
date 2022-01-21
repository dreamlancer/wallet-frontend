import React from 'react';
import {Autocomplete, Box, Grid, Typography} from "@mui/material";
import {ConfirmButton, FieldLabel, InputField, PreviewField, PreviewFieldSmall} from "./style";

const options = [{label: "1"}, {label: "2"},]

function Form(props) {
    return (<Grid container sx={{mt: 4}}>
        <Grid item xs={12}>
            <Typography variant={"h1"} component={"div"} sx={FieldLabel}>
                Amount CFT
            </Typography>
            <InputField placeholder={"Amount"}/>
        </Grid>
        <Grid item xs={12}>
            <Typography variant={"h1"} component={"div"} sx={FieldLabel}>
                Choose
            </Typography>
            <Autocomplete
                id="country-select-demo"
                options={options}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(props, option) => (<Box component="li" sx={{
                    '& > img': {
                        mr: 2, flexShrink: 0
                    }
                }} {...props}>

                    {option.label}
                </Box>)}
                renderInput={(params) => (<InputField
                    {...params}
                    name={"country"}
                    placeholder={"Choose.."}
                    inputProps={{
                        ...params.inputProps, autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />)}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant={"h1"} component={"div"} sx={FieldLabel}>
                Total
            </Typography>
            <PreviewField placeholder={"Amount"} defaultValue="0$"
                          InputProps={{
                              readOnly: true,
                          }}/>
        </Grid>
        <Grid item container spacing={2}>
            <Grid item xs={6}>
                <Typography variant={"h1"} component={"div"} sx={FieldLabel}>
                    Bonus Amount
                </Typography>
                <PreviewFieldSmall placeholder={"Amount"} defaultValue="0 CFT"
                                   InputProps={{
                                       readOnly: true,
                                   }}/>
            </Grid>

            <Grid item xs={6}>
                <Typography variant={"h1"} component={"div"} sx={FieldLabel}>
                    Delivery Rate
                </Typography>
                <PreviewFieldSmall placeholder={"Deleviry Rate"} defaultValue="-"
                                   InputProps={{
                                       readOnly: true,
                                   }}/>
            </Grid>

            <Grid item xs={6}>
                <ConfirmButton>Confirm</ConfirmButton>
            </Grid>

        </Grid>
    </Grid>);
}

export default Form;