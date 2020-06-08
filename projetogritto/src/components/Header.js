import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import Typed from 'react-typed';

// CSS STYLES
const useStyles = makeStyles(theme => ({  
    title: {
        color: "#ffffec",
        fontSize: "5rem"
    },
    subtitle: {
        color: "tan",
        fontSize: "2rem",
        marginBottom: "3rem"
    },    
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",             
        zIndex: 1        
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.typedContainer} style={{maxWidth: "100%" }}>          
                <Typography className={classes.title} variant="h4" >
                    <Typed strings={["GRITTO"]} typeSpeed={40} />
                </Typography>
                <br/>           
                <Typography className={classes.subtitle} variant="h5">
                    <Typed 
                    strings={["Seviços", "Qualidade", "Garantia" ]} 
                    typeSpeed={40} 
                    backSpeed={60}              
                    loop
                    style={{ textDecoration: "none" }}
                    />
                </Typography>
            </Box>             
       </>          
    );
};

export default Header;