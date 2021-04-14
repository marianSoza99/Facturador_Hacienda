import React, {useState} from 'react';

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

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

var Uploader = function UploaderComponent(props){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    };

    const handleSubmission = () => {
    const formData = new FormData();

        formData.append('file', selectedFile);

    console.log(selectedFile)

        fetch(
            props.url,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return(
      <div>
          <Button
            variant="contained"
            component="label"
            color="primary"
            className={props.classes.button}
          >
            Seleccionar Archivo
            <input
              type="file"
              hidden
              name="file" 
              onChange={changeHandler}
            />
          </Button>
          {isFilePicked ? (
              <div>
                  <Typography variant="subtitle1">Nombre de archivo: {selectedFile.name}</Typography>
                  <Typography variant="subtitle1">Tipo de archivo: {selectedFile.type}</Typography>
                  <Typography variant="subtitle1">Tamaño en bytes: {selectedFile.size}</Typography>
              </div>
          ) : (
            <Typography variant="subtitle1">
            Seleccione un archivo
            </Typography>
          )}
          <div>
              <Button 
                onClick={handleSubmission}
                variant="contained"
                component="label"
                className={props.classes.button}>
                  Submit
              </Button>
          </div>
      </div>
    )
}

export default () => {
  const classes = useStyles();
  return <Uploader classes={classes} />
}