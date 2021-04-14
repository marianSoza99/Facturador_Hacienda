import React ,{ Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import StepContent from '@material-ui/core/StepContent';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Uploader from './Uploader'
//import axios from 'axios';



const useStyles = makeStyles((theme) => ({
  root: {
    color: '#784af4',
  },
  appBar: {
    position: 'relative',
    background: 'linear-gradient(45deg, #283593 90%, #1de9b6 30%)',
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));
/*
function getStepContent(step) {
  switch (step) {
    case 0:
      return <HeaderForm />;
    case 1:
      return <EmisorForm />;
    case 2:
      return <PaymentForm />;
    case 3:
      return <BillForm />;
    case 4:
      return <DetalleFacturaForm />;

    case 5:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}
*/

 class Bill extends Component {

  constructor(props){
    super(props);
    this.state = {
      steps: ['Sucursal','Emisor', 'Receptor', 'Datos Encabezado' , 'Datos Detalle Factura', 'Documentos de referencia y otros'],
      activePanel: 0
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }

  handleComboBoxChange(event, value) {
    this.setState({[event]:value});
    console.log(event, value);
  }

  handleSubmit(event) {
    alert('Factura generada');
    event.preventDefault();
  }

  swapFormActive = param => {
    this.setState({
      activePanel: param
    });
  }

  handleNext = () => {
    const { activePanel } = this.state;
    this.setState({
      activePanel: activePanel + 1
    });
  };

  handleBack = () => {
    const { activePanel } = this.state;
    this.setState({
      activePanel: activePanel - 1
    });
  };


  render() {
  const classes = this.props.classes;
  const {steps} = this.state;
  const  act_e= [{label:'CULTIVO Y VENTA DE CEREALES'}, {label:'LEGUMBRES Y GRANOS BÁSICOS NO INCLUIDAS EN CANASTA BÁSICA'}, {label:'ELABORACIÓN DE CHOCOLATE'}, {label:'IMPRESIÓN DIGITAL'}];
  const  sucursales= [{label:'Sucursal 1'}, {label:'Sucursal 2'}, {label:'Sucursal 3'}, {label:'Sucursal 4'}];
  const  doc_options= [{label:'Factura Electrónica'}, {label:'Nota de débito Electrónica'}, {label:'Nota de crédito Electrónica'}, {label:'Tiquete Electrónico'}, {label:'Factura Electrónica de compra'}, {label:'Factura Electrónica de compra'}];
  const  act_emisor= [{label:'Juridica Nacional'}, {label:'Físico Nacional'}, {label:'DIDI'}, {label:'NITE'}, {label:'Pasaporte'}, {label:'DIMEX'}];
  const  act_rec= [{label:'DIMEX'}, {label:'NITE'}, {label:'DIDI'}, {label:'Físico Nacional'}, {label:'Pasaporte'}, {label:'Juridica Nacional'}];
  const  act_v= [{label:'Código vendedor'}, {label:'Código comprador'}, {label:'Assignado por la industria'}, {label:'Uso interno'} , {label:'Otros'}];
  const  act_paymentType= [{label:'Contado'}, {label:'Crédito'}, {label:'Consignación'}, {label:'Apartado'},  {label:'Arrendamiento con opción de compra'},  {label:'Arrendamiento en función financiera'},  {label:'Servicios prestados al Estado a crédito'}, {label:'Pago de servicios prestados al Estado'}, {label:'Otro'}];
  const  currency= [{label:'CRC-Colón Costarricense'}, {label:'USD-Dolár Americano'}];
  const  paymentMethod= [{label:'Efectivo'}, {label:'Tarjeta'}, {label:'Transferencia - depósito bancario'}, {label:'Recaudado por terceros'}, {label:'Otros'}];
  const  unitOfMeasure = [{label:'unidad'}, {label:'hora'}, {label:'día'}, {label:'minuto'}, {label:'g-gramo'}]
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Facturador Hacienda
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
          Emisión de comprobante electrónico
          </Typography>
          <Uploader url="http://localhost:5000/bill/uploadCertificate"/>
          <Stepper activeStep={this.state.activePanel} className={classes.stepper} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className = {classes.root}>{label}</StepLabel>
                <StepContent>
                  {this.state.activePanel === 0 && (
                  <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                      Información del sucursal
                    </Typography>
                    <Grid container spacing={5}>
                      <Grid item xs={12} sm={6}>
                        <Autocomplete
                        name="businesstype_combobox"
                        options={act_e}
                        value = {this.state.businesstype_Value}
                        inputValue = {this.state.businesstype_inputValue}
                        onChange={( _, newValue) => {    
                          this.handleComboBoxChange("businesstype_Value", newValue);
                        }}
                        onInputChange={( _, newInputValue) => {    
                          this.handleComboBoxChange("businesstype_inputValue", newInputValue);
                        }}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 250 }}
                        renderInput={(params) => <TextField {...params} label="Actividad Económica" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Autocomplete
                          id="business_combobox"
                          options={sucursales}
                          value = {this.state.business_combobox_Value}
                          inputValue = {this.state.business_combobox_inputValue}
                          onChange={( _, newValue) => {    
                            this.handleComboBoxChange("business_combobox_Value", newValue);
                          }}
                          onInputChange={( _, newInputValue) => {    
                            this.handleComboBoxChange("business_combobox_inputValue", newInputValue);
                          }}
                            getOptionLabel={(option) => option.label}
                            style={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="Sucursal" variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          value = {this.state.id_sucursal}
                          onChange = {this.handleChange}
                          id="id_sucursal"
                          name="id_sucursal"
                          label="Número de sucursal"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          value = {this.state.id_caja}
                          id="id_caja"
                          name="id_caja"
                          label="Número de caja"
                          fullWidth
                          onInputChange = {this.handleChange}

                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Autocomplete
                          id="document_combobox"
                          
                          options={doc_options}
                            getOptionLabel={(option) => option.label}
                            style={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Tipo de documento" variant="outlined" />}
                            value = {this.state.document_combobox_Value}
                            inputValue = {this.state.document_combobox_inputValue}
                            onChange={( _, newValue) => {    
                              this.handleComboBoxChange("document_combobox_Value", newValue);
                            }}
                            onInputChange={( _, newInputValue) => {    
                              this.handleComboBoxChange("document_combobox_inputValue", newInputValue);
                            }}
                          />
                      </Grid> 
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      Siguiente
                    </Button>
                  </React.Fragment>
                  )}
                   {this.state.activePanel === 1 && (
                      <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Datos del emisor
                      </Typography>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                          <Autocomplete
                          id="idEmisor_combobox"
                          options={act_emisor}
                          value = {this.state.idEmisor_combobox_Value}
                          inputValue = {this.state.idEmisor_combobox_inputValue}
                          onChange={( _, newValue) => {    
                            this.handleComboBoxChange("idEmisor_combobox_Value", newValue);
                          }}
                          onInputChange={( _, newInputValue) => {    
                            this.handleComboBoxChange("idEmisor_combobox_inputValue", newInputValue);
                          }}
                            getOptionLabel={(option) => option.label}
                            style={{ width: 250 }}
                            renderInput={(params) => <TextField {...params} label="Tipo de Identificación" variant="outlined" />}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            value = {this.state.idnumber}
                            id="idnumber"
                            label="Número de identificación"
                            onChange = {this.handleChange}
                            fullWidth
                            autoComplete="Número de identificación"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField required id="name_emisor" label="Nombre" fullWidth autoComplete="name" value = {this.state.name_emisor} onChange = {this.handleChange} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            required
                            value = {this.state.email_receptor}
                            onChange = {this.handleChange}
                            id="email_receptor"
                            label="Correo electrónico"
                            fullWidth
                            autoComplete="correo"
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField required id="phone_receptor" label="Teléfono" fullWidth autoComplete="Teléfono" value = {this.state.phone_receptor} onChange = {this.handleChange} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField required id="address_receptor" label="Dirección" fullWidth autoComplete="Dirección" value = {this.state.address_receptor} onChange = {this.handleChange} />
                        </Grid>
                      </Grid>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Atrás
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Siguiente
                        </Button>
                      </React.Fragment>
                   )}
                    {this.state.activePanel === 2 && (
                      <React.Fragment>
                        <Typography variant="h6" gutterBottom>
                          Datos del receptor
                        </Typography>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                            id="idtype_combobox"
                              options={act_rec}
                              inputValue = {this.state.idEmisor_combobox_inputValue}
                              onChange={( _, newValue) => {    
                                this.handleComboBoxChange("idEmisor_combobox_Value", newValue);
                              }}
                              onInputChange={( _, newInputValue) => {    
                                this.handleComboBoxChange("idEmisor_combobox_inputValue", newInputValue);
                              }}
                              getOptionLabel={(option) => option.label}
                              style={{ width: 250 }}
                              renderInput={(params) => <TextField {...params} label="Tipo de Identificación" variant="outlined" />}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              required
                              value = {this.state.idnumber}
                              onChange = {this.handleChange}
                              id="idnumber"
                              label="Número de identificación"
                              fullWidth
                              autoComplete="Número de identificación"
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField required id="name_receptor" label="Nombre" fullWidth autoComplete="name" value = {this.state.name_receptor}
                              onChange = {this.handleChange} />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <TextField
                              required
                              id="email_receptor"
                              label="Correo electrónico"
                              value = {this.state.idnumber}
                              onChange = {this.handleChange} 
                              fullWidth
                              autoComplete="correo"
                            />
                          </Grid>
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Atrás
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Siguiente
                        </Button>
                      </React.Fragment> 
                    )}
                    {this.state.activePanel === 3 && (
                      <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Datos de pago
                      </Typography>
                      <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>
                          <Autocomplete
                          id="paymethodType_combobox"
                          value = {this.state.paymethodType_combobox_Value}
                          inputValue = {this.state.paymethodType_combobox_inputValue}
                          onChange={( _, newValue) => {    
                            this.handleComboBoxChange("paymethodType_combobox_Value", newValue);
                          }}
                          onInputChange={( _, newInputValue) => {    
                            this.handleComboBoxChange("paymethodType_combobox_inputValue", newInputValue);
                          }}
                           options={act_paymentType}
                            getOptionLabel={(option) => option.label}
                             style={{ width: 250 }}
                             renderInput={(params) => <TextField {...params} label="Codición de venta" variant="outlined" />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Autocomplete
                            id="currencyType_combobox"
                            value = {this.state.currencyType_combobox_Value}
                            inputValue = {this.state.currencyType_combobox_inputValue}
                            onChange={( _, newValue) => {    
                              this.handleComboBoxChange("currencyType_combobox_Value", newValue);
                            }}
                            onInputChange={( _, newInputValue) => {    
                              this.handleComboBoxChange("currencyType_combobox_inputValue", newInputValue);
                            }}
                            options={currency}
                              getOptionLabel={(option) => option.label}
                              style={{ width: 250 }}
                              renderInput={(params) => <TextField {...params} label="Moneda de venta" variant="outlined" />}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            id="id_credit_time"
                            value = {this.state.id_credit_time}
                            onChange = {this.handleChange}
                            name="id_credit"
                            label="Plazo de crédito"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            value = {this.state.id_exchangeType}
                            onChange = {this.handleChange}
                            id="id_exchangeType"
                            name="id_exchangeType"
                            label="Tipo de cambio"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            value = {this.state.id_saleCondition}
                            onChange = {this.handleChange}
                            id="id_saleCondition"
                            name="id_saleCondition"
                            label="Detalle de condición de venta"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            value = {this.state.id_saleCondition}
                            onChange = {this.handleChange}
                            id="id_exchangeTypeDetail"
                            name="id_exchangeTypeDetail"
                            label="Detalle de forma de cambio"
                            fullWidth
                          />
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                            id="payMethod"
                            value = {this.state.payMethod_combobox_Value}
                            inputValue = {this.state.payMethod_combobox_inputValue}
                            onChange={( _, newValue) => {    
                              this.handleComboBoxChange("payMethod_combobox_Value", newValue);
                            }}
                            onInputChange={( _, newInputValue) => {    
                              this.handleComboBoxChange("payMethod_combobox_inputValue", newInputValue);
                            }}
                            options={paymentMethod}
                              getOptionLabel={(option) => option.label}
                              style={{ width: 400 }}
                              renderInput={(params) => <TextField {...params} label="Forma de pago" variant="outlined" />}
                              
                            />
                        </Grid> 
                        </Grid>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Atrás
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Siguiente
                        </Button>
                      </React.Fragment>
                    )}
                    {this.state.activePanel === 4 && (
                     <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                          Ingreso de Productos
                        </Typography>
                     <Grid container spacing={3}>
                     <Grid item xs={6} spacing={3}>
                       
                       <Autocomplete
                        id="idtype_combobox"
                        options={act_v}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 400 }}
                          renderInput={(params) => <TextField {...params} label="Tipo de código" variant="outlined" />}
                        />

                        <TextField
                          required
                          id="idProduct"
                          label="Código"
                          style={{ margin: 8 }}
                          margin="normal"
                          fullWidth
                          autoComplete="Código"
                        />
                        <TextField
                          required
                          id="descriptionProduct"
                          label="Descripción"
                          style={{ margin: 10 }}
                          fullWidth
                          margin="normal"
                          
                          autoComplete="Descripción"
                        />
                      <Autocomplete
                        required
                        id="idtype_combobox"
                        options={unitOfMeasure}
                        getOptionLabel={(option) => option.label}
                        style={{ width: 400 }}
                        renderInput={(params) => <TextField {...params} label="Unidad de medida" variant="outlined" />}
                      />

                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        >
                        Agregar línea
                      </Button> 
                     </Grid>
                     <Grid item xs={6}>
                       
                       <Autocomplete
                        id="idtype_combobox"
                        options={act_e}
                          getOptionLabel={(option) => option.label}
                          style={{ width: 400 }}
                          renderInput={(params) => <TextField {...params} label="Tipo de código" variant="outlined" />}
                          />
                         
                     </Grid>
                     <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Atrás
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Siguiente
                        </Button>
                      
                     </Grid>
                     </React.Fragment>
                    )}
                    {this.state.activePanel === 5 &&(
                      <React.Fragment>
                      <Typography variant="h6" gutterBottom>
                        Documentos de referencia
                      </Typography>
                      <Typography variant="h6" gutterBottom>
                        Otros
                      </Typography>
                        <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleBack}
                        className={classes.button}
                        >
                        Atrás
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                        >
                          Siguiente
                        </Button>
                      </React.Fragment>
                    )} 
                </StepContent>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {this.state.activePanel === steps.length &&  (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Resumen
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleBack}
                  className={classes.button}
                  >
                  Atrás
                </Button>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
  }
}


export default () => {

  const classes = useStyles();
  return <Bill classes={classes} />;
}
