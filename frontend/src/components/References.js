import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import button from '@material-ui/lab/ToggleButton';

const  act_e= [{label:'Juridica Nacional'}, {label:'Físico Nacional'}, {label:'DIDI'}, {label:'NITE'}, {label:'Pasaporte'}, {label:'DIMEX'}];


export default function EmisorForm() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <TextField
            required
            id="idPIN"
            label="PIN"
            fullWidth
            autoComplete="PIN"
          />
        </Grid>
        <Grid item xs={12} sm={12}>        
            <button onclick="Cargar()">
                Cargar
            </button>
            </Grid>       
       
      </Grid>
    </React.Fragment>
  );
}