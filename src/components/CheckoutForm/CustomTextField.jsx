import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext } from 'react-hook-form'
import { Controller } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                control={control}
                defaultValue=""
                name={name}
                render = {({ field})=> (
                    <TextField
                        fullWidth
                        label={label}
                        required
                    />
                )}
            />
        </Grid>
    )
}

export default FormInput