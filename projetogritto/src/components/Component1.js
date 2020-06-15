import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, TextField, NativeSelect, InputLabel, FormControl, Button } from '@material-ui/core';
import Navbar2 from './Navbar2';
import Cpf from '../utils/Cpf';
import BasicDatePicker from '../utils/BasicDatePicker';

const useStyles = makeStyles((theme) => ({ 
  form: {                        
    display: "flex",
    flexGrow: 1,
    padding: theme.spacing(2)
},
selectEmpty: {
    marginTop: theme.spacing(2),
  },
   formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  
}));

const InputField = withStyles({
    root: {                 
         
        "& label.Mui-focused": {            
            color: "#7BB0FF",
        },
        "& label": {            
            color: "#a0a0a0",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {               
                borderColor: "#a0a0a0",                
            },
            "&:hover fieldset": {                
                borderColor: "#a0a0a0",
            },                
            "&.Mui-focused fieldset": {               
                borderColor: "#7BB0FF",
            },
        },
    },
})(TextField);  

export default function Formulario() {  
    const classes = useStyles();
        const [state, setState] = React.useState({
        age: '',
        name: 'age',         
 });    

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
        ...state,
        [name]: event.target.value,
        });
    };
    
    return (
        <>
            <Navbar2 />
            <CssBaseline />
            <Container maxWidth="md" style={{ backgroundColor: '#fafafa',  maxWidth: "60%", zIndex: 1, }}>
                <Typography variant="h4" style={{ color: "black", textAlign: "justify", textTransform: "uppercase", marginBottom: "1rem", paddingTop: "6rem", margin: "1rem" }}>Dados Pessoais</Typography>
                <div className={classes.form}>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <InputField
                                label="Nome "
                                placeholder="Nome completo"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                              />
                        </Grid >
                        <Grid item md={4}>
                            <InputField
                                label="RG"
                                placeholder="RG"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                              />
                        </Grid >
                        <Grid item sm={4}>
                            <Cpf />
                        </Grid >
                        <Grid item md={4}>
                            <BasicDatePicker />
                        </Grid >
                        <Grid item md={4}>
                            <InputField
                                label="Telefone"
                                placeholder="(45) 3333-3333"                               
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="Celular"
                                placeholder="(45) 99999-9999"                               
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <FormControl>
                                <InputLabel>Estado Civil</InputLabel>
                                <NativeSelect
                                    size="medium"                                  
                                    style={{ width: "13rem" }}
                                    value={state.age}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: 'age',
                                        id: 'age-native-helper',
                                      }}
                                  >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Solteiro(a)</option>
                                    <option value={20}>Casado(a)</option>
                                    <option value={30}>Divorciado</option>
                                    <option value={40}>Separado(a)</option>
                                    <option value={50}>Viuvo(a)</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>                       
                        <Grid item md={4}>
                        <FormControl>
                                <InputLabel>Sexo</InputLabel>
                                <NativeSelect                               
                                size="medium"                                  
                                style={{ width: "13rem" }}
                                inputProps={{
                                    name: 'name',
                                    id: 'uncontrolled-native',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={10}>Masculino</option>
                                <option value={20}>Feminino</option>                               
                                </NativeSelect>               
                            </FormControl>
                        </Grid >                     
                    </Grid >              
                 </div>
                <Grid item md={4}>
                    <Typography variant="h5" style={{ color: "black", textAlign: "justify", textTransform: "uppercase", marginBottom: "1rem", paddingTop: "2rem", margin: "1rem" }}>Endereço</Typography>
                </Grid >
                <div className={classes.form}>
                    <Grid container spacing={3}>
                        <Grid item md={4} >
                            <InputField
                                label="Cep "
                                placeholder="Cep"
                                margin="dense"
                                size="medium"
                                style={{ width: "9rem" }}
                            />
                        </Grid >
                        <Grid item md={4}></Grid>                        
                        <Grid item md={4}></Grid>                       
                        <Grid item md={6}>
                            <InputField
                                label="Endereço "
                                placeholder="Endereço"
                                margin="dense"
                                size="medium"
                                style={{ width: "20rem" }}
                            />
                        </Grid>
                        <Grid item md={3}>
                            <InputField
                                label="Numero "
                                placeholder="Numero"
                                type="number"
                                margin="dense"
                                size="medium"
                                style={{ width: "9rem" }}
                            />
                        </Grid>
                        <Grid item md={3}>
                            <InputField
                                label="Complemento "
                                placeholder="Complemento"
                                margin="dense"
                                size="medium"
                                style={{ width: "9rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="Bairro "
                                placeholder="Bairro"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="Cidade"
                                placeholder="Cidade"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="Estado"
                                placeholder="Estado"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="E-mail"
                                placeholder="E-mail"
                                type="email"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}>
                            <InputField
                                label="Confirmar e-mil"
                                placeholder="Confirmar e-mil"
                                type="email"
                                margin="dense"
                                size="medium"
                                style={{ width: "13rem" }}
                            />
                        </Grid>
                        <Grid item md={4}></Grid>                        
                        <Grid item md={4}>
                        <Button variant="contained" color="inherit" size="large">ENVIAR</Button>{' '} 
                            </Grid>                        
                        <Grid item md={4}></Grid>                        
                        <Grid item md={4}></Grid>                       
                        <Grid item md={4}></Grid>                       
                    </Grid >
                </div>  
                           
            </Container>
        </>
    );
    
}


