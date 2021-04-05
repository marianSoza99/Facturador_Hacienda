import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core/styles';
import logo from "../images/detalleFactura.jpg";
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const  act_e= [{label:'Juridica Nacional'}, {label:'Físico Nacional'}, {label:'DIDI'}, {label:'NITE'}, {label:'Pasaporte'}, {label:'DIMEX'}];




const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${logo})`, 
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'center',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  margin: {
    margin: theme.spacing(1),
    alignItems: 'center',
  },

}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
    <Grid item xs={false} sm={4} md={6} className={classes.image} />
    <Grid item xs={12} sm={8} md={6} component={Paper}  square>
        <div className={classes.paper}>
        <Grid item xs={0} sm={0}>
          <Autocomplete
          id="idtype_combobox"
           options={act_e}
            getOptionLabel={(option) => option.label}
             style={{ width: 250 }}
             renderInput={(params) => <TextField {...params} label="Código de producto o servicio" variant="outlined" />}
             />
        </Grid>
          <form className={classes.form} noValidate>
          </form>
        </div>
      </Grid>
  </Grid>
  
  );
}